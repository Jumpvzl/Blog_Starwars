import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Detalles_characters = () => {
    const { uid } = useParams();
    const { store, actions } = useContext(Context);
    const [person, setPerson] = useState(null);

    useEffect(() => {
        const foundPerson = store.people.find(p => p.uid === uid);
        if (foundPerson) {
            setPerson(foundPerson);
        } else {
            actions.getPeople();
        }
    }, [uid, store.people, actions]);

    if (!person) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="container justify-content-center">
            <div className="d-flex">
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                    alt="Starwars"
                    className="imagen-detalles"
                />
                <div className="person">
                    <h1>{person.name}</h1>
                    <p>{person.description}</p>
                </div>
            </div>
            <>
            </>
            <div className="linea-roja"></div>
            <div className="d-flex justify-content-center">
                <div className="caracteristica-name">
                    <strong>Name:</strong> <div>{person.name}</div>
                </div>
                <div className="caracteristica-birth">
                    <strong>Birth Year:</strong> <div>{person.birth_year}</div>
                </div>
                <div className="caracteristica-gender">
                    <strong>Gender:</strong> <div>{person.gender}</div>
                </div>
                <div className="caracteristica-height">
                    <strong>Height:</strong> <div>{person.height}</div>
                </div>
                <div className="caracteristica-skin">
                    <strong>Skin Color:</strong> <div>{person.skin_color}</div>
                </div>
                <div className="caracteristica-eyes">
                    <strong>Eye Color:</strong> <div>{person.eye_color}</div>
                </div>
            </div>
        </div>
    );
};

export default Detalles_characters;
