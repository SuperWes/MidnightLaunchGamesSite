export const RULES = Object.freeze({ firstDraw: 3, laterDraw: 2, deckSize: 15, maxExtra: 2, startingHearts: 2, startingSparks: 3, maxSparks: 3, restRecovery: 2, goal: 4, retreatRecovery: 1 });
export const DIFFICULTIES = Object.freeze({
  easy: Object.freeze({ ...RULES, startingHearts: 3, label: 'Easy', description: 'An extra health to find your footing.' }),
  standard: Object.freeze({ ...RULES, label: 'Standard', description: 'Full Sparks, with less room for a costly encounter.' }),
  hard: Object.freeze({ ...RULES, startingHearts: 2, startingSparks: 2, label: 'Hard', description: 'Less room for a costly encounter.' }),
  expert: Object.freeze({ ...RULES, startingHearts: 2, startingSparks: 2, restRecovery: 1, label: 'Expert', description: 'Make every extra draw count.' }),
  nightmare: Object.freeze({ ...RULES, startingHearts: 2, startingSparks: 2, restRecovery: 1, goal: 5, label: 'Nightmare', description: 'Survive one more darkness.' }),
});

export function rulesFor(state) {
  const id = state.difficulty ?? 'standard';
  if (!Object.hasOwn(DIFFICULTIES, id)) throw new Error('Choose a valid difficulty.');
  return DIFFICULTIES[id];
}
export const PROMO_IDS = Object.freeze(['spear', 'astrolabe', 'compass']);

export function buildDeck(cards) {
  const core = cards.filter(card => !PROMO_IDS.includes(card.id));
  if (![15,18].includes(cards.length) || core.length !== RULES.deckSize || new Set(cards.map(card => card.id)).size !== cards.length) {
    throw new Error('The core deck needs 15 unique light/dark pairings, with the three promos kept outside play.');
  }
  return core.map(card => ({ ...card, uid: card.id }));
}

function shuffle(cards, random) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}

