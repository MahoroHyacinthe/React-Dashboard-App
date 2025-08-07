

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import { Users } from "../pages/Users";
import { Products } from "../pages/products";



const AppRoutes =()=>{
    return(

        <Routes>
            <Route path = "/" element ={<Dashboard/>}/>
            <Route path = "/Login" element ={<Login/>}/>
            <Route path = "/Products" element ={<Products/>}/>
            <Route path = "/Users" element ={<Users/>}/>

        </Routes>
    )   
}

export default AppRoutes