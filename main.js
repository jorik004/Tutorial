localStorage.getItem('_users');

pashalka = document.querySelector('.pashalka');
container = document.querySelector('.container');
pashalkaAlan = document.querySelector('.pashalkaAlan');
users = document.querySelector('.users');
_users = 1;
console.log(_users);


pashalka.addEventListener('click', function(){
  container.style.display = 'none';
  pashalkaAlan.style.display = 'block';
  _users++;
  users.innerText = _users;
  localStorage.setItem('_users', _users);
});
