
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Components/input";

const Login = () =>{

    const navigate = useNavigate()

    const handleTab=()=>{
        navigate('/')
    }

    return (
        <>
            <div className="h-screen grid justify-center bg-gray-900 text-gray-50 py-20 ">
                <div className="bg-gray-800 p-10 h-fit rounded-2xl font-bold text-xl">
                    <div className="text-center">
                        <Link to="/">
                        <h1 className="text-center">Welcome to Ihuza </h1>
                        </Link>
                    </div>    
                    <div className="pb-4">
                        <Input
                            label="Username: "
                            name="text"
                            type="text"
                            className="bg-gray-200 rounded text-black p-2"
                            onChange ="onChange"
                                                />
                        <Input
                            label="Password: "
                            name="text"
                            type="text"
                            className="bg-gray-200 rounded  text-black p-2 "
                            onChange ="onChange"
                                                />
                    </div>
                    <div className=" flex place-content-center pt-2">
                       <button onClick={handleTab} className="bg-blue-600 rounded px-30 p-2">Login</button>
                    </div>
                    <div className="pt-5">
                        Don't Have Account?, <a className="text-blue-800" href="">Register</a>
                    </div>
                </div>
            </div>    
        </>
    )

}

export default Login