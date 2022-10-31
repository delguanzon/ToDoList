// Buisness Logic for ToDo List --------
function ToDoList() {
  this.list = {};
  this.taskId = 0;
}

ToDoList.prototype.addTask = function(taskObject) {
  taskObject.taskId = this.assignId();
  this.list[taskObject.taskId] = taskObject;
}

ToDoList.prototype.assignId = function() {
  this.taskId += 1;
  return this.taskId;
};

ToDoList.prototype.removeTask = function(id) {
  if (this.list[id] === undefined) {
    return false;
  }
  delete this.list[id];
  return true;
};

ToDoList.prototype.updateTaskStat = function (id) {
  this.newStatus = "done"
  this.list[id]["status"] = this.newStatus;
}

// Buisness Logic for Task --------

function Task(taskName) {
  this.taskName = taskName;
  this.status = "ToDo";
}


//User Interface Logic//
let todo = new ToDoList();


function createTaskHtmlElement(task){
  const div = document.createElement('div');
  const chkBox = document.createElement('input');
  const text = document.createElement('input');

  chkBox.append("Done");
  chkBox.setAttribute("id", task.taskId);
  chkBox.setAttribute("value", task.taskId);
  chkBox.setAttribute("name", "checklist");
  chkBox.setAttribute("class", "checkbox");
  chkBox.setAttribute("type", "checkbox");
  text.setAttribute("value",task.taskName);
  text.setAttribute("id",task.taskId);
  text.setAttribute("name",task.taskId);

  div.append(chkBox);
  div.append(text);

  return div;
}

function showTasks(toDoList) {
  let listDiv = document.getElementById('checkBoxList');
  listDiv.replaceChildren("");
  Object.keys(toDoList).forEach( function(key) {
    const task = toDoList[key];
    const div = createTaskHtmlElement(task);
    listDiv.append(div);    
  });  
}

function handleDelete(event) {
  let checklist = document.getElementsByName('checklist');
  checklist.forEach(function (item) {
    if(item.checked)
    {
      todo.removeTask(item.value);
    }
  });
  showTasks(todo.list); 
}

window.addEventListener('load',function() {
  const form = document.getElementById('form');
  form.addEventListener('submit', function(event){
    event.preventDefault();
    let task = new Task(document.getElementById('task').value);
    todo.addTask(task);
    showTasks(todo.list);
    console.log(todo.list);
    document.getElementById("delete").addEventListener("click", handleDelete);
  });
});