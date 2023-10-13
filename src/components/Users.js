import { useEffect, useState } from 'react';
import './User.css';
import axios from 'axios';

const URL =  'https://random-data-api.com/api/v2/users'

export default function Users() {      // tee jokin js funktio ja  css:ää, että näyttää hyvälle ja tee gittiin proj tälle
  const [first_name,setFirst_name] = useState('')
  const [gender,setGender] = useState('')
  const [username,setUsername] = useState('')

useEffect(() => {    
 axios.get(URL)
  .then ((response)=>{
    setFirst_name (response.data.first_name)
    setGender (response.data.gender)
    setUsername (response.data.username)
 }).catch((error)=>{
    alert(error)
 })
  }, [])
  
  let button = document.querySelector("button");
  button.addEventListener("click", changeMessage);

  function changeMessage() {
    button.textContent = "Request sent"
  }

return (
<div id= "container-fluid">
    <h2> Userpersons </h2>
        <p>First name: {first_name}</p>
        <p>Gender: {gender}</p>
        <p>Username: {username}</p>
    <div id= "container">
       <select name = "Contact">
            <option value = "email"> email</option>
            <option value = "Linkedin"> Linkedin</option>
            <option value = "facetime"> Facetime</option>        
        </select>
        <div><button> Contact </button></div>
    </div>
</div>  
) 
}