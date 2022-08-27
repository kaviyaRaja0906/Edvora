import React,{ useEffect,useState } from "react";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Products(){

const [products,setProducts] = useState([]);


const fetchProducts = () =>{
    axios
    .get(' https://assessment.api.vweb.app/products')
    .then((res) =>{
      console.log(res.data);
      setProducts(res.data);
    })
    .catch((err) =>{
      console.log(err);
    });
}

useEffect(() =>{
    fetchProducts();
},[]);

return(
    <div>
    <Navbar />
     <div className="products">
     {products.map((product) => (
       <div className="product-card" key={product.id}>
       <h3 className="product-title">{product.name}</h3>
       <h4>${product.selling_price}</h4>
       <h6>Only {product.stock} items left</h6>
       </div>
     ))}
    </div>
    <Footer />
</div>
)
}

export default Products;