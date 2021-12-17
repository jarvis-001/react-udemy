import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, {useState} from 'react';

const ExpenseItem=(props) =>{ 

 const [title,setTitle] = useState(props.title); //we are not reinitialising title bt some internal state variable, thus title is constant

//  let rtitle = props.title;
  const clickHandler=()=>{
    setTitle('Updated');
    console.log(title);
    // rtitle = 'Updated';
  };
  
  return (
    <Card className="expense-item">
      <ExpenseDate date ={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change button</button>
    </Card>
  );
}

export default ExpenseItem;

