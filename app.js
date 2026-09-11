const matches=[
{sport:'CRICKET',a:'India',b:'Australia',sa:'248/4',sb:'—',status:'42.3 overs • LIVE'},
{sport:'FOOTBALL',a:'Real Madrid',b:'Barcelona',sa:'1',sb:'1',status:'67\' • LIVE'},
{sport:'TENNIS',a:'Player A',b:'Player B',sa:'6–4',sb:'3–2',status:'Set 2 • LIVE'}
];
function card(m){return `<article class="card"><div class="sport">${m.sport} <span class="pulse">● LIVE</span></div><h3>${m.a} vs ${m.b}</h3><div class="teams"><div class="team"><b>${m.sa}</b>${m.a}</div><div class="team"><b>${m.sb}</b>${m.b}</div></div><div class="status">${m.status}</div></article>`}
document.getElementById('liveGrid').innerHTML=matches.map(card).join('');
document.getElementById('cricketGrid').innerHTML=matches.filter(x=>x.sport==='CRICKET').map(card).join('');
document.getElementById('footballGrid').innerHTML=matches.filter(x=>x.sport==='FOOTBALL').map(card).join('');
document.getElementById('tennisGrid').innerHTML=matches.filter(x=>x.sport==='TENNIS').map(card).join('');