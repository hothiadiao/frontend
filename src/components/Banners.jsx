import {  faArrowRightArrowLeft, faCheck, faPhoneVolume, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/banners.css"

const Banners = () => {
    return (
        <div className="b-container">
            <div className="b-row">
           <div className="b-col">
                <FontAwesomeIcon icon={faCheck} />
                <span>Produit de qualité</span>
           </div>
           <div className="b-col">
           <FontAwesomeIcon icon={faTruckFast} />
                <span>Livraison gratuite</span>

           </div>
           <div className="b-col">
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                <span>Retour sous 14 jours</span>
           </div>
           <div className="b-col">
           <FontAwesomeIcon icon={faPhoneVolume} />
                <span>Assistance 24h/24 et 7j/7</span>
           </div>
        </div>
        </div>
    )
}

export default Banners