import React, { useState } from 'react'
import Base from '../Base/Base'
import { Button, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail]= useState("");
    const[password,setPassword]=useState("");
    const [err, setErr]=useState("");
    const navigate = useNavigate()

    
    const  handleLogin= async()=>{
        const payload={
            email,
            password }

                const res= await fetch(`http://localhost:8090/api/user/login`,{
                method:"POST",
                body: JSON.stringify(payload),
                headers:{ "content-type": "application/json"}}) 
        
                const data=await res.json();
                if(data.token){
                    localStorage.setItem("token",data.token);
                    navigate("/");
                }
                else{
                    setErr("invalid authorize");
                }
            };
           

  return (
    <>
    <Base title={"Login"}>
    <TextField
  label="email"
  value={email} 
  onChange={(e) => setEmail(e.target.value)}
  sx={{ m: 2 }}
  type="email"
  disabled={false}
></TextField>

<TextField
  label="password"
  value={password} 
  onChange={(e) => setPassword(e.target.value)}
  sx={{ m: 2 }}
  type="password"
  disabled={false}
></TextField>
<br></br>


    <Button type='submit' variant="contained"
     onClick={handleLogin}>Login</Button><br></br><br></br>
     

{err ? <Typography color={"danger"}>{err}</Typography>:""}


    </Base>
    <img src="https://burst.shopifycdn.com/photos/finger-pointing-at-javascript-code.jpg?width=1000&format=pjpg&exif=0&iptc=0" class="img-class" alt=""
 style={{width: "900px", height:"250px", alignItems:"end"}}/><br></br>

 
    </>
  )
}

export default Login