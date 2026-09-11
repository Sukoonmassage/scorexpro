let users=[
['CL001','Rahul123','Active','User'],['CL002','Sagar76','Active','User'],['CL003','Vikas99','Active','Editor'],['CL004','Pawan45','Suspended','User']
];
function render(){document.getElementById('users').innerHTML=users.map((u,i)=>`<tr><td>${u[0]}</td><td>${u[1]}</td><td>${u[2]}</td><td>${u[3]}</td><td><button class="btn small" onclick="toggle(${i})">${u[2]==='Active'?'Suspend':'Activate'}</button></td></tr>`).join('')}
function toggle(i){users[i][2]=users[i][2]==='Active'?'Suspended':'Active';render()}
function addUser(){const name=prompt('New user name:');if(name){users.push(['CL'+String(users.length+1).padStart(3,'0'),name,'Active','User']);render()}}
render();