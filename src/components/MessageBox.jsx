import React from "react"; 
//import '../styles/messagebox.css' 
import Navbar from "./Navbar";
import Footer from "./Footer";



const MessageBox = (props) => {
    return (
        <> 
        <Navbar />
        {/*
        <div className="message-container">
            <h2 className="message"> {props.children} </h2>
        </div> 
    */}
    <alert variant= {props.variant || 'info'}>{props.childreen}</alert>;
        <Footer />
        </>
    )
}
export default MessageBox