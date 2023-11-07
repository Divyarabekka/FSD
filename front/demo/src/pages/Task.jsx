import React ,{ useEffect}from 'react'
import Base from '../Base/Base'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Task() {
  const navigate=useNavigate("/");
  useEffect(()=>{
    if(!localStorage.getItem("token")){
       navigate("/login", {replace:true}) 
    }})
  return (
    <Base title={"Task"}>

    <Box sx={{ width: '150%' }}>
      <Stack spacing={4}>
        <Item><p><h3>A.Divya</h3></p>
        <h4>(B49 WD3 Tamil)</h4>
        <h5>-JavaScript - Day -1: Introduction to Browser</h5>
        <div class="ml-4 mr-2 d-flex align-self-end justify-content-end">
        <div class="marktag mx-1 px-3 rounded"><b>Mark :10</b></div></div>
        </Item>
        <Item>
        <p><h3>A.Divya</h3></p>
        <h4>(B49 WD3 Tamil)</h4>
        <h5>-JavaScript - Day -2: Datatypes</h5>
        <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
        <div class="marktag mx-1 px-3 rounded"><b>Mark :8</b></div></div>
        </Item>

        <Item>
        <p><h3>A.Divya</h3></p>
        <h4>(B49 WD3 Tamil)</h4>
        <h5>JavaScript - Day -3: JS array & objects</h5>
        <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
        <div class="marktag mx-1 px-3 rounded"><b>Mark :9</b></div></div>
        </Item>

        <Item>
        <p><h3>A.Divya</h3></p>
        <h4>(B49 WD3 Tamil)</h4>
        <h5>-JavaScript - Day -4: Functions</h5>
        <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
        <div class="marktag mx-1 px-3 rounded"><b>Mark :9</b></div></div>
        </Item>

        <Item>
        <p><h3>A.Divya</h3></p>
        <h4>(B49 WD3 Tamil)</h4>
        <h5>-JavaScript - Day -5: ES5 vs ES6</h5>
        <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
        <div class="marktag mx-1 px-3 rounded"><b>Mark :10</b></div></div>
        </Item>

        <Item>
        <p><h3>A.Divya</h3></p>
        <h4>(B49 WD3 Tamil)</h4>
        <h5>-JavaScript - Day -6: OOP in JS</h5>
        <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
        <div class="marktag mx-1 px-3 rounded"><b>Mark :7</b></div></div>
        </Item>

        <Item>
        <p><h3>A.Divya</h3></p>
        <h4>(B49 WD3 Tamil)</h4>
        <h5>-JavaScript - Day -7: Array methods</h5>
        <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
        <div class="marktag mx-1 px-3 rounded"><b>Mark :8</b></div></div>
        </Item>
      </Stack>
    </Box></Base>
  )
}

export default Task