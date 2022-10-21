import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {products} from '../data.js';//but for now -
import ProductShop from './ProductShop';
import ReactPaginate from "react-paginate";
import "../styles/productsshop.css";
//import { Input } from "antd";
//import FormItem from "antd/es/form/FormItem/index.js";
//import Modal from './Modal';
import AddProduct from "./AddProduct";
import AddCategorie from "./AddCategorie.jsx";



const ProductsShop =({item}) => {
    //for filter category and all products
    const [data, setData] = useState(products);
    // for category
    const [category, setCategory] = useState([]);
   //Ajouter des produits
   const [open, setOpen] = useState(false);

    
    //For paginate 
const [pageNumber, setPageNumber] = useState(0);
const productPerPage = 3;
const pagesVisited = pageNumber * productPerPage;

const displayProducts = data.slice(pagesVisited, pagesVisited + productPerPage).map((item) =>(
    <ProductShop item={item} key={item._id} />
))

const pageCount = Math.ceil(data.length / productPerPage);
const changePage = ({selected}) => {
    setPageNumber(selected);//if i click 
}
    //filter and all products
    const filterResult = (catItem) => {
        const result = products.filter((curDate) =>  {
            return curDate.category === catItem;
        });
        setData(result);
    }
    //for Show All category
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/category');
            setCategory(result.data);
        }
        fetchData();
    }, []);

return (
    <div className="shop-container">
        <button onClick={() => setOpen(true)} className="add-new" >Nouveau Produit </button>
        <button onClick={() => setOpen(true)} className="ajout-categorie" >Nouvelle categorie </button>
        {/* <Modal open={openModal} />*/}
        <div className="shop-row">
         <div className="shop-col">       
         <h2>Categories</h2> 
            <button className="shop-btn" onClick={() => setData(products)}>Toutes<FontAwesomeIcon icon={faChevronRight}/></button>
             {/*Show all category if exist */}
            {category.map((item) => (
                <button className="shop-btn" onClick={() => filterResult(item.title)}>{item.title}<FontAwesomeIcon icon={faChevronRight}/></button>
            ))}
        </div>
        <div className="shop-col">
            <div className="shop-products">
               {displayProducts}
            </div>
            <div className="shop-pagination">
            <ReactPaginate
            previousLabel={'<<'} //For previous
            nextLabel={'>>'} //For next
            pageCount={pageCount}//For page number
            onPageChange={changePage}//For selected page, current page
            containerClassName={"paginationBttns"} //class for stylenpm strn
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            />
            </div>
        </div>
        </div>
        {open && <AddProduct item={item} />}
        {open && <AddCategorie item={item} />}
    </div>
)
}
export default ProductsShop;