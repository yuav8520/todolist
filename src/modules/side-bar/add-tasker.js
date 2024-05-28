function formsubmit(){
    const form=document.querySelector('form:not(.off)');
    const submit=form.querySelector('button[type="submit"]');
    submit.addEventListener('click', (e)=>e.preventDefault());
    if(form.id=='pop-up-tasker'){
        submit.addEventListener('click', (e)=>addTasker(e.target));
    }
    if(form.id==='form-task-content'){
        form.addEventListener('submit', (e)=>addsTask(e.target));
    }


}
function addTasker(buttonOrArray) {//recives the submit button or array that was clicked
    //if it's a form we want to get the name and add it to list 
    //and an array we want to add
    if(Array.isArray(buttonOrArray)){
        const taskerList = document.querySelector('ul');
        buttonOrArray.forEach(element => {
            const taskerItem = document.createElement('li');
            taskerItem.textContent=element;
            taskerItem.addEventListener('click', (e)=>addContentTasker(e.target));
            taskerList.append(taskerItem);
        });

    }
    
    else{
        const form =buttonOrArray.closest('form');
        const tasker = form.querySelector(`.input-text`);
        const taskerList = document.querySelector('ul');
        const taskerItem = document.createElement('li');
        taskerItem.textContent = tasker.value;
        tasker.value=null;
        if(taskerItem.textContent){
            taskerList.append(taskerItem);
        }
        form.classList.add('off');
        taskerItem.addEventListener('click', (e)=>addContentTasker(e.target));
    }

}
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
function addContentTasker(item){//function for creating the content of the tasker
    console.log(document.querySelector('h2')===null)
    if(document.querySelector('h2')===null)
        { titleDoesnotexist(item);  }
    else{titleExists(item);    }

}
function titleExists(item){//if there is content already in content
    const content = document.querySelector('content');
    let title=content.querySelector('h2');
    let button=content.querySelector('button');
    button.remove();
    title.remove();
    titleDoesnotexist(item);
}
function titleDoesnotexist(item){///if there isn't content already in content
    const content = document.querySelector('content');
    console.log(item);
    const title = document.createElement('h2');
    title.textContent = item.textContent;
    content.append(title);
    const addTask = document.createElement('button');
    addTask.textContent = 'Add Task';
    addTask.addEventListener('click', (e)=>addsTask(e.target));
    content.append(addTask);
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