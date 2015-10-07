
describe("Expense objects", function () {
    it("Should set expenseItem property", function () {

        var expenseItem = new ExpenseItem();
        var expense = new Expense(expenseItem);

        expect(expense.expenseItem).toBe(expenseItem);
    });
});