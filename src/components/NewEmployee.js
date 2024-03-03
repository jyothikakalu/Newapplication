import React from 'react'
import { useState } from 'react';
function NewEmployee() {
    let [form,setForm]=useState({
        userName:"",
        email:"",
        mobile:"",
        designation:"",
        gender:"",
        course:"",
        image:""
    })
    let handleChange = (event) => {
        let { name, value } = event.target;
        setForm(prevState => ({   
        ...prevState,
        [name]: value
        }));
      

    };
        
    const submitHandler = (event) => {
        event.preventDefault()
        // console.log(form)
        if (form.userName === "" || form.email === "" || form.mobile === "" ) {
            alert("All fields must be filled")
        }
        if(isNaN(form.mobile)){
            alert("mobile  should be number")

        }
    
        else{
            console.log(form)
            localStorage.setItem("newEmploy",JSON.stringify(form))
        }
        
        
        

    };


  return (
    <>
    <form onSubmit={submitHandler}>
        <label>Name</label>
        <input type="text"  name="userName"  onChange={handleChange}></input><br/><br/>
        <label>Email</label>
        <input type="text"  name="email" onChange={handleChange}></input><br/><br/>
        <label>Mobile</label>
        <input type="text"  name="mobile" onChange={handleChange}></input><br/><br/>
        Designation<select >
            <option name="designation" value="HR" onChange={handleChange}>HR</option>
            <option  name="designation" value="Manager" onChange={handleChange}>Manager</option>
            <option  name="designation" value="Sales" onChange={handleChange} >Sales</option>
        </select><br/><br/>
        Gender<br></br><label for="Male">Male</label>
        <input type="radio" id="Male" name="gender" value="Male" onChange={handleChange}></input>
        <label for="Female">Female</label>
        <input type="radio" id="Female" name="gender" value="Female" onChange={handleChange}></input><br/><br/>
        Course<br></br><label  >MCA</label>
        <input type="checkbox" name="course" value="MCA" onChange={handleChange} ></input>
        <label >BCA</label>
        <input type="checkbox" name="course" value="BCA" onChange={handleChange} ></input>
        <label >BSC</label>
        <input type="checkbox" name="BSC" value="BSC" onChange={handleChange}></input><br/><br/>
        <input type="file" name="image" accept='.jpg, .jpeg, .png'onChange={handleChange} ></input>
        <button>Submit</button>
    </form>
    </>
  )
}

export default NewEmployee
