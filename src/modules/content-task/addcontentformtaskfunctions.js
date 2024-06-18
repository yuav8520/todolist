import { compareAsc, format } from "date-fns";
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
    const dueDate=form.querySelector('#due-date');
    if(input.value!==""){
        appendinfotask(taskList,taskItem,priorty,input,descrpition,dueDate);}
    form.classList.add('off');
}
function appendinfotask(taskList,taskItem,priorty,input,descrpition,dueDate){
    const container=document.createElement('div');
    taskItem.append(container);
    addNameTask(input,container);
    addPriorityTask(priorty,container);
    addDueDate(dueDate,container);
    addDescrpitionTask(descrpition,container);
    taskList.append(taskItem);
    input.value="";

}
function addNameTask(input,container){
    container.textContent+=`task is: ${input.value},`;
}
function addPriorityTask(priorty,container){
    container.textContent+=` priorty is ${priorty.value}, `;
}
function addDueDate(dueDate,container){
    //const date=new Date(dueDate.value);
   container.textContent+=` due date is ${dueDate.value}, `;
}
function addDescrpitionTask(descrpition,container){
    const descrpitiontext=document.createElement('textarea');
    descrpitiontext.classList.add('hidden');
    descrpitiontext.value=descrpition.value;
    const opendescrpition=document.createElement('button');
    opendescrpition.textContent=" open description";
    container.append(opendescrpition);
    container.append(descrpitiontext);
    opendescrpition.addEventListener('click', (e)=>opendescrpitiontask(e.target,descrpitiontext));
}
function opendescrpitiontask(button,descrpition){
    if(descrpition.classList.contains('hidden')){
        button.textContent="close description";
        descrpition.classList.remove('hidden');
    }
    else{button.textContent="open description";
        descrpition.classList.add('hidden');
    }}
export {taskSubmit};