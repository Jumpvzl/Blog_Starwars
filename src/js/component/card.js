import React from "react";
import { Link } from "react-router-dom";

const Card = ({ people }) => { // Recibe las personas como prop
    return (
        <div className="overflow-x-scroll">
            {people.map(person => (
                <div className="card" style={{ width: "22rem" }} key={person.uid}>
                    <img
                        src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-500x281.jpg"
                        className="card-img-top"
                        alt={`Imagen de ${person.name}`}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">
                            
                        </p>
                        <p className="card-text">
                            <strong>Gender:</strong>
                        </p>
                        <Link to={`/person/${person.uid}`} className="btn btn-primary">
                            Go somewhere
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
