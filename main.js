


let bgimg = document.querySelector('.bgimg');
let login = document.querySelector(".pashalka");
let wrapper = document.querySelector(".wrapper");
let body = document.querySelector('body');


login.onclick = function(){
  bgimg.style.display = 'block';
  bgimg.style.backgroundColor = 'black';
  wrapper.style.display = 'none';
  login.style.display = 'none';
  body.style.backgroundColor = 'black';
}
