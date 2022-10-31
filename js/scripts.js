// Buisness Logic for ToDo List --------
function ToDoList() {
  this.list = {};
  this.taskId = 0;
}

ToDoList.prototype.addTask = function(taskObject) {
  //taskObject.taskId = this.assignId();
  this.list[this.assignId()] = taskObject;
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
  const delBtn = document.createElement('button');
  const chkBtn = document.createElement('button');
  const text = document.createElement('input');

  delBtn.append("Delete");
  text.setAttribute("value",task.taskName);
  chkBtn.append("Done");
  div.append(delBtn);
  div.append(text);
  div.append(chkBtn);

  return div;
}
function showTasks(toDoList) {
  let listDiv = document.getElementById('listDiv');
  listDiv.replaceChildren("");
  Object.keys(toDoList).forEach( function(key) {
    const task = toDoList[key];
    const div = createTaskHtmlElement(task);    
    // div.append(delBtn);    
    // div.append(task.taskName);
    // div.append(chkBtn);
    listDiv.append(div);
  });  
}

window.addEventListener('load',function() {
  const form = document.getElementById('form');
  form.addEventListener('submit', function(event){
    event.preventDefault();
    let task = new Task(document.getElementById('task').value);
    todo.addTask(task);
    showTasks(todo.list);
    console.log(todo.list);
  });
});