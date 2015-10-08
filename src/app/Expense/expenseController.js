(function(){

    "use strict";

    angular.module("app").controller("expenseController", ["expenseDataService", expenseController]);

    function expenseController(expenseDataService){
        var vm = this;

        vm.activate = activate;

        vm.expenseItems = activate();

        function activate(){
            return expenseDataService.getExpenseItems();
        }
    }

}());