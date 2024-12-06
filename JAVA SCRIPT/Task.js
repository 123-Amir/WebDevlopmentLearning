function addTask(){
    const newTaskText =document.getElementById('newTask').value;
    if(newTaskText.trim()!==""){
        const taskList = document.getElementById('taskList');
        const newTaskItem = document.getElementById('li');
        newTaskItem.textContent = newTaskText;
        taskList.appendChild(newTaskItem);
        document.getElementById('newTask').value = "";
    }
}