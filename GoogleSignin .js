import React from 'react'
import {useEffect,useState} from 'react';
import jwt_decode from 'jwt-decode';
import { Button,Avatar } from '@mui/material';

//public/index.html <script src="https://accounts.google.com/gsi/client" async defer></script>
//google develoepr console 
const CLIENT_ID = "346088311658-06tk8hrbj0nbvv53vfthiq4m7jgvtnra.apps.googleusercontent.com";
function Signin() {
    const [user,setUser] = useState({});
    const [open,setOpen]=useState(false);

    function handleCallbackResponse(response){
        console.log("response : ",response,"Encode JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
        setOpen(true)
    }

function handleSignOut(event){
    setUser({});
    setOpen(false)
    document.getElementById("signInDiv").hidden = false;
}

useEffect(()=>{
  //global google;
  google.accounts.id.initialize({
    client_id:CLIENT_ID,
    callback: handleCallbackResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme:"Outline",size:"large"}
  )
},[]);


  return (
    <div className='Signin'>
        <div id='signInDiv'></div>
  
    <div>
      {
        open&&user.name!=''?(
            <div style={{display:'flex'}}>
              <div><Avatar alt="Remy Sharp" src={user.picture} /></div>
              <div><h3 style={{paddingLeft:"25px",paddingBottom:"15px"}}>{user.name}</h3></div>
              <div><h3 style={{paddingLeft:"25px",paddingBottom:"15px"}}>{user.email}</h3></div>
           
            </div>
        ):""
      }
     <div>
     {
        open?( <Button onClick ={ (e) => handleSignOut(e)}>Signout</Button>):""
     }
     </div>
    </div>
    
    </div> 
  )
}

export default Signin