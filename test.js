var test = require("tape");
var logic = require("./logic.js");

test("tape is working ", function(t) {
  t.equal(1, 1, "is working");
  t.end();
});
test("add item to the list ", function(t) {
  var actual = logic.addTodo([], { id: -3, description: "first todo" });
  var expected = [{ id: -3, description: "first todo" }];

  t.deepEqual(actual, expected, "array contain one elemnts");
  t.end();
});

test("delete item from list ", function(t) {
  const todosList = [
    { id: -3, description: "first todo", checked: false },
    { id: -2, description: "a", checked: false }
  ];
  var actual = logic.deleteTodo(todosList, -3).length;
  var expected = todosList.length - 1;
  console.log("actual", actual);
  console.log("expected", expected);

  t.deepEqual(actual, expected, "empty array");
  t.end();
});

test("check element ", function(t) {
  // const todosList = [
  //   { id: -3, description: "first todo" },
  //   { id: -2, description: "a" }
  // ];
  var actual = logic.markTodo(
    [
      { id: -3, description: "first todo", checked: false },
      { id: -2, description: "a", checked: false }
    ],
    -3
  );
  var expected = [
    { id: -3, description: "first todo", checked: true },
    { id: -2, description: "a", checked: false }
  ];
  console.log("actual", actual);
  console.log("expected", expected);

  t.deepEqual(actual, expected, "checkeeed");
  t.end();
});
test("edit", function(t) {
  // const todosList = [
  //   { id: -3, description: "first todo" },
  //   { id: -2, description: "a" }
  // ];
  var actual = logic.editTodos(
    [
      { id: -3, description: "first todo", checked: true },
      { id: -2, description: "a", checked: false }
    ],
    -3,
    "firsttt"
  );
  var expected = [
    { id: -3, description: "firsttt", checked: true },
    { id: -2, description: "a", checked: false }
  ];
  console.log("actual", actual);
  console.log("expected", expected);

  t.deepEqual(actual, expected, "edittts");
  t.end();
});
test("sort the list", function(t) {
  // const todosList = [
  //   { id: -3, description: "first todo" },
  //   { id: -2, description: "a" }
  // ];
  var actual = logic.sortTodos([
    { id: -3, description: "first todo", checked: true },
    { id: -2, description: "a", checked: false }
  ]);
  var expected = [
    { id: -2, description: "a", checked: false },
    { id: -3, description: "first todo", checked: true }
  ];
  console.log("actual", actual);
  console.log("expected", expected);

  t.deepEqual(actual, expected, "sorteeed");
  t.end();
});
