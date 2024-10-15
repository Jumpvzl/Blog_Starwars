import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Detalles_characters = () => {
    const { uid } = useParams();
    const { store, actions } = useContext(Context);
    const [vehicle, setVehicle] = useState(null); // Cambiado a 'setVehicle'

    useEffect(() => {
        const foundVehicle = store.vehicles.find(v => v.uid === uid); // Cambiado a 'store.vehicles' y 'foundVehicle'
        if (foundVehicle) {
            setVehicle(foundVehicle);
        } else {
            actions.getVehicles();
        }
    }, [uid, store.vehicles, actions]);

    if (!vehicle) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="container justify-content-center">
            <div className="d-flex justify-content-center">
                <img
                    src={`https://starwars-visualguide.com/assets/img/starships/${vehicle.uid}.jpg`}
                    alt={vehicle.name} // Mejorar accesibilidad
                    className="imagen-detalles"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg"; 
                    }}
                />
                <div className="vehicle">
                    <h1>{vehicle.name}</h1>
                    <p>{vehicle.description}</p>
                </div>
            </div>
            <div className="linea-roja"></div>
            <div className="d-flex justify-content-center">
                <div className="caracteristica-name">
                    <strong>Name:</strong> <div>{vehicle.name}</div>
                </div>
                <div className="caracteristica-model">
                    <strong>Model:</strong> <div>{vehicle.model}</div> {/* Cambiar 'Birth Year' a 'Model' */}
                </div>
                <div className="caracteristica-manufacturer">
                    <strong>Manufacturer:</strong> <div>{vehicle.manufacturer}</div>
                </div>
                <div className="caracteristica-crew">
                    <strong>Crew:</strong> <div>{vehicle.crew}</div>
                </div>
                <div className="caracteristica-hyperdrive">
                    <strong>Hyperdrive Rating:</strong> <div>{vehicle.hyperdrive_rating}</div>
                </div>
                <div className="caracteristica-speed">
                    <strong>Max Atmosphering Speed:</strong> <div>{vehicle.max_atmosphering_speed}</div>
                </div>
            </div>
        </div>
    );
};

export default Detalles_characters;
