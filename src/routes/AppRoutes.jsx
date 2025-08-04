

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const AppRoutes =()=>{
    return(

        <Routes>
            <Route path = "/" element ={<Dashboard/>}/>
            <Route path = "/Login" element ={<Login/>}/>
        </Routes>
    )   
}

export default AppRoutes