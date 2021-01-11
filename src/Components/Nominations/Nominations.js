import React, {useContext} from "react";
import {NominationContext} from "../../NominationContext";

import classes from "./Nominations.module.css";

const Nominations = props => {
    const [nominations, setNominations] = useContext(NominationContext);

    //remove nomination
    const nominationHandler = (id) => { 
          if (nominations.count <= 5){
            if (nominations.count <= 0){
              alert("You have no nominations");
            }
            let removeNominations = nominations;
            console.log(id);
            delete removeNominations[id];
            removeNominations.count -= 1;
            setNominations(removeNominations);
          } else {
            alert("You have no more nominations");
          }
    }    

    return (
        <div className={classes.Nomination}>
            <h1>{props.title} ({props.year})</h1>
            <button onClick={() => props.reload(nominationHandler, props.imdbID)}>Remove Nomination</button>
        </div>
    )
}

export default Nominations;