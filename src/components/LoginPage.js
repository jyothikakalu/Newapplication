import React, { useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom';




function LoginPage() {
    let navigate=useNavigate()
    let [FormData,setFormData]=useState({username:"",password:""})
    let handleChange = (event) => {
        let { name, value } = event.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));

    }
 
    const formSubmit = (event) => {
        event.preventDefault();
        console.log(FormData)

        let data=JSON.parse(localStorage.getItem("userRegisters"))
        if(FormData.username===data.username && FormData.password===data.password)
        {
          navigate("/home")
        

        }
        else{
            alert("wrong mail or pasword")
        }

    };
  return (
    <div>
        <h3 style={{marginLeft:"500px",marginTop:"80px"}}>Login</h3>
      <form onSubmit={formSubmit} style={{fontWeight:"bold",backgroundColor:"grey",margin:"auto",height:"400px",width:"30%",marginTop:"60px",borderRadius:"3px",border:"2px solid black"}}>

        <div style={{paddingLeft:"100px"}}>

        <br/><br/>
        <label>UserName:</label><br/><br/>
         <input type="text" placeholder='Enter the username' name='username' required value={FormData.username} onChange={handleChange}/><br/><br/>

         {/* <input type="email" placeholder='Enter the email' name='email' required value={values} onChange={((e)=>setValues(e.target.value))} onClick={handleEditClick} ref={inputRef} readOnly={!isEditing} /><br/><br/> */}

        <label>Password:</label><br/><br/>
        <input type="password" placeholder='Enter the Password' name='password' value={FormData.password} onChange={handleChange}/><br/><br/>
        <button type='submit'style={{marginLeft:"50px"}} className='btn btn-primary'>Submit</button><br/><br/>

        <Link to="/signup" style={{marginLeft:"130px",color:"white"}} >Signup</Link>
        </div>

      </form>
    </div>
  )
}

export default LoginPage