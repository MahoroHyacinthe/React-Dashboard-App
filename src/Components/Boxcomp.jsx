import React from "react";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

const Boxcomp = ({text, value,img}) => {

      const {Theme} = useContext(ThemeContext)

  return (
    <div className={`text-center ${Theme==="dark"?"bg-gray-800 text-amber-50 border-gray-500 ":"bg-white-100 text-black"} text-xl flex p-10 border-1 rounded-2xl`}>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h2 className=" font-bold">{value}</h2>
        <p className={`text-sm ${Theme==="dark"? " text-gray-900 text-balance": "text-black"}`}>{text}</p>
      </div>
    </div>
  );
};

export default Boxcomp;