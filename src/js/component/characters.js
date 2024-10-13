import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";

const Characters = () => {
    const { store, actions } = useContext(Context);
    const personajes = store.people


    if (!personajes || personajes.length === 0) return <p>No hay personajes disponibles.</p>;

    const isFavorite = (character) => { 
        return store.favorites.some((favorito) => favorito.uid == character.uid && favorito.type == character.type)
    };
    
    const handlerClick = (character) => {
        if (isFavorite(character)){
            actions.removeFavorite(character)
        }
        else {
            actions.addFavorite(character)
        }
    };


    return (
        <div className="overflow-x-scroll">
            <div className="d-flex">
                {personajes.map(person => {
                    const favoriteClass = isFavorite({"uid": person.uid, "type": "personajes"}) ? 'btn-danger' : 'btn-outline-warning';
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
                                        className={`btn ${favoriteClass}`} 
                                        onClick={() => handlerClick({"name": person.name, "uid": person.uid, "type": "personajes"})}
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
