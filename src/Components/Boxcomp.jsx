import React from "react";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

const Boxcomp = ({text, value,img,onClick}) => {

      const {Theme} = useContext(ThemeContext)

  return (
    <div onClick={onClick} className={`flex gap-2 text-center ${Theme==="dark"?"bg-gray-800 text-amber-50 border-gray-500 ":"bg-white-100 text-black"} text-xl flex p-10 border-1 rounded-2xl`}>
          <div className="bg-blue-100 text-blue-600 place-content-center p-4 rounded-xl">
            {img}
          </div>
        <div>
          <h2 className="font-bold text-2xl">{value}</h2>
          <p className={`text-sm ${Theme==="dark"? " text-gray-400 text-balance": "text-black"}`}>{text}</p>
        </div>
    </div>
  );
};

export default Boxcomp;