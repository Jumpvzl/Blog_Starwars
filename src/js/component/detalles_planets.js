import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Detalles_planets = () => {
    const { uid } = useParams();
    const { store, actions } = useContext(Context);
    const [planet, setPlanet] = useState(null); 

    useEffect(() => {
        const foundPlanet = store.planets.find(p => p.uid === uid); 
        if (foundPlanet) {
            setPlanet(foundPlanet);
        } else {
            actions.getPlanets();
        }
    }, [uid, store.planets, actions]);

    if (!planet) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="container justify-content-center">
            <div className="d-flex">
                <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} 
                    alt="Starwars"
                    className="imagen-detalles"
                />
                <div className="plant">
                    <h1>{planet.name}</h1>
                    <p>{planet.description}</p>
                </div>
            </div>
            <div className="linea-roja"></div>
            <div className="d-flex justify-content-center">
                <div className="caracteristica-name">
                    <strong>Name:</strong> <div>{planet.name}</div>
                </div>
                <div className="caracteristica-diameter">
                    <strong>Diameter:</strong> <div>{planet.diameter}</div> 
                </div>
                <div className="caracteristica-climate">
                    <strong>Climate:</strong> <div>{planet.climate}</div> 
                </div>
                <div className="caracteristica-terrain">
                    <strong>Terrain:</strong> <div>{planet.terrain}</div> 
                </div>
                <div className="caracteristica-orbitalperiod">
                    <strong>Orbital Period:</strong> <div>{planet.orbital_period}</div> 
                </div>
                <div className="caracteristica-rotationperiod">
                    <strong>Rotation Period:</strong> <div>{planet.rotation_period}</div> 
                </div>
            </div>
        </div>
    );
};

export default Detalles_planets;
