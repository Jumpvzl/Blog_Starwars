import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";

const Planets = ({ planets }) => {
    const { actions, store } = useContext(Context);

    if (!planets || planets.length === 0) return <p>No hay planetas disponibles.</p>;

    return (
        <div className="overflow-x-scroll">
            <div className="d-flex">
                {planets.map(planet => {
                    const isFavorite = store.favorites.some(fav => fav.uid === planet.uid);
                    return (
                        <div className="card" key={planet.uid}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                                className="card-img-top-planets"
                                alt={`Imagen de ${planet.name}`}
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = "https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg";
                                }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <p className="card-text"><strong>Clima:</strong> {planet.climate}</p>
                                <p className="card-text"><strong>Terreno:</strong> {planet.terrain}</p>
                                <p className="card-text"><strong>Población:</strong> {planet.population}</p>
                                <div className="btnfooter">
                                    <Link to={`/planets/detalles/${planet.uid}`} className="btn btn-outline-primary">Learn More!</Link>
                                    <button 
                                        type="button" 
                                        className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-warning'}`}
                                        onClick={() => isFavorite 
                                            ? actions.removeFavorite(planet.uid) 
                                            : actions.addFavorite({"titulo": planet.name, "uid": planet.uid})
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

export default Planets;
