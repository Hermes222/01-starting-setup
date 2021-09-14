import './ExpenseForm.css';
function ExpenseForm(){
return <form>
    <div className="new-expense_controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text"/>

        </div>
        <div className="new-expense__control">
            <label>Amount </label>
            <input type='number' min='0' step='0'/>

        </div>
    </div>
</form>
};
export default ExpenseForm;