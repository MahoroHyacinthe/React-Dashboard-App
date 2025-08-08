
const Alldetails = ({userprofile,username,email,role,availability,lastused,edit,del}) =>{


    return (
        <>
        <div className="ml-5 mr-5 px-3.5 text-gray-400 border-b-1 border-gray-700 text-sm p-2">
            <div className=" grid grid-cols-5 items-center"> 
                <div className="flex gap-3 justify-start place-items center">
                    <div className=" place-content-center text-4xl">
                        {userprofile}
                    </div>
                    <div className="grid gap-0">
                        <div>{username}</div>
                        <div>{email}</div>
                    </div> 
                </div>
                <div className="flex">
                    <div className="bg-gray-600 rounded-2xl">
                         {role}
                    </div>
                </div>
                <div className="flex">
                    <div className=" bg-green-800 rounded-2xl text-xs pl-2 pr-2 pb-1 text-zinc-200 ">
                    {availability}
                    </div>
                </div>
                <div>
                    {lastused}
                </div>
                <div className="flex gap-5">
                    <div className="text-blue-600">{edit}</div>
                    <div className="text-red-500">{del}</div>
                </div>
            </div> 

        </div>
        </>
    )
}

export default Alldetails