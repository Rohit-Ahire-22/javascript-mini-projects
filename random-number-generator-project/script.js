const label=document.getElementById("mylabel");
const button=document.getElementById("mybutton");
let min=1;
let max=100;
let randomnum;

button.onclick = function(){
    randomnum = Math.floor(Math.random()*(max-min))+1;
    label.textContent = randomnum;
}