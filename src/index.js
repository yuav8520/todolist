import './styles.css';
import { openForm } from './modules/button/buttons.js';
import { addTasker } from './modules/side-bar/add-tasker.js';

//side bar par
const sidebar=document.querySelector('side-bar');
const addtaskerbutton=document.createElement('button');
const list=document.createElement('ul');

addtaskerbutton.setAttribute('id', 'add-tasker-button');
openForm(addtaskerbutton);

sidebar.append(list);
sidebar.append(addtaskerbutton);


const array=['today','panding'];
addTasker(array);

//main part