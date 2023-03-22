import React, {useState} from "react";
import NewExpence from "./components/NewExpence/NewExpence";

import Expences from "./components/Expences/Expences";

let DUMMY_EXPENCE = [];

const App = () => {

      const [expences, setExpences] = useState(DUMMY_EXPENCE);

      fetch('https://ir-example.mir.prod.reco.microsoft.com/Reco/V1.0/Similar/64702?AlgoType=CompleteSimilarStyles').then(
        response => {
            return response.json();
        }
      ).then(
        data => {
            console.log(data);
            setExpences(data);
        }
      )

    const addExpenceHandler = (expence) => {
       
       const updatedExpence = [expence, ...expences];
        setExpences(updatedExpence);
    };
   
    return (
        <div>
            <NewExpence onAddExpence={addExpenceHandler} />
            <Expences item={expences} />
        </div>
    );
}

export default App;