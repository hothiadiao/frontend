import axios from 'axios'
import React, {useContext, useState, useEffect } from 'react'
import {  useLocation, useNavigate, useParams } from 'react-router-dom'
import { Store } from '../Store';
import { toast } from 'react-toastify';
import '../styles/addProduct.css'

const AddProduct = () => {
  //for change image
 // const [selectedImage, setSelectedImage] = useState(''); //default is empty

 const params = useParams();
 const {id:productId}=params;
 const navigate = useNavigate();
 const { search } = useLocation();
 const redirectInUrl = new URLSearchParams(search).get('redirect');
 const redirect = redirectInUrl ? redirectInUrl : '/';


 const [title, setTitle] = useState('');
 const [slug, setSlug] = useState('');
 const [desc, setDesc] = useState('');
 const [category, setCategory] = useState(''); 
 const [image1, setImage1] = useState(''); 
 const [image2, setImage2] = useState(''); 
 const [image3, setImage3] = useState(''); 
 const [countInStock, setCountInStock] = useState('');
 const [price, setPrice] = useState('');  
 //For close PopUp
  const [style, setStyle] = useState("main-container");
  
  const changeStyle = () => {
  
    setStyle("main-containerOne");
  };


 
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;
  
    const submitHandler = async (e) => {
    e.preventDefault();
      const { data } = await axios.post('/api/products/${productId}', {
        _id:productId,
        title,
        slug,
        desc,
        category,
        image1,
        image2,
        image3,
        countInStock,
        price
      });
      toast.success('produit crée');
      navigate(`/admin/product/${data.product._id}`);
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

    return (
    <div className={style}>
          <div className='addProduct-container'>
        <div className="signin-row">
            <div className="signin-col">
                <form onSubmit={submitHandler}>
                    <h2>Saisir le produit</h2>
                    <div className="form-group">
                        <label htmlFor="title">Nom</label>
                        <input  type="text" id='title' required onChange={(e) => setTitle(e.target.value)}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="slug">Slug</label>
                        <input  type="text" id='slug' required onChange={(e) => setSlug(e.target.value)}/>
                      </div>
                    <div className="form-group">
                        <label htmlFor="desc">Description</label>
                        <input type="desc" id='desc' required onChange={(e) => setDesc(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="categorie">Categorie</label>
                        <select>
                        <option value="categorie" id='categorie'  required onChange={(e) => setCategory(e.target.value)}>MEN</option>
                        <option value="categorie">WOMEN</option>
                        <option value="categorie">KIDS</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image1">image 1</label>
                        <input type="image1" id='image1' required onChange={(e) => setImage1(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image2">image 2</label>
                        <input type="image2" id='image2' required onChange={(e) => setImage2(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image3">image 3</label>
                        <input type="image3" id='image3' required onChange={(e) => setImage3(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="compterEnStock">Compter en stock</label>
                        <input type="compterEnStock" id='compterEnStock' required onChange={(e) => setCountInStock(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="prix">Prix</label>
                        <input type="prix" id='prix' required onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" onClick={submitHandler}>Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
         <button className='back'  onClick={changeStyle}>Fermer</button>
    </div>
   
    )
}

export default AddProduct
