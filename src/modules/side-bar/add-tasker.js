import {addTaskerIfArray,addTaskerIfButton} from './addToTasker'
function formsubmit(){
    const form=document.querySelector('form:not(.off)');
    const submit=form.querySelector('button[type="submit"]');
    submit.addEventListener('click', (e)=>e.preventDefault());
    if(form.id=='pop-up-tasker'){
        submit.addEventListener('click', (e)=>addTasker(e.target));}
    if(form.id==='form-task-content'){
        form.addEventListener('submit', (e)=>addsTask(e.target));}
}


function addTasker(buttonOrArray) {//recives the submit button or array that was clicked
    //if it's a form we want to get the name and add it to list 
    //and an array we want to add
    if(Array.isArray(buttonOrArray)){
        addTaskerIfArray(buttonOrArray) }    
    else{addTaskerIfButton(buttonOrArray)}}


function addsTask(button){
    const body=document.querySelector('body');
    const form=document.createElement('form');
    const input=document.createElement('input');
    const submit=document.createElement('button');
    const priorty=document.createElement('select');
    populatePriorty(optionPriorty,priorty)
    form.append(priorty)
    form.append(input);
    form.append(submit);
    body.append(form);

}


const optionPriorty=[
    { value: 'low', label: 'low priorty' },
    { value: 'mid', label: 'medium priorty' },
    { value: 'high', label: 'high priorty'}
];
function populatePriorty(array,select){
    array.forEach(option => {
        select.value=option.value;
        //select.textContent=option.label
    });}

export { formsubmit ,addTasker};