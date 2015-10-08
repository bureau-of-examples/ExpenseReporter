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
                {title: "Taxi", description: "To airport", amount:89.95},
                {title: "Lunch", description: "At airport", amount:15.40},
                {title: "Coffee", description: "Starbucks", amount: 4.93}
            ];
        }
    }

}());