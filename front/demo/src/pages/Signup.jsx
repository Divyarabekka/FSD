import React, { useState } from 'react'
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';

function Signup() {
    const [username,setUsername]=useState("");
    const [email, setEmail]= useState("");
    const[password,setPassword]=useState("");
    const [err, setErr]=useState("");
    const navigate = useNavigate()

    const  handlesignup= async()=>{
        const payload={
            username,
            email,
            password }

                const res= await fetch(`http://localhost:8090/api/user/signup`,{
                method:"POST",
                body: JSON.stringify(payload),
                headers:{ "content-type": "application/json"}}) 
        
                const data=await res.json();
                if(data.token){
                    localStorage.setItem("token",data.token);
                    navigate("/");
                }
                else{
                    setErr(data.err);
                }
            };
  return (
    <Base title={""}>
        <TextField
  label="username"
  value={username} 
  onChange={(e) => setUsername(e.target.value)}
  sx={{ m: 2 }}
  type="text"
  disabled={false}
></TextField><br></br>

    <TextField
  label="email"
  value={email} 
  onChange={(e) => setEmail(e.target.value)}
  sx={{ m: 2 }}
  type="email"
  disabled={false}
></TextField><br></br>

<TextField
  label="password"
  value={password} 
  onChange={(e) => setPassword(e.target.value)}
  sx={{ m: 2 }}
  type="password"
  disabled={false}
></TextField><br></br>
<br></br>

    <Button type='submit' variant="contained"
     onClick={handlesignup}>Signup</Button><br></br><br></br>
      <a href='https://64e07f17d46b3e2f2fea9517--luxury-eclair-be55d5.netlify.app/'class="badge badge-info">More</a>

{err ? <Typography color={"danger"}>{err}</Typography>:""}
    </Base>
  )
}

export default Signup