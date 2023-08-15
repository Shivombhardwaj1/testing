



import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = () => {
      if (username && password) {
       
           // Navigate to the homepage
           navigate('/Homepage');
        
      } else {
        alert("PLEASE FILL USERNAME AND PASSWORD.");
    }
    };

    return (
    <div className="min-w-[1000px] max-w-[1500px]">
        <div className='flex justify-center items-center pt-5'>
        <img className="text:black flex pl-[45px]"src={"../images/amazon1.png"}alt="" />

        </div>

<div className=' flex justify-center items-center border-gray-800'>
    <div className='w-96 p-6 shadow-lg bg-white rounded-md border-gray-400'>
   <h1 className=' text-3xl'>Sign in</h1>
    <form >
     <div className='mt-3'>
        <label for="username" className='block text-base mb-2 font-semibold'>Email or mobile phone number</label>
        <input type="text"   value={username} id="username" className='border w-full text-base px-2x py-1 focus:outline-none focus:ring-0 focus:border-gray-600 border-gray-400'         onChange={(e) => setUsername(e.target.value)}  ></input>
       

        <label for="password" className='block text-base mb-2 font-semibold'>Password</label>
        
        <input type="text" id="passowrd"  value={password} className='border w-full text-base px-2x py-1 focus:outline-none focus:ring-0 focus:border-gray-600 border-gray-400'         onChange={(e) => setPassword(e.target.value)}></input>
     </div>
     <div>
        <input type="checkbox"></input>
        <label>Remember me</label>
     </div>
     <div><a href='' class="text-indigo-800 font-semibold" >Forgot Password?</a></div>
     <div className='mt-5 w-[45px] '>
        <button type="submit" value="login" onClick={handleLogin} className='border-indigo-700 bg-amazonclone-orange text-black rounded-md w-[335px] pb-1 pt-1'>Continue</button>

     </div>
     <p style={{ color: 'red' }}>{errorMessage}</p>

        <div className='flex  text-xs pt-2'>Message and Data rates may apply.
</div>
</form>
    </div>
  
</div>

<div className='flex justify-center items-center text-xs pt-8'>
© 1996-2023, Amazon.com, Inc. or its affiliates
</div>
    </div>
  )
}

export default Login