import React, { useContext, useState } from "react"

const Usercomp = ({icon,type,num}) =>{

    return(

        <div className=" p-2 flex justify-between ">
            <div className="flex gap-2">
                <img className="rounded-4xl" src={icon} alt="" />
                <h1>{type}</h1>
            </div>
            <div className=" rounded-xl p-2 bg-gray-600">
                {num}
            </div>
        </div>
    )
}
export default Usercomp