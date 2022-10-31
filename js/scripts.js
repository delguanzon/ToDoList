let task1 = { name: "first thing to do"};
let task2 = { name: "secondary thing to do"};
let task3 = { name: "third thing to do"};
let taskList = { name: "to do list", tasks: [task1, task2, task3] };

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

function Task(taskName) {
  this.taskName = taskName;
  this.status = "ToDo";
}

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


