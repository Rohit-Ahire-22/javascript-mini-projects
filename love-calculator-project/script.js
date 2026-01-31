const form =  document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const boy = document.getElementById("Boy");
    const girl = document.getElementById("Girl");

    const v1 = boy.value.length;
    const v2 = girl.value.length;

    const result = Math.pow(v1+v2,3)%101

    const output = document.querySelector('h2');
    output.textContent = `Result : ${result}%`;

    form.reset();
});