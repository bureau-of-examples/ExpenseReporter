describe("expenseDataService", function(){

    beforeEach(module("app"));

    it("Should return three expense items", inject(function(expenseDataService){
        expect(expenseDataService.getExpenseItems().length).toBe(3);
    }));
});
