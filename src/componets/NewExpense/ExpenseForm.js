import './ExpenseForm.css';
import React,{useState} from 'react';
function ExpenseForm(){
   const [enteredTitle, setEnteredTitle]= useState('');
   const [enteredAmount, setEnteredAmount]= useState('');
   const [enteredDate, setEnteredDate]= useState('');
// const[userInput,setUserInput] = useState({
//     enteredTtitle: '',
//     enteredAmount:'',
//     enteredDate:''

// });
    const titleChangeHandler =(event) =>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTtitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return{
        //         ...prevState, enteredTtitle: event.target.value
        //     };
        // });
    };
    const ammountChangeHandler =(event) =>{
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });

    };
    const dateChangeHandler =(event) =>{
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });

    };
    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
return <form onSubmit={submitHandler}>
    <div className="new-expense_controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value ={enteredTitle} onChange={titleChangeHandler}/>

        </div>
        <div className="new-expense__control">
            <label>Amount </label>
            <input type='number' value={enteredAmount} min='0' step='0' onChange={ammountChangeHandler}/>

        </div>
        <div className="new-expense__control">
            <label>Date </label>
            <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>

        </div>
        
    </div>
    <div className="new-expense__actions">
        <button type="submit"> add Expense</button>
    </div>
    
</form>
};
export default ExpenseForm;