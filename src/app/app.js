(function(){
    "use strict";

    var app = angular.module("app", ["ngRoute"]);

    app.config(["$routeProvider", configRoutes]);

    function configRoutes($routeProvider){
        $routeProvider.when("/", {
           templateUrl: "app/Expense/expense.html"
        });

        $routeProvider.when("/admin", {
            templateUrl: "app/Admin/admin.html"
        });

        $routeProvider.otherwise({redirectTo: "/"});
    }

}());