import axios from 'axios'
import React, {useContext, useState, useEffect } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import { Store } from '../Store';
import '../styles/addCategorie.css'

const AddCategorie = () => {
  //for change image
 // const [selectedImage, setSelectedImage] = useState(''); //default is empty

 const navigate = useNavigate();
 const { search } = useLocation();
 const redirectInUrl = new URLSearchParams(search).get('redirect');
 const redirect = redirectInUrl ? redirectInUrl : '/';


 const [titre, setTitre] = useState('');
 const [image, setImage] = useState('');

 
 //For close PopUp
  const [style, setStyle] = useState("main-container");
  
  const changeStyle = () => {
  
    setStyle("main-containerOne");
  };


 
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;
  
    const submitHandler = async (e) => {
    e.preventDefault();
      const { data } = await axios.post('/api/products/signup', {
        titre,
        image,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/');
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

    return (
    <div className={style}>
          <div className='addCategorie-container'>
        <div className="signin-row">
            <div className="signin-col">
                <form onSubmit={submitHandler}>
                    <h2>Entrer la catégorie</h2>
                    <div className="form-group">
                        <label htmlFor="titre">Titre</label>
                        <input type="text" id='titre' required onChange={(e) => setTitre(e.target.value)}/>
                      </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input type="id" id='image' required onChange={(e) => setImage(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <button type="submit">Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
         <button className='back'  onClick={changeStyle}>Fermer</button>
    </div>
   
    )
}

export default AddCategorie
