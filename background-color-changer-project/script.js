const parent = document.getElementById("parent");

parent.addEventListener("click",(e)=>{
    
    document.body.style.backgroundColor = e.target.id;
});