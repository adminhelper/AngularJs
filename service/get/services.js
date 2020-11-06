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
  };
  return storage;
});
