function taskSubmit(form,submit,priorty){
    submit.textContent="submit";
    addTitleTask(form);
    submit.addEventListener('click', (e)=>e.preventDefault());
    submit.addEventListener('click', ()=>buttonfunctiontask(form));
    
}
function addTitleTask(form){
    const title=document.createElement('h2');
    title.textContent="Add Task";
    title.setAttribute('id','task-title');
    form.append(title);
}

function buttonfunctiontask(form){
    const input=form.querySelector('.input-text');
    const taskList = document.querySelector('#task-list');
    const taskItem = document.createElement('li');
    if(input.value!==""){
        appendinfotask(taskList,taskItem,form,priorty,input,descrpition);}
    form.classList.add('off');
}
function appendinfotask(taskList,taskItem,form,priorty,input,descrpition){
    addNameTask(input,taskItem);
    addPriorityTask(priorty,taskItem);
    addDescrpitionTask(descrpition,taskItem);
    taskList.append(taskItem);
    input.value="";

}
function addNameTask(input,taskItem){
    const nameTask=document.createElement('div');
    nameTask.textContent=input.value;
    taskItem.append(nameTask);
}
function addPriorityTask(priorty,taskItem){
    const priortyTask=document.createElement('div');
    priortyTask.textContent=priorty.value;
    console.log(priortyTask.textContent)
    taskItem.append(priortyTask);
}
export {taskSubmit};