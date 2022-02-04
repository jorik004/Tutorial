
let butt = document.querySelector(".butt");
let b = document.querySelector('.b');



/*butt.onclick = function(){
  let username = document.getElementById("name").value;
  console.log('click');
  b.innerHTML = `${username}, hi`;
  console.log(username);
}*/

butt.addEventListener('click', click);

function click(){
  let username = document.querySelector('.name').value;
  b.innerHTML = `${username}, hello`;
}