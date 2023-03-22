import React from "react";

import "./Expences.css";
import ExpenceItem from "./ExpenceItem";
import Card from "../Ui/Card";

const Expences = (props) => {
  return (
    <div className="container">
      <Card className="expences">
        {
          props.item.map(
            expence => (
              <ExpenceItem
              date={expence.date}
              title={expence.title}
              amount={expence.amount}
              className="expenses-items"
            />
    
            )
          )
        }
        
      
       
      </Card>
    </div>
  );
}
export default Expences;
