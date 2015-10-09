"use strict";

describe("Persisting expenses", function(){

    beforeEach(module('app'));

    describe("Callbacks", function(){

        it("Should callback when persisted", inject(function(expenseDataService){

            var callbackSpy = jasmine.createSpy("callbackSpy");
            expenseDataService.persistExpenses(callbackSpy);
            expect(callbackSpy).toHaveBeenCalled();

        }));
    });

    describe("Spy on", function(){

        var spy, callbackSpy;

        beforeEach(inject(function(expenseDataService){
            spy = spyOn(expenseDataService, "persistExpenses");
            callbackSpy = jasmine.createSpy("callbackSpy");
        }));

        it("Should spy on persistExpenses", inject(function(expenseDataService){

            expenseDataService.persistExpenses(callbackSpy);
            expect(spy).toHaveBeenCalled();
            expect(callbackSpy).not.toHaveBeenCalled(); //the spied on method is replaced

        }));

        it("Should fake a reply", inject(function(expenseDataService){
            spy.and.callFake(function(callback){
                callback();
                return 3;//# of expenses persisted
            });

            var persistedExpenses = expenseDataService.persistExpenses(callbackSpy);

            expect(persistedExpenses).toEqual(3);
            expect(callbackSpy).toHaveBeenCalled();
        }));
    });
});