export function randomFromSeed(seed) {
  let n = Number(seed) >>> 0;
  return () => {
    n += 0x6D2B79F5;
    let t = Math.imul(n ^ n >>> 15, 1 | n);
    t ^= t + Math.imul(t ^ t >>> 7, 61 | t);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

export function newGame(cards, seed = Date.now(), difficulty = 'standard') {
  const rules = rulesFor({ difficulty });
  const random = randomFromSeed(seed);
  const deck = buildDeck(cards);
  shuffle(deck, random);
  const state = { version: '0.8.2-three-light.1', difficulty, seed, deck, refills: 0, hand: [], extraIds: [], encounter: null, discard: [], victories: [], history: [], hearts: rules.startingHearts, sparks: rules.startingSparks, round: 0, extra: 0, phase: 'encounter', pending: null, carriedUid: null, freshDrawsRemaining: 0 };
  beginEncounter(state, null);
  return state;
}

function beginEncounter(state, carried, shadow = null, chooseEnds = false) {
  const opening = state.round === 0;
  const count = opening ? RULES.firstDraw : RULES.laterDraw;
  if (!opening && !shadow) throw new Error('Choose a shadow before starting another encounter.');
  // Later darkness stays outside the draw pile, including during refills.
  state.encounter = shadow;
  state.hand = carried ? [carried] : [];
  if (!chooseEnds) for (let i = 0; i < count; i++) state.hand.push(takeLight(state));
  if (opening) state.encounter = takeLight(state);
  state.carriedUid = carried?.uid ?? null;
  state.round += 1;
  state.extra = 0;
  state.extraIds = [];
  state.pending = null;
  state.freshDrawsRemaining = chooseEnds ? count : 0;
  state.phase = chooseEnds ? 'dealing' : 'encounter';
  refillIfEmpty(state);
  if (!chooseEnds) offerOpeningSwap(state);
}

function refillIfEmpty(state) {
  if (state.deck.length || !state.discard.length) return;
  const cards = state.discard.splice(0);
  state.refills += 1;
  shuffle(cards, randomFromSeed(Number(state.seed) + state.refills * 1000003));
  state.deck.push(...cards);
}

function takeLight(state, end = 'top') {
  refillIfEmpty(state);
  if (!state.deck.length) throw new Error('No ordinary discards remain to refill the draw pile.');
  return end === 'bottom' ? state.deck.pop() : state.deck.shift();
}

// Roads resolves after the next darkness and reward are fixed. Each choice
// reveals only the card just drawn and the new top, before the next choice.
export function chooseStartingLight(state, end) {
  if (state.phase !== 'dealing' || state.freshDrawsRemaining <= 0) throw new Error('There are no starting lights to choose.');
  if (!['top', 'bottom'].includes(end)) throw new Error('Choose the top or bottom of the draw pile.');
  const card = takeLight(state, end);
  state.hand.push(card);
  state.freshDrawsRemaining -= 1;
  refillIfEmpty(state);
  if (!state.freshDrawsRemaining) offerOpeningSwap(state);
  return card;
}

function offerOpeningSwap(state) {
  state.phase = activeRules(state).has('opening_swap') ? 'exchange' : 'encounter';
}

export function chooseOpeningSwap(state, cardId = null) {
  if (state.phase !== 'exchange') throw new Error('The opening swap is not available.');
  if (cardId !== null) {
    const index = state.hand.findIndex(card => card.uid === cardId);
    if (index < 0 || !state.deck.length) throw new Error('Choose a hand light to exchange with the top light.');
    const returned = state.hand[index];
    state.hand[index] = state.deck[0];
    state.deck[0] = returned;
    if (state.carriedUid === returned.uid) state.carriedUid = null;
  }
  state.phase = 'encounter';
}

function finishJourney(state) {
  if (!state.pending.won) state.discard.push(state.encounter);
  state.discard.push(...state.hand);
  state.hand = [];
  state.extra = 0;
  state.extraIds = [];
}

export function activeRules(state) {
  return new Set([state.encounter?.rule].filter(rule => rule && rule !== 'none'));
}

export function dread(state) {
  if (state.phase && state.phase !== 'encounter') return 0;
  return state.extra * extraDrawDread(state);
}

export function extraDrawDread(state) {
  const rules = activeRules(state);
  return rules.has('no_dread') ? 0 : rules.has('double_dread') ? 2 : 1;
}

export function cardPower(state, card, route, reflectId = null) {
  const rules = activeRules(state);
  let power = card[route] ?? 0;
  if (rules.has('reflect_one') && card.uid === reflectId) power = card[route === 'strength' ? 'insight' : 'strength'];
  if (rules.has('balanced_bonus') && card.strength === card.insight) power += 1;
  if (rules.has('cap_strength') && route === 'strength') power = Math.min(power, 2);
  if (rules.has('cap_insight') && route === 'insight') power = Math.min(power, 3);
  return power;
}

export function inspectPlay(state, ids, route, {reflectId = null, boost = false} = {}) {
  const chosen = [...new Set(ids)];
  const spent = state.hand.filter(card => chosen.includes(card.uid));
  const validRoute = route === 'strength' || route === 'insight';
  const requirement = validRoute ? state.encounter[route === 'strength' ? 'fight' : 'understand'] + dread(state) : Infinity;
  const total = validRoute ? spent.reduce((sum, card) => sum + cardPower(state, card, route, reflectId), 0) + (boost ? 2 : 0) : 0;
  const valid = validRoute && spent.length > 0 && spent.length === chosen.length && spent.every(card => cardPower(state, card, route, reflectId) > 0);
  let ruleError = '';
  const rules = activeRules(state);
  const sparkCost = boost ? 1 : 0;
  if (reflectId !== null && (!rules.has('reflect_one') || !chosen.includes(reflectId))) ruleError = 'Only the Glass Guardian lets one spent light use its other value.';
  if (typeof boost !== 'boolean' || (boost && (!rules.has('spark_power') || state.sparks < 1))) ruleError = 'The Sunken Bridge needs 1 Spark for the +2 power.';
  const heartCost = rules.has('heart_price') && route === 'strength' ? 1 : 0;
  if (rules.has('duel') && route === 'strength' && spent.length !== 2) ruleError = 'Strength requires exactly two cards.';
  if (rules.has('two_card_limit') && spent.length > 2) ruleError = 'You may spend at most two cards here.';
  if (rules.has('exact_payment') && total > requirement) ruleError = 'This encounter requires exact payment. No overpaying.';
  if (rules.has('different_values') && new Set(spent.map(card => card[route])).size !== spent.length) ruleError = 'Each spent light must have a different printed value in your approach.';
  if (heartCost >= state.hearts) ruleError = 'You need at least 1 health left after paying this encounter.';
  const wins = valid && total >= requirement && !ruleError;
  const checks = {
    insight: route === 'insight',
    strength: route === 'strength',
    exact: total === requirement,
    no_extra: state.extra === 0,
    low_insight: spent.every(card => card.insight < 3),
    two_cards: spent.length === 2,
  };
  const conditionMet = wins && checks[state.encounter.carry] === true && !(rules.has('exact_bonus') && total !== requirement);
  const remaining = state.hand.filter(card => !chosen.includes(card.uid));
  return { valid, wins, requirement, total, spent, remaining, conditionMet, canCarry: conditionMet && remaining.length > 0 && !rules.has('recover_only'), canRest: conditionMet && state.sparks - sparkCost < RULES.maxSparks, ruleError, heartCost, sparkCost, reflectId };
}

export function playOptions(state, ids) {
  if (activeRules(state).has('reflect_one')) return [{}, ...ids.map(reflectId => ({reflectId}))];
  if (activeRules(state).has('spark_power') && state.sparks > 0) return [{}, {boost:true}];
  return [{}];
}

export function winningPlays(state) {
  const plays = [];
  for (const route of ['strength', 'insight']) for (let mask = 1; mask < 2 ** state.hand.length; mask++) {
    const ids = state.hand.filter((_, i) => mask & (1 << i)).map(card => card.uid);
    for (const options of playOptions(state, ids)) {
      const result = inspectPlay(state, ids, route, options);
      if (result.wins) plays.push({ids, route, options, result});
    }
  }
  return plays;
}

export function extraDrawCost(state) {
  return activeRules(state).has('free_first_draw') && state.extra === 0 ? 0 : 1;
}

export function drawExtra(state) {
  if (state.phase !== 'encounter') throw new Error('Resolve this encounter before drawing again.');
  if (state.extra >= RULES.maxExtra) throw new Error('Only two extra draws are allowed.');
  const cost = extraDrawCost(state);
  if (state.sparks < cost) throw new Error('No sparks remain. Recover Sparks through an earned victory bonus or a surviving retreat.');
  const card = takeLight(state);
  state.hand.push(card);
  state.extraIds.push(card.uid);
  state.extra += 1;
  state.sparks -= cost;
  refillIfEmpty(state);
  return card;
}

// A dead end depends on both approaches and every legal subset, not the selection.
// Only call for retreat once all opportunities to draw have been exhausted.
export function encounterStatus(state) {
  if (state.phase !== 'encounter') return { canWin: false, canDraw: false, mustRetreat: false };
  const canDraw = state.extra < RULES.maxExtra && state.sparks >= extraDrawCost(state) && (state.deck.length > 0 || state.discard.length > 0);
  const canWin = winningPlays(state).length > 0;
  return { canWin, canDraw, mustRetreat: !canWin && !canDraw };
}

export function overcome(state, ids, route, options = {}) {
  if (state.phase !== 'encounter') throw new Error('This encounter has already been resolved.');
  const result = inspectPlay(state, ids, route, options);
  if (!result.wins) throw new Error(result.ruleError || 'Choose cards that meet the requirement. Each card must contribute to your approach.');
  state.hearts -= result.heartCost;
  state.sparks -= result.sparkCost;
  state.pending = { won: true, route, total: result.total, requirement: result.requirement, spentIds: result.spent.map(card => card.uid), canCarry: result.canCarry, canRest: result.canRest, conditionMet: result.conditionMet, heartCost: result.heartCost, sparkCost: result.sparkCost, reflectId: result.reflectId };
  state.victories.push(state.encounter);
  state.phase = state.victories.length >= rulesFor(state).goal ? 'won' : 'aftermath';
  if (state.phase === 'won') finishJourney(state);
  return result;
}

export function retreatRecovery(state) {
  if (state.phase !== 'encounter' || state.hearts <= 1) return 0;
  return Math.min(rulesFor(state).retreatRecovery, RULES.maxSparks - state.sparks);
}

export function retreat(state) {
  if (state.phase !== 'encounter') throw new Error('This encounter has already been resolved.');
  const recoveredSparks = retreatRecovery(state);
  state.hearts -= 1;
  state.sparks += recoveredSparks;
  state.pending = { won: false, route: null, total: 0, requirement: 0, spentIds: [], canCarry: false, canRest: false, conditionMet: false, heartCost: 0, recoveredSparks };
  state.phase = state.hearts <= 0 ? 'lost' : 'aftermath';
  if (state.phase === 'lost') finishJourney(state);
}

export function choicesAfter(state) {
  if (state.phase !== 'aftermath') return { shadows: [], carries: [] };
  const spent = state.pending.spentIds;
  return {
    shadows: state.pending.won ? state.hand.filter(card => spent.includes(card.uid)) : [...state.hand],
    carries: state.pending.canCarry ? state.hand.filter(card => !spent.includes(card.uid)) : [],
  };
}

export function continueJourney(state, shadowId, carryId = null, reward = carryId ? 'carry' : 'none') {
  if (state.phase !== 'aftermath') throw new Error('There is no next encounter to prepare.');
  const { shadows, carries } = choicesAfter(state);
  const shadow = shadows.find(card => card.uid === shadowId);
  const carried = carryId === null ? null : carries.find(card => card.uid === carryId);
  if (!shadow) throw new Error('Choose a valid card to become the next shadow.');
  if (carryId !== null && !carried) throw new Error('That card cannot be carried.');
  if (!['carry', 'rest', 'none'].includes(reward)) throw new Error('Choose carry, rest, or none.');
  if (reward === 'carry' && !carried) throw new Error('Choose the unspent card to carry.');
  if (reward !== 'carry' && carried) throw new Error('You can carry a card or recover a spark, not both.');
  if (reward === 'rest' && !state.pending.canRest) throw new Error('A spark can only be recovered with an earned bonus and room in your supply.');
  if (reward === 'rest') state.sparks = Math.min(RULES.maxSparks, state.sparks + rulesFor(state).restRecovery);
  state.history.push({ round: state.round, dark: state.encounter.dark, won: state.pending.won, route: state.pending.route, total: state.pending.total, requirement: state.pending.requirement, extra: state.extra, nextDark: shadow.dark, carried: carried?.light ?? null, reward, recoveredOnRetreat: state.pending.recoveredSparks ?? 0 });
  if (!state.pending.won) state.discard.push(state.encounter);
  state.discard.push(...state.hand.filter(card => card.uid !== shadowId && card.uid !== carried?.uid));
  const chooseEnds = state.pending.won && activeRules(state).has('choose_next_lights');
  beginEncounter(state, carried, shadow, chooseEnds);
}
