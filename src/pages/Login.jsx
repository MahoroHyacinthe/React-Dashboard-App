import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () =>{

    const navigate = useNavigate()

    const handleTab=()=>{
        navigate('/')
    }

    return (
        <>
            <div className="h-screen grid justify-center ">
                <div className=" grid">
                    <div className="">
                        <Link to="/">
                        <h1>Welcome to Ihuza </h1>
                        </Link>
                        <button onClick={handleTab} className="border">next</button>


                        <label className="border-2" >
                            Username<input type="text" />
                        </label>
                        <label className="border-2" >
                            Username<input type="text" />
                        </label>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login