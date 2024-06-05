import { formsubmit } from '../side-bar/add-tasker.js';
function openForm(button){
    button.textContent="Add";//add button opens a form to add tasker
    button.addEventListener('click', (e)=>buttonClick(e))}

function buttonClick(e){
    let form;
    if(e.target.id==='add-tasker-button'){
         form=document.querySelector('#pop-up-tasker');
    }
    else{
         form=document.querySelector('#pop-up-task');
    }
form.classList.remove('off');

 formsubmit(form);
}
export{openForm}