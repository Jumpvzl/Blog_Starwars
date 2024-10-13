import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import Characters from "../component/characters";
import Planets from "../component/planets";
import Vehicles from "../component/vehicles";
import { Context } from "../store/appContext";


export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeople();
        actions.getPlanets();
        actions.getVehicles();
    }, []);

    return (
        <div className="container justify-content-center">
            <h1 className="titleMain">Characters</h1>
            <Characters />
            <h1 className="titleMain">Planets</h1>
            <Planets />
            <h1 className="titleMain">Vehicles</h1>
            <Vehicles />
        </div>
    );
};
