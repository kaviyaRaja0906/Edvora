import React ,{useEffect,useState,useRef} from "react";
import axios from "axios";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Orders(){

    const[orders,setOrders] = useState([]);

    const getOrders = () =>{
        axios
        .get(`https://assessment.api.vweb.app/orders`)
        .then((res) =>{
          console.log(res.data);
          setOrders(res.data);
          setUserId(res.data[1].user_id);
          console.log(res.data[1].user_id);
        })
        .catch((err) =>{
          console.log(err);
        });
    };

    useEffect(() =>{
        getOrders();
    },[]);
    return(
        <div>
        <Navbar />
        <div className="container">
        <table>
          <tr>
            <th>Order Id</th>
            <th>Order date</th>
            <th>Customer Id</th>
            <th>Product Id</th>
            <th>Quantity</th>
          </tr>
          {orders.map((order,index) =>(
          <tr key={order.order_id}>
            <td>#{order.order_id}</td>
            <td>{order.order_date}</td>
            <td>{order.user_id}</td>
            <td>{order.product_id}</td>
            <td>{order.quantity}</td>
          </tr>
          ))}
        </table>
        </div>
        <ReactPaginate 
          previousLabel={'previous'}
          nextLabel={'next'}
          pageCount={50}
          breakLabel={'...'}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
          />
        <Footer />
        </div>
    )
}

export default Orders;