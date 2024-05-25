function addTasker(button) {//recives the submit button that was clicked
    //if it's a form we want to get the name and add it to list 
    const form =button.closest('form');
    console.log(form)
    if(form){
        
        const tasker = form.querySelector(`.input-text`);
        const taskerList = document.querySelector('ul');
        const taskerItem = document.createElement('li');
        console.log(tasker.value)
        taskerItem.textContent = tasker.value;
        taskerList.append(taskerItem);
        //form.classList.add('off');
    }
    
}
export { addTasker };