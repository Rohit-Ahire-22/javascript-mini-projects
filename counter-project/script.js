const count=document.getElementById("count");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
let cnt=0;

increase.onclick = function(){
    cnt++;
    count.textContent=cnt;
}

decrease.onclick =function (){
    cnt--;
    count.textContent=cnt;
}

reset.onclick = function (){
    cnt=0;
    count.textContent=cnt;
}