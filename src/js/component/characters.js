import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";

const Characters = ({ people }) => {
    const { store, actions } = useContext(Context);

    if (!people || people.length === 0) return <p>No hay personajes disponibles.</p>;

    const [favorites, setFavorites] = useState([]);

    function isFavorited(people){
        return favorites.some((favorite) => favorite.uid == people.uid)
    }
    function handleClick(people) {
        if (isFavorited(people)) {
            setFavorites(favorites.filter((favorite) => favorite.uid !== people.uid));
            actions.removeFavorite(people);
        } else {
            const newFavorite = { uid: people.uid, name: people.name };
            setFavorites([...favorites, newFavorite]);
            actions.addFavorite(newFavorite);
        }
    }
    return (
        <div className="overflow-x-scroll">
            <div className="d-flex">
                {people.map(person => {
                    const isFavorite = store.favorites.some(favorite => favorite.uid === person.uid);
                    return (
                        <div className="card" key={person.uid}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                                className="card-img-top-characteres"
                                alt={`Imagen de ${person.name}`}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg"; 
                                }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{person.name}</h5>
                                <p className="card-text">
                                    <strong>Gender:</strong> {person.gender}
                                </p>
                                <p className="card-text">
                                    <strong>Hair Color:</strong> {person.hair_color}
                                </p>
                                <p className="card-text">
                                    <strong>Eyes Color:</strong> {person.eye_color}
                                </p>
                                <div className="btnfooter">
                                    <Link to={`/person/detalles/${person.uid}`} type="button" className="btn btn-outline-primary">
                                        Learn More!
                                    </Link>
                                    <button 
                                        type="button" 
                                        className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-warning'}`} 
                                        onClick={() => handleClick(people)}
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

export default Characters;
