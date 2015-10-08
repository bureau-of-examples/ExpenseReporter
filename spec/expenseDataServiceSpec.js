describe("expenseDataService", function(){

    beforeEach(module("app"));

    beforeEach(function(){
        jasmine.addMatchers(customMatchers);
    });

    it("Should return three expense items", inject(function(expenseDataService){
        expect(expenseDataService.getExpenseItems().length).toBe(3);
    }));

    it("Should return a taxi expense", inject(function(expenseDataService){
        var expenseItems = expenseDataService.getExpenseItems();
        var taxiExpenseItem = new ExpenseItem("Taxi", "To airport", 89.95);
        expect(expenseItems).toContain(taxiExpenseItem);
    }));

    describe("reasonable expense", function(){

        var taxi, dinner;

        beforeEach(function(){
            jasmine.addMatchers(customMatchers);
        });

        beforeEach(function(){
            taxi = new ExpenseItem("Taxi", "To airport", 89.95);
            dinner = new ExpenseItem("Dinner", "Dinner with John and Ward", 189.50);
        });

        it("Taxi should be a reasonable expense", function(){
            expect(taxi).toBeAReasonableExpense();
        });

        it("Dinner should not be a reasonable expense", function(){
            expect(dinner).not.toBeAReasonableExpense();
        });

    });




});
