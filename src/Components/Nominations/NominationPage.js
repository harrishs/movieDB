import React from "react";
import { useParams, Link } from 'react-router-dom';
import classes from "./NominationPage.module.css";

const NominationPage = () => {
    const params = useParams();

    return (
        <div className={classes.Page}>
            <Link to="/">
            <h1 className={classes.Logo}>The Shoppies</h1>    
            </Link>
            <h1 className={classes.Name}>{params.name} has nominated these 5 movies</h1>
            <div className={classes.Nominations}>
                <h1>{params.nom1}</h1>
                <h1>{params.nom2}</h1>
                <h1>{params.nom3}</h1>
                <h1>{params.nom4}</h1>
                <h1>{params.nom5}</h1>
            </div>
            <Link to="/"><button className={classes.Create}>Create Your Own List of Nominations</button></Link>
        </div>
    )
}

export default NominationPage;