const myTemp = document.getElementById("myTemp");
const myCF = document.getElementById("myCF");
const myFC = document.getElementById("myFC");
const mySubmit = document.getElementById("mySubmit");
const myP = document.getElementById("myP");

let temp;
let c;
let f;

mySubmit.onclick = function(){
    temp = myTemp.value;
    temp=Number(temp);
    if(isNaN(temp) || temp==0){
        myP.textContent = `Please Enter valid temperature!!!`;
        return;
    }

    if(myCF.checked){
        f=(temp*(9/5))+32;
        f=f.toFixed(2);
        myP.textContent = `${f}°C`
    }else if(myFC.checked){
        c=(temp-32)*(5/9);
        c=c.toFixed(2);
        myP.textContent = `${c}°F`
    }else{
        myP.textContent = `Please select conversion Option!`;
    }
}