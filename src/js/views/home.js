import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import Characters from "../component/characters";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeople();
    }, []);

    return (
        <div className="container justify-content-center">
            <h1>Characters</h1>
            <Characters people={store.people} /> {/* Pasa las personas al componente Card */}
        </div>
    );
};
