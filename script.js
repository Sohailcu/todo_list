const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');

addTaskButton.addEventListener('click', function() {
    const taskText = newTaskInput.value;
    const dueDate = document.getElementById('due-date').value;
    const priorityLevel = document.getElementById('priority-level').value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    newTask.innerText = `${taskText} (Due: ${dueDate})`;
    newTask.innerText = `${taskText} (Due: ${dueDate}, Priority: ${priorityLevel})`;
   
    if (priorityLevel === 'High') {
        newTask.classList.add('high-priority');
    } else if (priorityLevel === 'Medium') {
        newTask.classList.add('medium-priority');
    } else {
        newTask.classList.add('low-priority');
    }

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
        updateLocalStorage();
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    updateLocalStorage();
    newTaskInput.value = '';
});
