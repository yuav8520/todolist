import './styles.css';
import { bckColorChanger } from './modules/hover.js';
import { formsubmit } from './modules/side-bar/add-tasker.js';


const sidebar=document.querySelector('side-bar');
const add=document.createElement('button');
const list=document.createElement('ul');


const div=document.createElement('div');//div
div.textContent="hover Me";
div.addEventListener('mouseover', (e)=>bckColorChanger(e,`grey`));
div.addEventListener('mouseout', (e)=>bckColorChanger(e,`white`));


add.textContent="Add";//add button opens a form to add tasker
add.addEventListener('click', (e)=>{
    const popup=document.querySelector('#pop-up-tasker');
    popup.classList.remove('off');

     formsubmit(e.target);//function that look at on screen form and add the input value to 
     // a list


});
//creates form to content
(function formMakerContent(){
const form=document.createElement('form');
form.classList.add('off');
form.id='form-task-content';
const input=document.createElement('input');
const submit=document.createElement('button');
const priorty=document.createElement('radio');
})();

sidebar.append(div);
sidebar.append(list);
sidebar.append(add);
