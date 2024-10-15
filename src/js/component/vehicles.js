import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as HeartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faHeart as HeartFull } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";

    const Vehicles = ({ vehicles }) => {
    const { actions, store } = useContext(Context);
    const vehiculos = store.vehicles

    
    if (!vehiculos || vehiculos.length === 0) return <p>No hay vehículos disponibles.</p>;
    const isFavorite = (vehiculo) => { 
        return store.favorites.some((favorito) => (favorito.uid == vehiculo.uid && favorito.type == vehiculo.type))
    }

    const handlerClick = (character) => {
        if (isFavorite(character)){
            actions.removeFavorite(character)
        }
        else {
            actions.addFavorite(character)
        }

    }
    return (
        <div className="overflow-x-scroll">
            <div className="d-flex">
                {vehiculos.map(vehicle => {
                    
                    const manufacturer = vehicle.manufacturer.length > 16
                        ? (
                            <>
                                {vehicle.manufacturer.slice(0, 22)}
                                <br />
                                {vehicle.manufacturer.slice(22)}
                            </>
                          ) 
                        : vehicle.manufacturer;

                    return (
                        <div className="card" key={vehicle.uid}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/starships/${vehicle.uid}.jpg`} 
                                className="card-img-top-vehicles"
                                alt={`Imagen de ${vehicle.name}`}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg";
                                }}
                            />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p className="card-text"><strong>Model:</strong> {vehicle.model}</p>
                                <p className="card-text"><strong>Crew:</strong> {vehicle.crew}</p>
                                <p className="card-text"><strong>Manufacturer:</strong> {manufacturer}</p>
                                <div className="btnfooter">
                                    <Link to={`/vehicles/detalles/${vehicle.uid}`} className="btn btn-outline-primary">Learn More!</Link>
                                    <button 
                                        type="button" 
                                        className="btn-favorite"
                                        onClick={() => handlerClick({"name": vehicle.name, "uid": vehicle.uid, "type": "Vehiculos"})}
                                    >
                                    <FontAwesomeIcon icon={isFavorite({"uid": vehicle.uid, "type": "Vehiculos"}) ? HeartFull : HeartEmpty} 
                                    style={{ color: isFavorite({"uid": vehicle.uid, "type": "Vehiculos"}) ? 'gold' : 'black' }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Vehicles;
