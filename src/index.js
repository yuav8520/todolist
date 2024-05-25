import './styles.css';
import { bckColorChanger } from './modules/hover.js';
import { addTasker,formsubmit } from './modules/side-bar/add-tasker.js';


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

     formsubmit();//function that look at on screen form and add the input value to 
     // a list

});


sidebar.append(div);
sidebar.append(list);
sidebar.append(add);
