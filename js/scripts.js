let task1 = { name: "first thing to do"};
let task2 = { name: "secondary thing to do"};
let task3 = { name: "third thing to do"};
let taskList = { name: "to do list", tasks: [task1, task2, task3] };

function ToDoList() {
  this.taskList = {};
  this.taskId = 0;
}

toDoList.prototype.addTask = function(taskObject) {
  taskObject.taskId = this.assignId();
  this.taskList[taskObject.taskId] = taskObject;
}

toDoList.prototype.assignId = function() {
  this.taskId += 1;
  return this.taskId;
};

function Task(taskName) {
  this.taskName = taskName;
  this.status = "ToDo";
}

