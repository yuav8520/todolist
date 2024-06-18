//this page is calling functions from ./addtotasker
import {addTaskerIfArray,addTaskerIfButton,addTaskIfArray,addTaskIfButton} from './addToTasker'

function formsubmit(form){
    const submit=form.querySelector('button[type="submit"]');
    submit.addEventListener('click', (e)=>e.preventDefault());
    if(form.id=='pop-up-tasker'){
        submit.addEventListener('click', (e)=>addTasker(e.target));}
    if(form.id==='pop-up-task'){
        submit.addEventListener('click', (e)=>addTask(e.target));}

}


function addTasker(buttonOrArray) {//recives the submit button or array that was clicked
    //if it's a form we want to get the name and add it to list 
    //and an array we want to add
    if(Array.isArray(buttonOrArray)){
        addTaskerIfArray(buttonOrArray) }    
    else{addTaskerIfButton(buttonOrArray)}}

    function addTask(buttonOrArray) {
        if(Array.isArray(buttonOrArray)){
            addTaskIfArray(buttonOrArray) }    
        else{addTaskIfButton(buttonOrArray)}}
    

export { formsubmit ,addTasker};