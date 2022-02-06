pashalka = document.querySelector('.pashalka');
container = document.querySelector('.container');
pashalkaAlan = document.querySelector('.pashalkaAlan');
pashalka.addEventListener('click', function(){
  container.style.display = 'none';
  pashalkaAlan.style.display = 'block';
});
