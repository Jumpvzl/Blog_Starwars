import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light mb-3 container-fluid">
            <div className="container d-flex align-items-center">
                <Link to="/">
                    <img
                        src="https://www.barullo.com/blog-disfraces/wp-content/uploads/2018/11/logo-star-wars-300x169.png"
                        alt="Starwars"
                        className="navbar-brand"
                        style={{ maxHeight: '50px', height: 'auto' }}
                    />
                </Link>
                <ul className="nav nav-pills ms-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                            Favorites <span className="badge text-bg-secondary">{store.favorites.length}</span>
                        </a>
                        <ul className="dropdown-menu">
                            {store.favorites.map(favorite => (
                                <li className="dropdown-item" key={`${favorite.uid}-${favorite.name}`}>
                                    {favorite.name}
                                    <button 
                                        className="btn btn-link" 
                                        onClick={() => actions.removeFavorite(favorite)}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
