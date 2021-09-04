import './ExpenseItem.css';
import React, {useState}from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {
  const [title,setTitle] = useState(props.title);
    
   function clickHandler (){
      setTitle('Updated');
    console.log(title);
   }
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date ={props.date}/>
      </div>
      <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
