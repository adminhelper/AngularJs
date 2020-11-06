var app = angular.module("todo", []);

app.controller("TodoCtrl", function ($scope) {
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
});
