angular.module("todo").factory("todoStorage", function () {
  var storage = {
    // todo...
    todos: [
      {
        title: "요가수련",
        completed: false,
        createdAt: Date.now(),
      },
      {
        title: "요가 수행",
        completed: false,
        createdAt: Date.now(),
      },
      {
        title: "요가 완료",
        completed: true,
        createdAt: Date.now(),
      },
    ],
    get: function () {
      return storage.todos;
    },

    remove: function (todo) {
      var idx = storage.todos.findIndex(function (item) {
        return item.id === todo.id;
      });

      // if remove form todos
      if (idx > -1) {
        alert("삭제하겠습니까?");
        storage.todos.splice(idx, 1);
      }
    },
    // create new todo
    add: function (newTodoTitle) {
      var newTodo = {
        title: newTodoTitle,
        completed: false,
        createdAt: Date.now(),
      };
      // push into todos
      storage.todos.push(newTodo);
    },
  };
  return storage;
});
