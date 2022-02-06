let _users = 1;
_users = localStorage.getItem('users');

pashalka = document.querySelector('.pashalka');
container = document.querySelector('.container');
pashalkaAlan = document.querySelector('.pashalkaAlan');
users = document.querySelector('.users');
console.log(_users);


pashalka.addEventListener('click', function(){
  container.style.display = 'none';
  pashalkaAlan.style.display = 'block';
  _users++;
  users.innerText = _users;
  localStorage.setItem('users', _users);
});
