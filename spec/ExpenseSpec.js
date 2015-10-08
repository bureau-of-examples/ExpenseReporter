
describe("Expense objects", function () {

    var expense,expenseItem;
    beforeEach(function(){

        expenseItem = new ExpenseItem(100);
        expense = new Expense(expenseItem);
    });

    it("Should set expenseItem property", function () {
        expect(expense.expenseItem).toBe(expenseItem);
    });

    it("Should have the correct expense amount", function(){
        expect(expense.expenseItem.amount).toEqual(100);
    });
});