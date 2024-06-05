import { openForm } from "../button/buttons.js";
function addContentTasker(item){//function for creating the content of the tasker

    if(document.querySelector('h2')===null)
        { titleDoesnotexist(item);  }
    else{titleExists(item);    }

}
function titleExists(item){//if there is content already in content
    const content = document.querySelector('content');
    let title=content.querySelector('h2');
    let button=content.querySelector('button');
    button.remove();
    title.remove();
    titleDoesnotexist(item);
}
function addTaskerIfArray(array) {
    const taskerList = document.querySelector('ul');

            array.forEach(element => {
            const taskerItem = document.createElement('li');
            taskerItem.textContent = element;
            taskerItem.addEventListener('click', (e) => addContentTasker(e.target));
            taskerList.append(taskerItem);
        })};

function addTaskerIfButton(button)
{ const form =document.querySelector('#pop-up-tasker');
const tasker = form.querySelector(`.input-text`);
const taskerList = document.querySelector('ul');
const taskerItem = document.createElement('li');
taskerItem.textContent = tasker.value;
tasker.value=null;
if(taskerItem.textContent){
    taskerList.append(taskerItem);
}
taskerItem.addEventListener('click', (e)=>addContentTasker(e.target));
form.classList.add('off');
}


function titleDoesnotexist(item){///if there isn't content already in content
    const content = document.querySelector('content');
    const title = document.createElement('h2');
    const addTask=document.createElement('button');
    addTask.id='add-task-button';
    openForm(addTask);
    title.textContent = item.textContent;
    content.append(title);
    content.append(addTask);
   addTask.addEventListener('click', (e)=>addTaskIfButton(e.target));//event listner adds button to add task to list
  
}
function addTaskIfButton(button){//creates form to add task to list
    const body=document.querySelector('body');//declrations
    const form=document.querySelector('#pop-up-task');
    const input=document.createElement('input');
    const submit=document.createElement('button');
    submit.textContent="submit";
    submit.addEventListener('click', (e)=>e.preventDefault());

    const title=document.createElement('h2');
    title.textContent="Add Task";
    title.setAttribute('id','task-title');
    //const description=document.createElement('textarea');
    //const dueDate=document.createElement('input');
    //const labelDueDate = document.createElement('label');
    //labelDueDate.setAttribute('for', 'dueDate');
    //labelDueDate.textContent = 'Due Date:';




   addsPriority(form);//functions adds priorty to this form
  


    form.append(input);
    form.append(submit);
    form.append(title);
    body.append(form);
    //form.classList.add('off');
}
function addTaskIfArray(array)
{
console.log("array",array);
}
/*
addTaskerIfButton(button);
{    const body=document.querySelector('body');//declrations
const form=button.closest('form');

 //form.id='form-task-content';
 const input=document.createElement('input');
 const submit=document.createElement('button');
 const title=document.createElement('input');
 const description=document.createElement('textarea');
 const dueDate=document.createElement('input');
 /*const labelDueDate = document.createElement('label');
 labelDueDate.setAttribute('for', 'dueDate');
 labelDueDate.textContent = 'Due Date:';
 form.appendChild(labelDueDate);

}*/
function addsPriority(form){//creates priorty selctor +label 
const priorty = document.createElement('select');
priorty.id = 'priorty';
populatePriority(optionPriorty, priorty);
//addLabel('Priorty');
form.appendChild(priorty);
}
/*function addLabel(nameOfLabel)//hopefully adds label to everything i want
{   const form = document.querySelector('#pop-up-task');
    const label = document.createElement('label');
    //label.setAttribute('for', nameOfLabel);
    label.textContent = `${nameOfLabel} :`;
    form.append(label);
}*/
const optionPriorty=[
    { value: 'low', label: 'low priorty' },
    { value: 'mid', label: 'medium priorty' },
    { value: 'high', label: 'high priorty'}
];
function populatePriority(array, select) {
    array.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.textContent = option.label;
        select.appendChild(opt);
    });
}


export {addTaskerIfArray, addTaskerIfButton, addTaskIfArray, addTaskIfButton}