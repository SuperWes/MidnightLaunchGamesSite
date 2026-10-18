const params=new URLSearchParams(location.search),card=params.get('card'),set=params.get('set');
const pairs=[...document.querySelectorAll('.card-pair')];const chosen=pairs.find(p=>p.id===card);
if(chosen){document.body.classList.add('focused-card');pairs.forEach(p=>p.hidden=p!==chosen);document.title=chosen.querySelector('h2').textContent+' · Disturbing the Peace';document.getElementById('card-picker').value=card;}
else if(['core','support','promo'].includes(set))pairs.forEach(p=>p.hidden=p.dataset.set!==set);
document.getElementById('card-picker').addEventListener('change',e=>location.search=e.target.value?'?card='+encodeURIComponent(e.target.value):'');
