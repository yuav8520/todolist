
function addContentTasker(item){//function for creating the content of the tasker

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
function addTaskerIfArray(array) {
    const taskerList = document.querySelector('ul');

            array.forEach(element => {
            const taskerItem = document.createElement('li');
            taskerItem.textContent = element;
            taskerItem.addEventListener('click', (e) => addContentTasker(e.target));
            taskerList.append(taskerItem);
        })};

function addTaskerIfButton(button)
{ const form =document.querySelector('#pop-up-tasker');
const tasker = form.querySelector(`.input-text`);
const taskerList = document.querySelector('ul');
const taskerItem = document.createElement('li');
taskerItem.textContent = tasker.value;
tasker.value=null;
if(taskerItem.textContent){
    taskerList.append(taskerItem);
}
taskerItem.addEventListener('click', (e)=>addContentTasker(e.target));
form.classList.add('off');
}


function titleDoesnotexist(item){///if there isn't content already in content
    const content = document.querySelector('content');
    const title = document.createElement('h2');
    title.textContent = item.textContent;
    content.append(title);
    const addTask = document.createElement('button');
    addTask.textContent = 'Add Task';
    addTask.addEventListener('click', (e)=>addsTask(e.target));//event listner adds button to add task to list
    content.append(addTask);
}
function addsTask(){//creates form to add task to list
    const body=document.querySelector('body');//declrations
   const form=document.querySelector('#pop-up-task');

    //form.id='form-task-content';
    const input=document.createElement('input');
    const submit=document.createElement('button');
    const title=document.createElement('input');
    const description=document.createElement('textarea');
    const dueDate=document.createElement('input');
    const labelDueDate = document.createElement('label');
    labelDueDate.setAttribute('for', 'dueDate');
    labelDueDate.textContent = 'Due Date:';
    form.appendChild(labelDueDate);



    submit.addEventListener('click', (e)=>e.preventDefault());//eventlisnters
    addsPriority();//functions
    //populatePriority(optionPriorty,priorty);//functions

    form.append(priorty);//append
    form.append(input);
    form.append(submit);
    body.append(form);
    form.classList.add('off');
}
/*addTaskerIfArray(array);
{
console.log('hello');
}
addTaskerIfButton(button);
{    const body=document.querySelector('body');//declrations
const form=button.closest('form');

 //form.id='form-task-content';
 const input=document.createElement('input');
 const submit=document.createElement('button');
 const title=document.createElement('input');
 const description=document.createElement('textarea');
 const dueDate=document.createElement('input');
 /*const labelDueDate = document.createElement('label');
 labelDueDate.setAttribute('for', 'dueDate');
 labelDueDate.textContent = 'Due Date:';
 form.appendChild(labelDueDate);

}*/
function addsPriority(){//creates priorty selctor +label 
const form = document.querySelector('form');
const priorty = document.createElement('select');
priorty.id = 'priorty';
populatePriority(optionPriorty, priorty);
addLabel('Priorty');
form.appendChild(priorty);
}
function addLabel(nameOfLabel)//hopefully adds label to everything i want
{   const form = document.querySelector('form');
    const label = document.createElement('label');
    //label.setAttribute('for', nameOfLabel);
    label.textContent = `${nameOfLabel} :`;
    form.append(label);
}
const optionPriorty=[
    { value: 'low', label: 'low priorty' },
    { value: 'mid', label: 'medium priorty' },
    { value: 'high', label: 'high priorty'}
];
function populatePriority(array, select) {
    array.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.textContent = option.label;
        select.appendChild(opt);
    });
}

export {addTaskerIfArray ,addTaskerIfButton} 