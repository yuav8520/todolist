function formsubmit(){
    const form=document.querySelector('form:not(.off)');
    const submit=form.querySelector('button[type="submit"]');
    submit.addEventListener('click', (e)=>e.preventDefault());
    submit.addEventListener('click', (e)=>addTasker(e.target));

}
function addTasker(button) {//recives the submit button that was clicked
    //if it's a form we want to get the name and add it to list 
    const form =button.closest('form');
    if(form){
        
        const tasker = form.querySelector(`.input-text`);
        const taskerList = document.querySelector('ul');
        const taskerItem = document.createElement('li');
        console.log(tasker)
        console.log(tasker.value)
        console.log(taskerItem)
        taskerItem.textContent = tasker.value;
        tasker.value=null;
        if(taskerItem.textContent){
            taskerList.append(taskerItem);
        }
        form.classList.add('off');
    }
    
}
export { addTasker,formsubmit };