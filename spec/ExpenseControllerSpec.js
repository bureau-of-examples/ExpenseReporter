"use strict";

describe("expenseController", function(){

    var $controllerConstroller;
    var scope;

    beforeEach(module("app"));

    beforeEach(inject(function($controller, $rootScope){
       $controllerConstroller = $controller;
        scope = $rootScope.$new();
    }));

    it("Should have three expense items", function(){
        var ctrl = $controllerConstroller("expenseController", {$scope: scope});
        expect(ctrl.expenseItems.length).toBe(3);
    });

});