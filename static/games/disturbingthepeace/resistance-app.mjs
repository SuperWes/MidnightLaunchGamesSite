import {themeText, themeHTML, facePath} from './resistance-theme.mjs?v=27722b1e86f8';
import { RULES, DIFFICULTIES, rulesFor, newGame, inspectPlay, drawExtra, overcome, retreat, choicesAfter, continueJourney, dread, cardPower, encounterStatus, retreatRecovery, activeRules, extraDrawDread, chooseStartingLight, chooseOpeningSwap, extraDrawCost } from './game.mjs?v=27722b1e86f8';
import { playRules } from './play-rules.mjs?v=27722b1e86f8';

const root = document.getElementById('game');
const announce = document.getElementById('announcement');
const escape = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let definitions, state, route='strength', selected=new Set(), flipped=new Set(), shadowId=null, carryId=null, reward='none', error='', reflectId=null, boost=false, drawPaid=0;
let previousPhase=null, previousBlocked=false;
const art = facePath;
const cardDescription = (c,side) => side==='light' ? `${c.light}. ${c.strength} Strength, ${c.insight} Insight.` : `${c.dark}. ${c.fight} Strength or ${c.understand} Insight. Rule: ${c.twist} Bonus: ${c.condition}`;
function clearChoices(){ route='strength'; selected=new Set(); flipped=new Set(); shadowId=null; carryId=null; reward='none'; error=''; reflectId=null; boost=false; }
function fresh(seed=Math.floor(Math.random()*1000000),difficulty=state?.difficulty??'standard'){
  state=newGame(definitions,seed,difficulty);clearChoices();previousPhase=null;previousBlocked=false;
  const url=new URL(location.href);url.searchParams.set('seed',seed);url.searchParams.set('difficulty',difficulty);history.replaceState(null,'',url);
  render();announce.textContent=themeText(`New ${rulesFor(state).label} game. ${rulesFor(state).firstDraw} lights dealt. Vanquish ${rulesFor(state).goal} darkness cards.`);
}
function act(action,message=''){
  try{action();error='';}catch(e){error=e.message;}
  const notice=render(); announce.textContent=themeText(error||notice||(typeof message==='function'?message():message)||announce.textContent);
}
function imageFace(c,side,zoom=true){
  const img=`<img class="printed-face" src="${art(c.id,side)}" width="750" height="1050" alt="${escape(cardDescription(c,side))}" draggable="false">`;
  return zoom?`<button class="card-zoom" data-action="inspect" data-id="${c.uid||c.id}" data-side="${side}" aria-label="Inspect ${escape(side==='dark'?c.dark:c.light)}">${img}</button>`:img;
}
function lightCard(c){
  const side=flipped.has(c.uid)?'dark':'light', use=selected.has(c.uid), power=cardPower(state,c,route,reflectId),zero=power<=0,other=route==='strength'?'insight':'strength';
  return `<article class="hand-card ${use?'selected':''}" data-card-id="${c.uid}">${imageFace(c,side)}
    <div class="card-controls"><button class="flip" data-action="flip" data-id="${c.uid}" aria-label="Turn over ${escape(c.light)}">Turn over</button>${state.carriedUid===c.uid?'<span class="carry-tag">Carried</span>':''}</div>
    <button class="select-card" data-action="select" data-id="${c.uid}" aria-label="${use?'Unselect':'Spend'} ${escape(c.light)}" aria-pressed="${use}" ${zero&&!use?'disabled':''}>${use?'Selected':zero?`No ${route}`:`Use ${power} ${route}`}</button>
    ${activeRules(state).has('reflect_one')&&c[other]>0&&c[other]!==c[route]?`<button class="reflect-light quiet" data-action="reflect" data-id="${c.uid}" aria-pressed="${reflectId===c.uid}">${reflectId===c.uid?'Reflected · undo':`Reflect · use ${c[other]} ${route}`}</button>`:''}
    ${power!==c[route]?`<p class="adjusted">${c[route]} printed → ${power} here</p>`:''}</article>`;
}
function tracker(id,value){
  const rules=rulesFor(state),health=id==='health',start=health?rules.startingHearts:rules.startingSparks,max=health?start:rules.maxSparks,label=health?'Health':'Sparks';
  return `<figure class="tracker" aria-label="${label}: ${value} of ${max}"><div class="tracker-space"><img src="${art(id,start===2?'dark':'light')}" alt="${label} rotation tracker, ${value} at the top" style="transform:rotate(${(start-value)*90}deg)" width="750" height="1050"></div><figcaption>${label} <strong>${value} / ${max}</strong></figcaption></figure>`;
}
function statusBar(){
  const rules=rulesFor(state);
  return `<div class="status-bar"><div class="goal"><strong>Victories</strong><span class="pips" aria-hidden="true">${Array.from({length:rules.goal},(_,i)=>`<i class="${i<state.victories.length?'filled':''}"></i>`).join('')}</span><span>${state.victories.length} / ${rules.goal}</span></div><p><b>${rules.label}</b><span>·</span>Health <b>${state.hearts}</b><span>·</span>Sparks <b>${state.sparks}</b><span>·</span>Encounter ${state.round}</p></div>`;
}
function enemy(){
  const c=state.encounter,d=dread(state);
  return `<section class="enemy" aria-label="Current darkness"><p class="overline">Current darkness</p>${imageFace(c,'dark')}<div class="current-targets" aria-label="Targets including dread"><span>Strength <b>${c.fight+d}</b></span><span>Insight <b>${c.understand+d}</b></span></div><p class="target-note">${d?`Printed targets + ${d} dread`:'Printed targets · no dread'}</p></section>`;
}
function extras(){
  const cards=state.hand.filter(c=>state.extraIds.includes(c.uid));
  return `<section class="extras" aria-labelledby="extras-title"><div class="zone-heading"><h3 id="extras-title">Extra lights</h3><span>${dread(state)} dread · ${state.extra} / 2</span></div><p class="zone-note">${extraDrawDread(state)?`Each adds ${extraDrawDread(state)} dread to both targets.`:'Winter Refuge: extra lights add no dread.'} Still playable.</p><div class="extra-cards">${cards.length?cards.map(lightCard).join(''):'<div class="empty-extra">Extra draws go here,<br>beside the darkness.</div>'}</div></section>`;
}
function topDeck(){
  const next=state.deck[0], available=encounterStatus(state).canDraw, choosing=state.phase==='aftermath',dealing=state.phase==='dealing',exchanging=state.phase==='exchange',roads=choosing&&state.pending.won&&activeRules(state).has('choose_next_lights');
  return `<section class="draw-pile" aria-label="Top card of draw pile"><div class="draw-preview">${next?imageFace(next,'light',false):'<div class="empty-pile">Empty</div>'}</div><div><p class="overline">Draw pile · ${state.deck.length} cards</p><h3>${next?escape(next.light):'Draw pile empty'}</h3><p>${next?`${next.strength} Strength · ${next.insight} Insight`:choosing?'Refill after choosing your next darkness.':'Refill from ordinary discards.'}</p><p class="zone-note">${roads?'After choosing the next darkness, draw each new light from the top or bottom. ':choosing&&next?'Your first light next encounter. ':''}Only the top light is visible.</p>${exchanging?'<p class="zone-note">Choose a hand light to exchange, or keep your hand.</p>':dealing?`<div class="starting-draw-options"><button class="primary" data-action="starting-light" data-end="top">Take top · ${escape(next?.light??'light')}</button><button class="quiet" data-action="starting-light" data-end="bottom">Take bottom · ${state.deck.length===1?'same card':'unknown light'}</button></div><p class="zone-note draw-cost">Starting lights are free. No Sparks spent or dread added.</p>`:choosing?'':`<button class="primary" data-action="draw" ${!available?'disabled':''}>${state.extra>=2?'Draw limit reached':state.sparks<extraDrawCost(state)?'No Sparks left':extraDrawCost(state)?'Draw · spend 1 Spark':'Draw · free first light'}</button><p class="zone-note draw-cost">Adds ${extraDrawDread(state)} dread this encounter.</p>`}</div></section>`;
}
function supply(){
  return `<section class="supply" aria-label="Trackers and card piles"><div class="trackers">${tracker('health',state.hearts)}${tracker('sparks',state.sparks)}</div>
    <div class="vanquished-pile"><h3>Victories <span>${state.victories.length} / ${rulesFor(state).goal}</span></h3><div class="mini-cards">${state.victories.map(c=>imageFace(c,'light')).join('')}</div><p class="zone-note">${state.victories.length?'Vanquished cards stay out of the draw pile.':'Defeated darkness counts toward victory.'}</p></div>
    <div class="discard-pile"><h3>Discards <span>${state.discard.length}</span></h3>${state.discard.length?`<span>${escape(state.discard.at(-1).light)} on top</span>`:'<span>Empty</span>'}<p class="zone-note">Only these cards refill the draw pile.</p><p class="zone-note">${state.refills} ${state.refills===1?'refill':'refills'}</p></div>
    <button class="quiet turn-reminder" data-action="helper">Turn reminder</button></section>`;
}
function encounterView(availability){
  const result=inspectPlay(state,[...selected],route,{reflectId,boost}), hand=state.hand.filter(c=>!state.extraIds.includes(c.uid));
  let bonus=activeRules(state).has('recover_only')?'Meet the bonus to recover Sparks. No carry from this encounter.':'Meet the bonus to carry a light or recover Sparks.';
  if(result.wins)bonus=result.conditionMet?(activeRules(state).has('recover_only')?'Bonus met. Recover Sparks after winning.':'Bonus met. After winning, choose a carry or Spark recovery.'):'You can win. The bonus is not met.';
  return `<div class="play-layout"><section class="darkness-station" aria-label="Darkness and extra draws">${enemy()}${extras()}<p class="dark-rule"><b>Enemy rule</b> ${escape(state.encounter.twist)}<br><b>Bonus</b> ${escape(state.encounter.condition)}</p></section>
    <section class="hand-station" aria-label="Your starting hand"><div class="zone-heading"><h2>Your hand</h2><span>${hand.length} lights${state.carriedUid?' · includes carry':''}</span></div><p class="zone-note">Choose cards to spend. Extra lights beside the darkness count too.</p>
      <div class="route-picker" aria-label="Approach">${['strength','insight'].map(r=>`<button data-action="route" data-route="${r}" class="route-button ${route===r?'active':''}" aria-pressed="${route===r}">Use ${r}</button>`).join('')}</div>
      <div class="hand">${hand.map(lightCard).join('')}</div>
      <div class="resolution">${activeRules(state).has('spark_power')?`<button class="quiet bridge-power" data-action="boost" aria-pressed="${boost}" ${state.sparks<1?'disabled':''}>${boost?'+2 power selected · undo':'Add 2 power · spend 1 Spark on victory'}</button>`:''}<p class="tally"><b>${result.total}</b> / ${result.requirement} ${route}${result.heartCost?' · costs 1 health':''}${result.sparkCost?' · costs 1 Spark on victory':''}</p>${selected.size&&result.ruleError?`<p class="rule-notice">${escape(result.ruleError)}</p>`:''}<p class="bonus-result ${result.conditionMet?'earned':''}">${bonus}</p>
      ${availability.mustRetreat?`<div id="encounter-blocked" class="encounter-blocked" role="status" tabindex="-1"><b>This encounter can’t be won.</b><p>No legal combination works, and no extra draws remain. ${state.hearts===1?'Retreating costs your last health and ends the game.':'Retreat to continue.'}</p></div>`:''}
      <div class="action-row"><button class="quiet retreat-button" data-action="retreat">${state.hearts===1?'Retreat · lose last health':'Retreat · lose 1 health'}<small>${state.hearts===1?'Ends the game':retreatRecovery(state)?`Recover ${retreatRecovery(state)} Spark · clear dread`:'Sparks full · clear dread'}</small></button><button class="primary" data-action="overcome" ${result.wins?'':'disabled'}>Vanquish</button></div></div>
    </section></div><div class="table-bottom">${topDeck()}${supply()}</div>`;
}
function aftermathView(){
  const {shadows,carries}=choicesAfter(state),won=state.pending.won, roads=won&&activeRules(state).has('choose_next_lights'), restore=Math.min(rulesFor(state).restRecovery,RULES.maxSparks-state.sparks);
  return `<section class="aftermath"><div class="aftermath-intro"><p class="overline">${won?'Darkness vanquished':'Retreated · 1 health lost'}</p><h2>Choose the next darkness.</h2><p>${won?'These are the dark sides of the lights you spent.':'Choose the dark side of any light from your hand.'}</p>${!won?`<div class="retreat-result" role="status"><b>${state.pending.recoveredSparks?`Recovered ${state.pending.recoveredSparks} Spark`:'Sparks already full'}</b><span>Health ${state.hearts+1} → ${state.hearts} · Sparks ${state.sparks-state.pending.recoveredSparks} → ${state.sparks} · Dread cleared</span></div>`:''}</div><div class="shadow-options">${shadows.map(c=>`<article class="choice-card ${shadowId===c.uid?'chosen':''}">${imageFace(c,'dark')}<button data-action="shadow" data-id="${c.uid}" aria-pressed="${shadowId===c.uid}">${shadowId===c.uid?'Chosen':'Choose'} ${escape(c.dark)}</button></article>`).join('')}</div>${topDeck()}
    ${carries.length||state.pending.canRest?`<section class="bonus-choice"><h3>Bonus earned · choose one</h3><div class="rewards">${carries.map(c=>`<button class="reward ${reward==='carry'&&carryId===c.uid?'chosen':''}" data-action="carry" data-id="${c.uid}" aria-pressed="${reward==='carry'&&carryId===c.uid}"><img src="${art(c.id,'light')}" alt="" width="750" height="1050"><span>Carry ${escape(c.light)}<small>${c.strength} Strength · ${c.insight} Insight</small></span></button>`).join('')}${state.pending.canRest?`<button class="reward ${reward==='rest'?'chosen':''}" data-action="rest" aria-pressed="${reward==='rest'}"><span>Recover ${restore} ${restore===1?'Spark':'Sparks'}<small>${state.sparks} → ${state.sparks+restore} · no carry</small></span></button>`:''}</div></section>`:`<p class="no-bonus">${won?(state.pending.conditionMet?(activeRules(state).has('recover_only')?'Bonus met, but Sparks are full. This encounter cannot grant a carry.':'Bonus met, but Sparks are full and no unused lights remain.'):'Bonus not met.'):'No victory or carry from retreat.'}</p>`}
    <div class="aftermath-bottom"><p>Dread is cleared. Discard the rest and ${roads?'choose top or bottom for each of your 2 new lights':'draw 2 top lights'}${reward==='carry'?' and keep your carry':''}.${reward==='rest'?` Recover ${restore} ${restore===1?'Spark':'Sparks'}.`:''}</p><button class="primary" data-action="continue" ${!shadowId||reward===null?'disabled':''}>Continue</button></div></section>${supply()}`;
}
function dealingView(){
  return `<section class="dealing" aria-labelledby="dealing-title"><p class="overline">The Shifting Roads · victory power</p><h2 id="dealing-title" tabindex="-1">Choose light ${RULES.laterDraw-state.freshDrawsRemaining+1} of ${RULES.laterDraw}.</h2><p>Take the known top or an unknown bottom light. Look at your draw before choosing again.</p><div class="dealing-layout">${enemy()}<section aria-label="Your incoming hand"><h3>Your incoming hand</h3><div class="hand">${state.hand.length?state.hand.map(c=>`<article class="hand-card">${imageFace(c,flipped.has(c.uid)?'dark':'light')}<div class="card-controls"><button class="flip" data-action="flip" data-id="${c.uid}">Turn over</button>${c.uid===state.carriedUid?'<span class="carry-tag">Carried</span>':''}</div></article>`).join(''):'<p class="zone-note">Your first new light goes here.</p>'}</div></section></div>${topDeck()}</section>${supply()}`;
}
function exchangeView(){
  const top=state.deck[0];
  return `<section class="dealing" aria-labelledby="exchange-title"><p class="overline">The Locked Abbey · opening swap</p><h2 id="exchange-title" tabindex="-1">Exchange one light, or keep your hand.</h2><p>The light you give up becomes the visible top card. This free swap happens once, before extra draws.</p><div class="dealing-layout">${enemy()}<section aria-label="Your opening hand"><h3>Your hand</h3><div class="hand">${state.hand.map(c=>`<article class="hand-card">${imageFace(c,flipped.has(c.uid)?'dark':'light')}<div class="card-controls"><button class="flip" data-action="flip" data-id="${c.uid}">Turn over</button>${c.uid===state.carriedUid?'<span class="carry-tag">Carried</span>':''}</div><button class="select-card" data-action="opening-swap" data-id="${c.uid}" ${top?'':'disabled'}>Swap ${escape(c.light)} for ${escape(top?.light??'top light')}</button></article>`).join('')}</div><button class="quiet keep-hand" data-action="keep-hand">Keep my hand</button></section></div>${topDeck()}</section>${supply()}`;
}
function endView(){
  const won=state.phase==='won', rounds=[...state.history,{dark:state.encounter.dark,won:state.pending.won}];
  return `<section class="end-screen ${won?'victory':'defeat'}"><p class="overline">${won?'Victory':'Game over'}</p><h2 id="end-title" tabindex="-1">${won?'The darkness recedes.':'Your light has gone out.'}</h2><p>${won?`You vanquished all ${rulesFor(state).goal} darkness cards with ${state.hearts} health left.`:`Your health reached 0. You vanquished ${state.victories.length} of ${rulesFor(state).goal} darkness cards.`}</p><button class="primary" data-action="new">Begin another game</button><ol>${rounds.map(r=>`<li>${escape(r.dark)} <span>${r.won?'Vanquished':'Retreated'}</span></li>`).join('')}</ol></section>${supply()}`;
}
function render(){
  if(boost&&state.sparks<1)boost=false;
  const focus=document.activeElement?.dataset,focusKey=focus?.action?{...focus}:null;
  const availability=encounterStatus(state),ended=['won','lost'].includes(state.phase);
  root.innerHTML=themeHTML(statusBar()+(ended?endView():state.phase==='encounter'?encounterView(availability):state.phase==='dealing'?dealingView():state.phase==='exchange'?exchangeView():aftermathView())+(error?`<p class="error" role="alert">${escape(error)}</p>`:''));
  document.getElementById('seed-label').textContent=`Game ${state.seed} · ${rulesFor(state).label} · Resistance edition`;
  document.getElementById('difficulty-button').textContent=`Difficulty: ${rulesFor(state).label}`;
  const notice=state.phase==='lost'?'Game over. Health is zero.':state.phase==='won'?`Victory. ${rulesFor(state).goal} darkness cards vanquished.`:availability.mustRetreat?`This encounter cannot be won. ${state.hearts===1?'Retreating costs your last health and ends the game.':'Retreat to continue.'}`:'';
  if(notice)announce.textContent=themeText(notice);
  const target=ended&&previousPhase!==state.phase?root.querySelector('#end-title'):state.phase==='dealing'&&previousPhase!==state.phase?root.querySelector('#dealing-title'):state.phase==='exchange'&&previousPhase!==state.phase?root.querySelector('#exchange-title'):availability.mustRetreat&&!previousBlocked?root.querySelector('#encounter-blocked'):null;
  if(target){target.focus({preventScroll:true});target.scrollIntoView({block:'nearest'});}
  else if(focusKey){[...root.querySelectorAll('button:not([disabled])')].find(b=>b.dataset.action===focusKey.action&&b.dataset.id===focusKey.id&&b.dataset.route===focusKey.route&&b.dataset.end===focusKey.end)?.focus({preventScroll:true});}
  previousPhase=state.phase;previousBlocked=availability.mustRetreat;
  return notice;
}
function resolve(ids,approach,playChoice={reflectId,boost}){
  overcome(state,ids,approach,playChoice);const options=choicesAfter(state);
  shadowId=options.shadows.length===1?options.shadows[0].uid:null;
  const n=options.carries.length+(state.pending.canRest?1:0);
  reward=n>1?null:options.carries.length?'carry':state.pending.canRest?'rest':'none';
  carryId=reward==='carry'?options.carries[0].uid:null;
}
function inspectCard(id,side){
  // Only the current encounter, hand and vanquished pile expose inspectable faces.
  const c=[state.encounter,...state.hand,...state.victories].find(c=>c.uid===id);
  if(!c)return;
  document.getElementById('card-details').innerHTML=themeHTML(`<img src="${art(c.id,side)}" alt="${escape(cardDescription(c,side))}" width="750" height="1050"><div><h2 id="card-title">${escape(side==='dark'?c.dark:c.light)}</h2><p>${side==='dark'?`${c.fight} Strength or ${c.understand} Insight`:`${c.strength} Strength · ${c.insight} Insight`}</p>${side==='dark'?`<p><b>Rule:</b> ${escape(c.twist)}</p><p><b>Bonus:</b> ${escape(c.condition)}</p>`:''}</div>`);
  document.getElementById('card-dialog').showModal();
}
function difficultyOptions(selectedId){
  return Object.entries(DIFFICULTIES).map(([id,r])=>`<label class="difficulty-option"><input type="radio" name="difficulty" value="${id}" ${id===selectedId?'checked':''}><span class="difficulty-details"><strong>${r.label}</strong><span>${r.description}</span><span class="difficulty-stats"><span><b>${r.startingHearts}</b> health</span><span><b>${r.startingSparks}</b> Sparks</span><span><b>${r.goal}</b> Victories</span></span><span class="difficulty-recovery">Bonus: recover up to ${r.restRecovery} ${r.restRecovery===1?'Spark':'Sparks'} or carry a light.</span></span></label>`).join('');
}
function showNewGame(){
  if(!state)return;
  document.getElementById('difficulty-options').innerHTML=themeHTML(difficultyOptions(state.difficulty));
  document.getElementById('new-game-note').textContent=['won','lost'].includes(state.phase)?'Choose your next challenge.':'Starting a new game replaces your current run.';
  updateStartButton();document.getElementById('new-game-dialog').showModal();
}
function updateStartButton(){
  const id=document.querySelector('#difficulty-options input:checked').value;
  document.getElementById('start-game').textContent=`Start ${DIFFICULTIES[id].label} game`;
}
function showRules(){
  const r=rulesFor(state);
  document.getElementById('rules-title').textContent=`How to play · ${r.label}`;
  document.getElementById('rules-content').innerHTML=themeHTML(`<p class="rules-goal">Vanquish ${r.goal} darkness cards before health reaches 0.</p><p class="rules-preset">Start: ${r.firstDraw} lights · ${r.startingHearts} health · ${r.startingSparks} Sparks.</p><p><b>Retaliation</b> raises both target values for this encounter. Extra drawn cards stay playable beside the target; Retaliation clears after the encounter.</p><div class="play-reminder"><b>Draw</b><span>${extraDrawCost(state)?'−1 Spark':'First extra draw free'} · +${extraDrawDread(state)} dread here</span><b>Retreat</b><span>−1 health · recover 1 Spark (max 3)<br>Dread clears. No victory or carry.</span><b>Victory bonus</b><span>Carry 1 unused light OR recover ${r.restRecovery} ${r.restRecovery===1?'Spark':'Sparks'} (max 3).</span></div>${playRules(r).map(section=>`<section><h3>${escape(section.title)}</h3><p>${escape(section.text)}</p></section>`).join('')}<p class="zone-note">The printable helper summarizes Easy, Standard and Hard. Use the difficulty adjustments above for Expert and Nightmare.</p><a href="resistance-print.html">Browse the printed edition</a>`);
  document.getElementById('rules-dialog').showModal();
}
root.addEventListener('click',e=>{
  const b=e.target.closest('button[data-action]');if(!b||b.disabled)return;
  const {action,id,side}=b.dataset;
  if(action==='inspect'){inspectCard(id,side);return;}if(action==='helper'){showRules();return;}if(action==='new'){showNewGame();return;}
  act(()=>{
    if(action==='route'){route=b.dataset.route;reflectId=null;selected=new Set([...selected].filter(id=>state.hand.find(c=>c.uid===id)?.[route]>0));}
    if(action==='select'){selected.has(id)?selected.delete(id):selected.add(id);if(!selected.has(reflectId))reflectId=null;}
    if(action==='reflect'){reflectId=reflectId===id?null:id;if(reflectId)selected.add(id);selected=new Set([...selected].filter(uid=>cardPower(state,state.hand.find(c=>c.uid===uid),route,reflectId)>0));}
    if(action==='boost')boost=!boost;
    if(action==='opening-swap')chooseOpeningSwap(state,id);
    if(action==='keep-hand')chooseOpeningSwap(state);
    if(action==='flip'){flipped.has(id)?flipped.delete(id):flipped.add(id);}
    if(action==='draw'){drawPaid=extraDrawCost(state);drawExtra(state);}
    if(action==='starting-light')chooseStartingLight(state,b.dataset.end);
    if(action==='overcome')resolve([...selected],route);
    if(action==='retreat'){retreat(state);reward='none';carryId=null;shadowId=null;}
    if(action==='shadow')shadowId=id;
    if(action==='carry'){carryId=id;reward='carry';}
    if(action==='rest'){carryId=null;reward='rest';}
    if(action==='continue'){continueJourney(state,shadowId,carryId,reward);clearChoices();}
  },()=>action==='draw'?`${drawPaid?'Spark spent.':'Free extra draw.'} Extra light placed beside the darkness; ${extraDrawDread(state)} dread added.`:action==='starting-light'?`${state.hand.at(-1).light} drawn. ${state.phase==='dealing'?'Choose your second light.':state.phase==='exchange'?'Choose an opening swap.':'Your hand is ready.'}`:action==='overcome'?'Darkness vanquished.':action==='continue'?(state.phase==='dealing'?'Choose each new light from the top or bottom.':'New encounter. Dread is zero.'):action==='retreat'?`One health lost. ${state.pending.recoveredSparks?'One Spark recovered.':'Sparks already full.'} Dread cleared; victories kept.`:'Choice updated.');
});
document.getElementById('rules-button').addEventListener('click',showRules);
document.getElementById('close-rules').addEventListener('click',()=>document.getElementById('rules-dialog').close());
document.getElementById('close-card').addEventListener('click',()=>document.getElementById('card-dialog').close());
document.getElementById('restart-button').addEventListener('click',showNewGame);
document.getElementById('difficulty-button').addEventListener('click',showNewGame);
document.getElementById('cancel-new-game').addEventListener('click',()=>document.getElementById('new-game-dialog').close());
document.getElementById('difficulty-options').addEventListener('change',updateStartButton);
document.getElementById('new-game-form').addEventListener('submit',e=>{
  e.preventDefault();const difficulty=new FormData(e.currentTarget).get('difficulty');
  document.getElementById('new-game-dialog').close();fresh(undefined,difficulty);
});

