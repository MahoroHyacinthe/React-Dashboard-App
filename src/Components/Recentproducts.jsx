import { useContext } from 'react'
import ThemeContext from '../Contexts/ThemeContext.jsx'

const RecentProducts = ({name,type,date,status}) => {
    
    const {Theme} = useContext(ThemeContext)
    
    return (
        <div className={`p-4 rounded-xl w-xs ${Theme==="dark"?"bg-gray-800 border-1 border-gray-600 text-gray-400 ":"bg-white text-gray-800 border-1 border-gray-300 "}`}>
            <div className="flex justify-between">
                <h2 className={` font-bold ${Theme==="dark"?"text-white":"text-black"}`}>{name}</h2>
                <div className={` rounded-2xl px-2  ${Theme==="dark"?"bg-white text-green-800":"bg-green-800 text-white"}`}>{status}</div>
            </div>    
                <div>
                    {type}
                </div>
                <div>
                    {date}
                </div>
        </div>
    );
}
export default RecentProducts;