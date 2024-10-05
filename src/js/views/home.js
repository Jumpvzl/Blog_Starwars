import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import Card from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeople();
    }, []);

    return (
        <div className="container justify-content-center">
            <Card people={store.people} /> {/* Pasa las personas al componente Card */}
        </div>
    );
};
