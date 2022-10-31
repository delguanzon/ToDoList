Describe: toDoList()
Test: "It should display a list of things to do"
Code: toDoList();
Expected Output:
(2) [{...}, {...}, {...}]
 {0: "FirstThing to Do", 
 1:  "SecondThing to Do",  
 2:  "SecondThing to Do"}

Describe: toDoList.prototype.addTask()
Test: "It should add a task in the list of things to do"
Code: 
  let todo = new ToDoList();
  let task1 = new Task("First Thing to Do");
  let task2 = new Task("Next Thing to Do"); 
  todo.list()
Expected Output:
(2) [{...}, {...}, {...}]
 {0: "FirstThing to Do", 
 1:  "SecondThing to Do",  
 2:  "SecondThing to Do"}

Describe: toDoList.prototype.removeTask()
Test: "It should remove a task in the list of things to do"
Code: 
  (2) [{...}, {...}, {...}]
    {0: "FirstThing to Do",
    1:  "SecondThing to Do",
    2:  "SecondThing to Do"}
  todo.removeTask(1);
Expected Output:
(2) [{...}, {...}, {...}]
 {0: "FirstThing to Do",
 2:  "SecondThing to Do"}
