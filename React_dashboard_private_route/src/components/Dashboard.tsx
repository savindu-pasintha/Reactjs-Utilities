import React from 'react';
import { useNavigate } from 'react-router-dom';

const  Dashboard=() =>{
  const navigate = useNavigate()

	//ADMIN
	//USER

	const login1 = () => {
		localStorage.setItem("user", JSON.stringify({role: "USER"}))
		navigate("/dashboard")
	}
  const login2 = () => {
		localStorage.setItem("user", JSON.stringify({role: "ADMIN"}))
		navigate("/dashboard")
	}
  return <div 
	  style={{
          width: '100%',
		  height:"100%",
          color: 'white',
		  background:'black',
		  
        }}>
			<div 
			style={{textAlign: 'center',
		     position:'relative',
		  top:'40vh'}} >
		<h1 className='text-center'>Welcome to the main Dashboard</h1>
		<button onClick={login1}> Login user</button>
		<button onClick={login2}> Login ADMIN</button>
		</div>
    
  </div>;
}

export default Dashboard;
