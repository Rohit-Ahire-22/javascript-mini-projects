
const task = document.getElementById("task");
const button = document.getElementById("button");
const allTask = document.getElementById("allTask");
const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const text= task.value.trim();
    if(text==""){
        return;
    }

    const parent = document.createElement('div');
    parent.style.marginTop = "20px";
    parent.style.fontSize = "20px";
    
    const newTask = document.createElement('span');
    newTask.style.marginRight = "30px";
    newTask.textContent = task.value ;

    const doneButton = document.createElement('button');
    doneButton.style.marginRight = "20px";
    doneButton.style.fontWeight = "bold";
    doneButton.style.cursor = "pointer";
    doneButton.style.height = "30px";
    doneButton.textContent = "Done";

    const deleteButton = document.createElement('button');
    deleteButton.style.fontWeight = "bold";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.height = "30px";
    deleteButton.textContent = "Delete";
    
    parent.append(newTask,doneButton,deleteButton);

    allTask.append(parent);

    doneButton.addEventListener("click",()=>{
        newTask.style.textDecoration = "line-through";
        newTask.style.color = "grey";
    });

    deleteButton.addEventListener("click",()=>{
        parent.remove();
    });
    form.reset();
});
