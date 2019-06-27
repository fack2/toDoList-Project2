// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");

  var state = [
    { id: -3, description: "first todo", checked: false },
    { id: -2, description: "second todo", checked: false },
    { id: -1, description: "third todo", checked: false }
  ]; // this is our initial todoList

  var SubmitButton = document.querySelector("#submit");
  SubmitButton.addEventListener("click", function() {
    event.preventDefault();
    var textToDo = document.getElementById("add");
    var newObj = {
      id: todoFunctions.generateId(),
      description: textToDo.value,
      checked: false
    };
    var newStatex = todoFunctions.addTodo(state, newObj);
    update(newStatex);
  });
  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");

    var elementsAdd = todo.description;
    var textnode = document.createTextNode(elementsAdd);
    todoNode.appendChild(textnode);
    document.getElementById("todo-container").appendChild(todoNode);
    // you will need to use addEventListener
    //input (checkbox)
    var checkBox = document.createElement("input"); //checkbx
    checkBox.setAttribute("type", "checkbox");
    var editButton = document.createElement("button"); //edit button
        editButton.className="edit--btn";
    //button.delete
    var deleteButton = document.createElement("button");
    //delete button
    // add span holding description

    // this adds the delete button
    todoNode.appendChild(checkBox);

    // todoNode.appendChild(editButton);
    // todoNode.appendChild(deleteButton);
    var deleteButtonNode = document.createElement("button");
        deleteButtonNode.className="delete--btn";
    document.getElementById("todo-container").appendChild(todoNode);
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });

    todoNode.appendChild(deleteButtonNode);

    var counter = 1;

    editButton.addEventListener("click", function(event) {
      if (counter % 2 != 0) {
        // document.getElementById("li").contentEditable = "true";
        todo.description.contentEditable = true;
      } else {
        // document.getElementById("li").contentEditable = "false";
        todo.description.contentEditable = false;
      }
      counter++;
    });

    todoNode.appendChild(editButton);
    // add markTodo button
    // <button id="delete" onclick="deleteButtonNode()">
    //   Try it
    // </button>;
    // add classes for css
    function addCss() {
      var element = document.getElementById("delete");
      element.classList.add("delete");
    }
    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?

      var description = "?"; // event.target ....

      // hint: todoFunctions.addTodo
      var newState = []; // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
