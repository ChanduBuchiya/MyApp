import React from "react";
import ExpenceForm from "./ExpenceForm";
import './NewExpence.css'

const NewExpence = (props) =>{ 

    const saveExpenceDatahandler = (enteredExpenceData) => {
        const expenceData = {
            ...enteredExpenceData,
            id: Math.random().toString()
        }
        props.onAddExpence(expenceData);
 
        console.log(enteredExpenceData);
     }
    return(
        <div className='new-expence'>
           <ExpenceForm  
           onSaveExpenceData=
           {saveExpenceDatahandler}/> 
        </div>
    );

}
export default NewExpence;