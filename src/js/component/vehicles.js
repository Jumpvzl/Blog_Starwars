import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";

    const Vehicles = ({ vehicles }) => {
    const { actions, store } = useContext(Context);

    if (!vehicles || vehicles.length === 0) return <p>No hay vehículos disponibles.</p>;

    return (
        <div className="overflow-x-scroll">
            <div className="d-flex">
                {vehicles.map(vehicle => {
                    const isFavorite = store.favorites.some(fav => fav.uid === vehicle.uid);
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
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p className="card-text"><strong>Model:</strong> {vehicle.model}</p>
                                <p className="card-text"><strong>Crew:</strong> {vehicle.crew}</p>
                                <p className="card-text"><strong>Manufacturer:</strong> {vehicle.manufacturer}</p>
                                <div className="btnfooter">
                                    <Link to={`/vehicles/detalles/${vehicle.uid}`} className="btn btn-outline-primary">Learn More!</Link>
                                    <button 
                                        type="button" 
                                        className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-warning'}`}
                                        onClick={() => isFavorite 
                                            ? actions.removeFavorite(vehicle.uid) 
                                            : actions.addFavorite({"titulo": vehicle.name, "uid": vehicle.uid})
                                        }
                                    >
                                        <FontAwesomeIcon icon={faHeart} />
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
