import React, { useState } from 'react'
import "./Home.css";



const Home = () => {

  const[contact,setContact] = useState({
    name: "",
    email: "",
    mobile: "",
    city: ""
  });

  const handleInput = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setContact({...contact, [name]: value});
  }
  const handleSumbit = async(e) =>{
    e.preventDefault();
    console.log(contact);
    const response = await fetch(`http://localhost:5000/`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });
    if(response.ok){
      setContact({name: "",
        email: "",
        mobile: "",
        city: ""})
    }
    console.log(response);
  }

  return (
    <>
    <div className="background-container-home"></div>
    <div >
      <h1 className="title-text">Consultation,<br/>Design,<br/>& Marketing</h1>
       <div className="contact-form-container">
      <h2>Get a Free<br/> Consultation</h2>
      <form className="contact-form" onSubmit={handleSumbit}>
        <input type="text" name='name' placeholder="Full Name" required value={contact.name} onChange={handleInput} />
        <input type="email" name='email' placeholder="Enter Email Address" required value={contact.email} onChange={handleInput} />
        <input type="tel" name='mobile' placeholder="Mobile Number" required value={contact.mobile} onChange={handleInput} />
        <input type="text" name='city' placeholder="Area, City" required value={contact.city} onChange={handleInput} />
        <button type="submit">Get Quick Quote</button>
      </form>
    </div> 
    
    </div>

    </>
  )
}

export default Home