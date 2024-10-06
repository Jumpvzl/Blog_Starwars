import React from "react";
import { Link } from "react-router-dom";

const Characters = ({ people }) => {
    if (!people || people.length === 0) return <p>No hay personajes disponibles.</p>; // Manejo si no hay personas

    return (
        <div className="overflow-x-scroll">
            <div className="d-flex">
                {people.map(person => (
                    <div className="card" key={person.uid}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                            className="card-img-top"
                            alt={`Imagen de ${person.name}`}
                            onError={(e) => {
                                e.target.onerror = null; // Para evitar bucles en caso de error
                                e.target.src = "https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg"; // Imagen por defecto
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
								<button to={`/person/${person.uid}`} type="button" className="btn btn-outline-primary">
									Learn More!
								</button>
								<button type="button" className="btn btn-outline-warning">
									☆
								</button>
							</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Characters;
