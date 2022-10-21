import React from 'react'
import '../styles/checkoutsteps.css'

const CheckoutSteps = (props) => {
  return (
    <div className="checkout-steps">
        <p className={props.step1 ? 'active' : ''}>S'identifier</p>
        <p className={props.step2 ? 'active' : ''}>Expédition</p>
        <p className={props.step3 ? 'active' : ''}>Paiement</p>
        <p className={props.step4 ? 'active' : ''}>Passer la commande</p>
    </div>
  )
}

export default CheckoutSteps