function publicState(){
  const options=choicesAfter(state);
  return {version:state.version,difficulty:state.difficulty,rules:rulesFor(state),phase:state.phase,freshDrawsRemaining:state.freshDrawsRemaining,extraDrawCost:extraDrawCost(state),round:state.round,health:state.hearts,sparks:state.sparks,vanquished:state.victories.length,retreatRecovery:retreatRecovery(state),recoveredOnRetreat:state.pending?.recoveredSparks??0,activeRules:[...activeRules(state)],dread:state.phase==='encounter'?dread(state):0,encounter:state.encounter,encounterStatus:encounterStatus(state),hand:state.hand,extraLightIds:state.extraIds,deckCount:state.deck.length,discardCount:state.discard.length,refills:state.refills,nextLight:state.deck[0]?{light:state.deck[0].light,strength:state.deck[0].strength,insight:state.deck[0].insight}:null,shadowOptions:options.shadows,carryOptions:options.carries,canRecoverSparks:state.pending?.canRest??false};
}
function registerGameTools(){
  if(!document.modelContext?.registerTool)return;
  const tools=[
    {name:'read_game',description:'Read the visible core-edition game: hand, grouped extra lights, current darkness, trackers and the single visible top light.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>publicState()},
    {name:'draw_extra_light',description:'Draw the visible top light beside the darkness. Costs 1 Spark, except the Court’s first extra draw is free. Adds the current darkness’s dread: normally 1, 2 at Long Night, 0 at Winter Refuge; maximum two extras.',inputSchema:{type:'object',properties:{},additionalProperties:false},execute:()=>{drawExtra(state);render();return publicState();}},
    {name:'overcome_encounter',description:'Vanquish using hand cards and approach. Optional reflectId uses one spent light’s other value at Guardian; boost spends 1 Spark for +2 at Bridge. Extra lights are playable.',inputSchema:{type:'object',properties:{cardIds:{type:'array',items:{type:'string'}},approach:{type:'string',enum:['strength','insight']},reflectId:{type:['string','null']},boost:{type:'boolean'}},required:['cardIds','approach'],additionalProperties:false},execute:i=>{if(!Array.isArray(i.cardIds))throw new Error('cardIds must be an array.');resolve(i.cardIds,i.approach,{reflectId:i.reflectId??null,boost:i.boost??false});render();return publicState();}},
    {name:'continue_journey',description:'Choose the next darkness and any earned carry or Spark recovery. Clear dread and deal two lights, or enter the one-at-a-time starting-light choices after defeating Shifting Roads.',inputSchema:{type:'object',properties:{shadowId:{type:'string'},carryId:{type:['string','null']},reward:{type:'string',enum:['carry','rest','none']}},required:['shadowId'],additionalProperties:false},execute:i=>{continueJourney(state,i.shadowId,i.carryId??null,i.reward??(i.carryId?'carry':'none'));clearChoices();render();return publicState();}},
    {name:'choose_opening_swap',description:'At the Locked Abbey, swap one hand light with the visible top light, or pass null to keep the hand. This resolves the one opening choice.',inputSchema:{type:'object',properties:{cardId:{type:['string','null']}},required:['cardId'],additionalProperties:false},execute:i=>{chooseOpeningSwap(state,i.cardId);clearChoices();render();return publicState();}},
    {name:'choose_starting_light',description:'After Shifting Roads, take one starting light from the visible top or unknown bottom. Read the result before choosing the second light. No resource cost.',inputSchema:{type:'object',properties:{end:{type:'string',enum:['top','bottom']}},required:['end'],additionalProperties:false},execute:i=>{chooseStartingLight(state,i.end);render();return publicState();}},
    {name:'retreat_from_encounter',description:'Lose 1 health. If you survive, recover 1 Spark (maximum 3). Clear dread, keep victories, and choose any hand card as the next darkness. No victory or carry.',inputSchema:{type:'object',properties:{},additionalProperties:false},execute:()=>{retreat(state);reward='none';carryId=null;shadowId=null;render();return publicState();}},
  ];
  for(const tool of tools)try{Promise.resolve(document.modelContext.registerTool({...tool,description:themeText(tool.description)})).catch(()=>{});}catch{}
}
try{
  const response=await fetch('./resistance-cards.json?v=27722b1e86f8');
  if(!response.ok)throw new Error('The cards could not be loaded.');
  definitions=await response.json();
  const params=new URLSearchParams(location.search),seed=params.get('seed'),difficulty=params.get('difficulty');
  fresh(seed!==null&&/^\d{1,9}$/.test(seed)?Number(seed):undefined,Object.hasOwn(DIFFICULTIES,difficulty)?difficulty:'standard');registerGameTools();
}catch(e){root.innerHTML=`<p class="error" role="alert">${escape(themeText(e.message))} Please reload to try again.</p>`;}
