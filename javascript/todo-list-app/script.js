var todos = [];
var input = prompt("what would you like to do?");

while(input !== "quit") {
  //handle input
  if (input === "list") {
    listToDos();
  } else if (input === "new") {
    addToDos();
  } else if (input === "delete") {
    deleteToDos();
  }
  //ask again for new input
  input = prompt("what would you like to do?");
}
console.log("Ok you quit the app");

function listToDos() {
  console.log("***********");
  todos.forEach(function(todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("***********");
}

function addToDos() {
  //ask for new todo
  var newToDo == prompt("Enter new todo");
  //add to todos array
  todos.push(newToDo);
  console.log("Added Todo");
}

function deleteToDos() {
  //ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete");
  //delete that todo
  //splice()
  todos.splice(index, 1);
  console.log("Deleted Todo");
}
