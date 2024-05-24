import './styles.css';
import { handleHover, handleUnhover } from './modules/hover.js';

const sidebar=document.querySelector('side-bar');
const add=document.createElement('button');
const list=document.createElement('ul');
const div=document.createElement('div');

div.textContent="hover Me";
add.textContent="Add";
div.addEventListener('mouseover', (e)=>handleHover(e,`grey`));
div.addEventListener('mouseout', (e)=>handleHover(e,`white`));
add.addEventListener('click', ()=>{
    const popup=document.querySelector('pop-up');
    popup.classList.remove('off')
});

sidebar.append(div);
sidebar.append(list);
sidebar.append(add);
