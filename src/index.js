import './styles.css';
import { bckColorChanger } from './modules/hover.js';
import { formsubmit,addTasker } from './modules/side-bar/add-tasker.js';

const content=document.querySelector('content');
const sidebar=document.querySelector('side-bar');
const addtaskerbutton=document.createElement('button');
const addtaskbutton=document.createElement('button');
addtaskbutton.setAttribute('id', 'add-task-button');
addtaskerbutton.setAttribute('id', 'add-tasker-button');

const list=document.createElement('ul');


const buttons=[addtaskbutton,addtaskerbutton];
buttons.forEach(button=>{
    button.textContent="Add";//add button opens a form to add tasker
    button.addEventListener('click', (e)=>{
        let form;
        console.log(e.target.id==='add-tasker-button');
        if(e.target.id==='add-tasker-button'){
             form=document.querySelector('#pop-up-tasker');
        }
        else{
             form=document.querySelector('#pop-up-task');
        }
    form.classList.remove('off');

     formsubmit(e.target);//function that look at on screen form and add the input value to 
     // a list
});});


sidebar.append(list);
sidebar.append(addtaskerbutton);
content.append(addtaskbutton);

const array=['today','panding'];
addTasker(array);