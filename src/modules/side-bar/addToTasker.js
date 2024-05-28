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
function titleDoesnotexist(item){///if there isn't content already in content
    const content = document.querySelector('content');
    const title = document.createElement('h2');
    title.textContent = item.textContent;
    content.append(title);
    const addTask = document.createElement('button');
    addTask.textContent = 'Add Task';
    addTask.addEventListener('click', (e)=>addsTask(e.target));
    content.append(addTask);
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
{ const form =button.closest('form');
const tasker = form.querySelector(`.input-text`);
const taskerList = document.querySelector('ul');
const taskerItem = document.createElement('li');
taskerItem.textContent = tasker.value;
tasker.value=null;
if(taskerItem.textContent){
    taskerList.append(taskerItem);
}
form.classList.add('off');
taskerItem.addEventListener('click', (e)=>addContentTasker(e.target));}

export {addTaskerIfArray ,addTaskerIfButton} 