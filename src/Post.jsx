import React, { useEffect } from 'react'
import { API_URL } from './constants/constants';
import axios from 'axios';

export default function Post() {
    useEffect(()=>{

    const token = localStorage.getItem("token");

    axios.post(API_URL + "/authorize", { token })
    .then((response)=>{
        if(response.data.status!==true){
            location.href = "/login";
        }
        
    }).catch((error)=>{
        location.href = "/login";
        console.log(error);
        
    });
         
     }, [])

  return (
    <div className=' text-red-500 text-center mt-10 font-bold text-2xl'>This is Post page here.</div>
  )
}
