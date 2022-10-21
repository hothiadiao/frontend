import React from "react";
import "../styles/footer.css"
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="f-container">
            <div className="f-row">
                <div className="f-col">
                <img src="/images/logo/logo.png" alt="" />
                <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, 
                    on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
                </div>
                <div className="f-col">
                    <h2>Liens rapides</h2>
                    <ul>
                        <li>
                            <NavLink  to="/">Acceuil</NavLink>
                        </li>
                        <li>
                            <NavLink  to="/shop">Boutique</NavLink>
                        </li>
                        <li>
                            <NavLink  to="/about">A propos de</NavLink>
                        </li>
                        <li>
                            <NavLink  to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="f-col">
                <h2>Catégories</h2>
                    <ul>
                        <li>
                            <NavLink  to="/">Hommes</NavLink>
                        </li>
                        <li>
                            <NavLink  to="/">Femmes</NavLink>
                        </li>
                        <li>
                            <NavLink  to="/">Enfants</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="f-col">
                    <h2>Restez en contact avec nous</h2>
                <div className="socials">
                   <a href="/"><img src='/images/socials/facebook.png' alt='' /> </a>
                    <a href="/"><img src='/images/socials/instagram.png' alt='' /> </a>
                    <a href="/"><img src='/images/socials/twitter.png' alt='' /> </a>
                    <a href="/"><img src='/images/socials/youtube.png' alt='' /> </a>   
                </div>
                </div>
            </div>
            <div className="f-copyrow">
                <p>&copy; 2022.Tous droits réservés. Propulsé par Hothia DIAO.</p>
            </div>
        </div>
    );
}
export default Footer