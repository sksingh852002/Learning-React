import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sksingh852002')
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //   }  )
    // },[])
    return(
        <div className="bg-gray-600 text-3xl text-white text-center m-4 p-4 ">Github followers of {data.name} :{data.followers}
        <img src={data.avatar_url} alt="GitPicture" width={300} /> 
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sksingh852002')
    return response.json()
    
}