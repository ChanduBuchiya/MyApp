import React,{ useState} from "react";


import ExpenceDate from './ExpenceDate';
import './ExpenceItem.css'
import Card from '../Ui/Card';
function ExpenceItem(props){ 

    
    return (
        
    <div  className="expence-box">
           <Card className="expence-item">
           <div className="expense-card">
            <ExpenceDate date={props.date} />
  
            <div className="expence-description">
               <div> <h2>{ props.title }</h2> </div>
             <div className="expence-price">${props.amount}</div>
             </div>
             </div>
            
            </Card>
       </div>  
    );  

}
export default ExpenceItem;