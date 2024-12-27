task = document.getElementById('task');
listContainer = document.getElementsByClassName('task-container')[0];
button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function () {
    if (task.value === '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = task.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
        saveData()
    }
    task.value="";
})

listContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI')
    {
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName==='SPAN')
    {
        e.target.parentElement.remove();
    }
    saveData();
})

function saveData()
{
    localStorage.setItem('taskList',listContainer.innerHTML);
}

function showData()
{
    listContainer.innerHTML=localStorage.getItem('taskList');
}

showData();