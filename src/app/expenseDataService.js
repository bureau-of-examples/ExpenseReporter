(function(){
    "use strict";

    angular.module("app").factory("expenseDataService", ["$http", expenseDataService]);

    function expenseDataService($http){
        var service = {
            getExpenseItems: getExpenseItems
        };

        return service;

        function getExpenseItems(){
            return [
                new ExpenseItem("Taxi", "To airport", 89.95),
                new ExpenseItem("Lunch", "At airport", 15.40),
                new ExpenseItem("Coffee", "Starbucks", 4.93)
            ];
        }
    }

}());