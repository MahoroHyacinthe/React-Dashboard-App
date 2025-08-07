
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Components/input";
import { useState } from "react";


const Login = () =>{

        const [formData,setFormData] = useState({
            username:"",
            email:"",
            password:""
        })

        const [errors,setErrors] = useState({})

        const handleChange = (event)=>{
            console.log(event),
            setFormData((prev)=>({
                ...prev,[event.target.name]: event.target.value
            }))
            console.log(formData)
    }

          const handleSubmit =(event)=>{
            event.preventDefault()

            const formErrors ={}
          
            if(!formData.username.trim()){
                formErrors.username ="Username is Required"
            }
            if(!formData.email.includes("@")){
                formErrors.email = "Invalid Email Adress" 
            }
            if(formData.password.length <= 8){
                formErrors.password = "Password must be atleast 8 characters"
            }

            setErrors(formErrors)

            if(Object.keys(formErrors).length===0){
                
                localStorage.setItem("loggedUser",JSON.stringify(formData))
                
                handleTab()
                
            }
        }
        
                    
                    const navigate = useNavigate()
        
        
                    const handleTab=()=>{
                        navigate('/')
                    }

    return (

            <div className="h-screen grid justify-center bg-gray-900 text-gray-50 py-20 ">
                
                <form action="" onSubmit ={handleSubmit}>

                    <div className="bg-gray-800 p-10 h-fit rounded-2xl font-bold text-xl">
                        <div className="text-center">
                            <Link to="/">
                            <h1 className="text-center">Welcome to Ihuza </h1>
                            </Link>
                        </div>    
                        <div className="pb-4">
                            <Input
                                label="Username: "
                                name="username"
                                type="text"
                                className="bg-gray-200 rounded text-black p-2"
                                onChange ={handleChange}
                                                    />
                            {errors.username && (
                                <p className="text-xs font-light text-red-600">{errors.username}</p>
                            )}                        
                            <Input
                                label="Email:"
                                name="email"
                                type="Email"
                                className="bg-gray-200 rounded  text-black p-2 "
                                onChange={handleChange}
                                                    />
                            {errors.email && (
                                <p className="text-xs font-light text-red-600">{errors.email}</p>
                            )} 
                            <Input
                                label="Password:"
                                name="password"
                                type="Password"
                                className="bg-gray-200 rounded  text-black p-2 "
                                onChange = {handleChange}
                                                    />
                             {errors.password && (
                                <p className="text-xs font-light text-red-600">{errors.password}</p>
                            )} 
                        </div>
                        <div className=" flex place-content-center pt-2">
                        <button type="submit" className="bg-blue-600 rounded px-30 p-2">Login</button>
                        </div>
                        <div className="pt-5">
                            Don't Have Account?, <a className="text-blue-800" href="">Register</a>
                        </div>
                    </div>

                </form>
            </div>       
    )
}
export default Login