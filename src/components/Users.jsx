import React,{useEffect,useState} from "react";
import axios from "axios";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Users(){

    const[users,setUsers] = useState([]);

    const fetchUsers = () =>{
        axios
        .get(`https://assessment.api.vweb.app/users`)
        .then((res) =>{
            console.log(res.data);
            setUsers(res.data);
          })
          .catch((err) =>{
            console.log(err);
          });
    }
    useEffect(() =>{
        fetchUsers();
    },[]);
 return(
    <div>
        <Navbar />
        <div className="Container justify-content-center">
          <table>
            <tr>
                <th>Customer Id</th>
                <th>Customer Name</th>
            </tr>
            {users.map((user) =>(
            <tr>
                <td>{user.user_id}</td>
                <td>{user.name}</td>
            </tr>
            ))}
          </table>
        </div>
        <Footer />
    </div>
 )
}

export default Users;