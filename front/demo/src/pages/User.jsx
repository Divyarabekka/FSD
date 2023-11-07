import React from 'react'
import Base from '../Base/Base'

function User() {
  return (
   
<Base title={" "}>
<div className='rank'>
   
<h1 style={{color:"black", textAlign:"center"}}>LEADER BOARD</h1>
   <table class="table table-secondary" style={{width:"2500px", height:"800px"}}>
  <thead>
    <tr>
      <th scope="col">Rank</th>
      <th scope="col">Name</th>
      <th scope="col">Batch</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Akbhar</td>
      <td>Batch 3</td>
      <td>89%</td>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Maran</td>
      <td>Batch 3</td>
      <td>86%</td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Jos</td>
      <td>Batch 3</td>
      <td>83%</td>
    </tr>
    <tr>
    <th scope="row">4</th>
      <td>Anusha</td>
      <td>Batch 3</td>
      <td>80%</td>
    </tr>
    <tr>
    <th scope="row">5</th>
      <td>Deepika</td>
      <td>Batch 3</td>
      <td>79%</td>
    </tr>
    <tr>
    <th scope="row">6</th>
      <td>Kalai</td>
      <td>Batch 3</td>
      <td>75%</td>
    </tr>
    <tr>
    <th scope="row">7</th>
      <td>Saran</td>
      <td>Batch 3</td>
      <td>72%</td>
    </tr>
    <tr>
    <th scope="row">8</th>
      <td>Dinesh</td>
      <td>Batch 3</td>
      <td>69%</td>
    </tr>
    <tr>
    <th scope="row">9</th>
      <td>Shuja</td>
      <td>Batch 3</td>
      <td>65%</td>
    </tr>
    <tr>
    <th scope="row">10</th>
      <td>Vimal</td>
      <td>Batch 3</td>
      <td>60%</td>
    </tr>
  </tbody>
</table>  </div>         
      </Base>                

   
  )
}

export default User