import React from 'react'
import { useState } from 'react';
import {useNavigate, Link } from 'react-router-dom';
function NewEmployee() {
    let navigate=useNavigate()
    let [form,setForm]=useState({
        userName:"",
        email:"",
        mobile:"",
        designation:"",
        gender:"",
       course:"",
        file:null,
        
    })
    let handleChange = (event) => {
        let { name, value  } = event.target;
        
        setForm(prevState => ({   
        ...prevState,
        [name]: value
        }));
      

    }
   let checkHandleChange=(event)=>{
   const[name,value,type,checked]=event.target
   const newValue = type === 'checkbox' ? checked : value;

   setForm({
    ...form,
    [name]: newValue,
  });
  

   }
    function handleFileChange(event){
        const file = event.target.files[0];
        const fileName = file.name;
        setForm({
          ...form,
          file: fileName,
        });
    }
       
    const submitHandler = (event) => {
        event.preventDefault()
        console.log(form)
    
        
        if (form.userName==="" || form.email==="" ||form.mobile==="") {
            alert("All fields must be filled")
            console.log("must be filled")
        }
        
        if(!Number(form.mobile)){
            alert("mobile  should be number")

        }
    
        else{
            console.log(form)
    let data =localStorage.setItem("newEmploye",JSON.stringify(form))
        navigate("/details")
            
        }
     

    };


  return (
    <>
     <div style={{ backgroundColor:"gray",height:"100vh"}}>
    <form onSubmit={submitHandler} style={{width:"30%",marginLeft:"25%",paddingTop:"5px",paddingLeft:"50px",backgroundColor:"white",border:"2px solid black"}}>
        
        <h1>New Employee</h1>
        <label>Name</label>
        <input type="text"  name="userName"  onChange={handleChange}></input><br/><br/>
        <label>Email</label>
        <input type="text"  name="email" onChange={handleChange}></input><br/><br/>
        <label>Mobile</label>
        <input type="text"  name="mobile" onChange={handleChange}></input><br/><br/>
        Designation<select name="designation" value={form.designation}  onChange={handleChange} >
            <option name="designation" value="HR" onChange={handleChange}>HR</option>
            <option  name="designation" value="Manager" onChange={handleChange}>Manager</option>
            <option  name="designation" value="Sales" onChange={handleChange} >Sales</option>
        </select><br/><br/>
        Gender<br></br><label for="Male">Male</label>
        <input type="radio" id="Male" name="gender" value="Male" onChange={handleChange}></input>
        <label for="Female">Female</label>
        <input type="radio" id="Female" name="gender" value="Female" onChange={handleChange}></input><br/><br/>
        Course<br></br><label  >MCA</label>
        <input type="radio"  name="course" value="MCA"    onChange={handleChange} ></input>
        <label >BCA</label>
        <input type="radio" name="course"value="BCA"   onChange={handleChange} ></input>
        <label >BSC</label>
        <input type="radio" name="course" value="BSC"  onChange={handleChange}></input><br/><br/>
        <input type="file" name="file" accept='.jpg, .jpeg, .png' onChange={handleFileChange} ></input>
        <br/><br/>
     <button style={{backgroundColor:"green",marginLeft:"20px",marginBottom:"10px"}} > Submit</button> 

    </form>
    </div>
    </>
  )
}

export default NewEmployee
