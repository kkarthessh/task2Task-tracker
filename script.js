function addTask() {
  var taskInput = document.getElementById('task-input');
  var taskText = taskInput.value.trim();

  if (taskText !== '') {
    var taskList = document.getElementById('task-list');

    var taskItem = document.createElement('li');
    taskItem.innerHTML = '<input type="checkbox" onclick="completeTask(this)"> ' + taskText;
    taskList.appendChild(taskItem);

    taskInput.value = '';
  }
}

function completeTask(checkbox) {
  var taskItem = checkbox.parentNode;
  taskItem.classList.toggle('completed');
}