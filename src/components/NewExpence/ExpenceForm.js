import React, { useState, uswState }from "react";
import './ExpenceForm.css';

const ExpenceForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle (event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount (event.target.value);
    };
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    };
 
    const submitHandler = (event) => {
        event.preventDefault();

        const expenceData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

            props.onSaveExpenceData(expenceData);

            console.log(expenceData);

            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
    };

return(
    <form onSubmit={submitHandler}>
        <div className="new-expence-controls">
            <div div className="new-expence-control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div div className="new-expence-control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div div className="new-expence-control">
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expence__actions">
            <button type="submit">Add Expence</button>
        </div>
    </form>
);
}

export default ExpenceForm;