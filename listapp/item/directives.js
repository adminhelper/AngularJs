angular.module("todo").directive("todoTitle", function () {
  return {
    template: "<h1> 목록 </h1>",
  };
});

angular.module("todo").directive("todoItem", function () {
  return {
    templateUrl: "todoItem.tpl.html",
  };
});
