// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");

  var state = [
    // { id: -3, description: "first todo", checked: false },
    // { id: -2, description: "second todo", checked: false },
    // { id: -1, description: "third todo", checked: false }
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
  var btn = document.createElement("BUTTON"); // Create a <button> element
     btn.className="sort--btn";
  btn.innerHTML = "Sort your to do :)"; // Insert text
  document.body.appendChild(btn);
  // document.btn.style.color = "red";
  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var counter=0;
    var todoNode = document.createElement("li");
    todoNode.setAttribute("id", todo.id);
    todoNode.label="item ".counter++;

    document.getElementById("todo-container").appendChild(todoNode);
    // you will need to use addEventListener
    //input (checkbox)
    var checkBox = document.createElement("input"); //checkbx
    checkBox.setAttribute("type", "checkbox");
    // checkBox.
    checkBox.checked = todo.checked;
    var editButton = document.createElement("button"); //edit button
        editButton.className="edit--btn";
        editButton.setAttribute("aria-label","edit_btn");
        // editButton.name=edit_btn;
    var label = document.createElement("label"); //label
    //input (text)
    label.setAttribute("for",todo.id);
    
    label.innerText = todo.description;

    //button.delete
    todoNode.appendChild(label);

    var deleteButton = document.createElement("button");
    //delete button
    // add span holding description
     
    // this adds the delete button
    todoNode.appendChild(checkBox);

    // todoNode.appendChild(editButton);
    // todoNode.appendChild(deleteButton);
    var deleteButtonNode = document.createElement("button");
        deleteButtonNode.className="delete--btn";
        deleteButtonNode.setAttribute("aria-label","delete_btn");
        // deleteButtonNode.name=delete_btn;
    document.getElementById("todo-container").appendChild(todoNode);
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });

    todoNode.appendChild(deleteButtonNode);

    var counter = 1;

    editButton.addEventListener("click", function(event) {
      //  const liElement = document.getElementById(todo.id);
      var textEdit = label.innerText;
      var editArr = todoFunctions.editTodos(state, todo.id, textEdit);
      if (label.contentEditable == "true") {
        label.contentEditable = "false";
        label.focus();
        update(editArr);
      } else {
        label.contentEditable = "true";
      }
    });

    todoNode.appendChild(editButton);
    btn.addEventListener("click", function(event) {

      var newState = todoFunctions.sortTodos(state);
      update(newState);
    });
    checkBox.addEventListener("click", function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);

      update(newState);
    });
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
