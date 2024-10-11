import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from './constants/constants';
import AlertError from './Alert/AlertError';
import AlertSucc from './Alert/AlertSucc';

export default function Register() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [formStatus, setFormStatus] = useState({status: false, message:""});

    const handleRegister = async()=>{
        setIsLoading(true);
        if(!fullName.length || !email.length || !password.length){
            setFormStatus({status: false, message: "All fields are required"})
        }else{
            setTimeout( async () => {
                const req = await axios.post(API_URL + '/register', {fullName,email,password});
                console.log(req.data);
        
                if(req.data.status === true){
                    setFormStatus({status: true, message: req.data.message});
                }else{
                    setFormStatus({status: false, message: req.data.message});
                }
                setIsLoading(false);
            }, 500);
        }
        
    }

  return (
    <>
         <div className=' h-screen flex justify-center items-center bg-slate-700'>
        <div className=" mx-auto bg-slate-800 p-4 rounded-md w-1/2 shadow-lg shadow-gray-700">
           <h2 className=' text-3xl font-bold text-center text-blue-700 py-6'>Register From</h2>
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">FullName</label>
            <input onChange={e => setFullName(e.target.value)} value={fullName} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your FullName" required />
        </div>
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
            <input onChange={e => setEmail(e.target.value)} value={email}  type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" required />
        </div>
        <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
            <input onChange={e => setPassword(e.target.value)} value={password}  type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Password' required />
        </div>
        <div className=" flex justify-between items-center mb-5">
            <div className='flex items-start'>
            <div className="flex items-center h-5">
            <input  id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <div><span className=' text-white mr-1'>Already hava an account</span> <Link to="/login" className=" text-blue-700 hover:underline">Login here</Link></div>
        </div>
        {formStatus?.status===false && formStatus?.message?.length? (<AlertError message={formStatus?.message}/>) : null}
        {formStatus?.status===true && formStatus?.message?.length? (<AlertSucc message={formStatus?.message}/>) : null}
        <button onClick={handleRegister} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{isLoading == true ? "Please wait..." : "Register Now"}</button>
        </div>
     </div> 
    </>
  )
}