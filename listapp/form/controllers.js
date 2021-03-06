angular.module("todo").controller("TodoCtrl", function ($scope) {
  $scope.todos = [
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
  ];

  $scope.remove = function (todo) {
    // find todo index in todos
    var idx = $scope.todos.findIndex(function (item) {
      return item.id === todo.id;
    });

    // if remove form todos
    if (idx > -1) {
      alert("삭제하겠습니까?");
      $scope.todos.splice(idx, 1);
    }
  };

  $scope.add = function (newTodoTitle) {
    // create new todo
    var newTodo = {
      title: newTodoTitle,
      completed: false,
      createdAt: Date.now(),
    };

    // push into todos
    $scope.todos.push(newTodo);

    //empty form
    $scope.newTodoTitle = "";
    alert(newTodoTitle);
  };
});
