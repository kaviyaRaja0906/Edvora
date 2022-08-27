import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Products from "./Products";
import Orders from "./Orders";
import Users from "./Users";
import ReactPaginate from "react-paginate";

function App(){
    return(
        <div>
        <Router>
              <div>
                <Routes>
                  <Route exact path='/'element={<Products />}  />
                  <Route exact path='/Orders' element={<Orders />}  />
                  <Route exact path='/Users' element={<Users />}  />
                </Routes>
              </div>
            </Router>
        </div>
    )
}

export default App;