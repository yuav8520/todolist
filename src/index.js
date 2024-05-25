import './styles.css';
import { bckColorChanger } from './modules/hover.js';
import { addTasker } from './modules/side-bar/add-tasker.js';

const sidebar=document.querySelector('side-bar');
const add=document.createElement('button');
const list=document.createElement('ul');


const div=document.createElement('div');//div
div.textContent="hover Me";
div.addEventListener('mouseover', (e)=>bckColorChanger(e,`grey`));
div.addEventListener('mouseout', (e)=>bckColorChanger(e,`white`));


add.textContent="Add";//add button functions
//we want pop up to hide every thing when clicked 
//and i want when i finish that it'll add the tasker as well as disppear
add.addEventListener('click', ()=>{
    const popup=document.querySelector('#pop-up-tasker');
    popup.classList.remove('off');

    const form=document.querySelector('form:not(.off)');
    const submit=form.querySelector('button[type="submit"]');
    submit.addEventListener('click', (e)=>e.preventDefault());
    submit.addEventListener('click', (e)=>addTasker(e.target));
});


sidebar.append(div);
sidebar.append(list);
sidebar.append(add);
