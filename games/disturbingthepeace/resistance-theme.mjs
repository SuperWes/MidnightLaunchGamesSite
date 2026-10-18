// Presentation adapter: engine IDs and rule keys stay stable across themes.
const names=[
 ['(?:The )?Vengeful Knight','Curfew'],['(?:The )?Hungry Moths','Criminalized Dissent'],['(?:The )?Tangled Thicket','Bot Army'],['(?:The )?Shifting Roads','Gerrymandering'],['(?:The )?Tollkeeper','Misleading Ballot Initiatives'],['(?:The )?Long Night','Emergency Powers'],['(?:The )?Poison Garden','Paid Counterprotesters'],['(?:The )?Abandoned Hearth','Increased Police Presence'],['(?:The )?Hollow Gate','Redacted Records'],['(?:The )?Watchful Sentinel','Bans on Assembly'],['(?:The )?Whispering Court','Disappearances'],['(?:The )?Eclipse','Mass Surveillance'],['(?:The )?Sunken Bridge','Weaponized Lawsuits'],['(?:The )?Glass Guardian','Public Smear Campaign'],['(?:The )?Lost Pilgrim','Rigged Elections'],['(?:The )?Winter Refuge','Shutting Down the Press'],['(?:The )?Locked Abbey','Voter Purges'],['(?:The )?Empty Feast','Union Busting'],['(?:the )?Court','Disappearances'],['(?:the )?Guardian','Public Smear Campaign'],['(?:the )?Bridge','Weaponized Lawsuits'],['(?:the )?Abbey','Voter Purges'],['Spear','Mutual Aid'],['Astrolabe','Pirate Radio'],['Compass','Locked Arms']
];
const patterns=names.map(([from,to])=>[new RegExp('\\b'+from+'\\b','gi'),to]);
export function themeText(value){
 let text=String(value).replace(/The darkness recedes\./g,'You held your ground.').replace(/Your light has gone out\./g,'Time to regroup.').replace(/Darkness vanquished/gi,'Oppression defeated').replace(/Three-light playtest/g,'Resistance edition').replace(/Three-light/gi,'Three-card');
 for(const [from,to]of patterns)text=text.replace(from,to);
 return text.replace(/\bStrength\b/gi,'Pressure').replace(/\bInsight\b/gi,'Influence').replace(/\bhealth\b/gi,'Resolve').replace(/\bSparks?\b/gi,'Momentum').replace(/\b(?:dread|heat)\b/gi,'Retaliation').replace(/\bvanquished\b/gi,'defeated').replace(/\bvanquish\b/gi,'Defeat').replace(/\bdarkness\b/gi,'Oppression').replace(/\blight-side\b/gi,'Resistance-side').replace(/\blights\b/gi,'Resistance cards').replace(/\blight\b/gi,'Resistance card').replace(/\bdark\b/gi,'Oppression');
}
export function themeHTML(markup){
 const template=document.createElement('template');template.innerHTML=markup;
 const walker=document.createTreeWalker(template.content,NodeFilter.SHOW_TEXT);
 for(let node=walker.nextNode();node;node=walker.nextNode())node.textContent=themeText(node.textContent);
 for(const el of template.content.querySelectorAll('[aria-label],[alt],[title]'))for(const attr of ['aria-label','alt','title'])if(el.hasAttribute(attr))el.setAttribute(attr,themeText(el.getAttribute(attr)));
 return template.innerHTML;
}
export function facePath(id,side){
 const support={health:{light:'resolve-easy',dark:'resolve-standard'},sparks:{light:'momentum-standard',dark:'momentum-hard'},helper:{light:'helper-setup',dark:'helper-play'}};
 return `assets/resistance/deck-v1/faces/${support[id]?.[side]??`${id}-${side}`}.webp?v=27722b1e86f8`;
}
