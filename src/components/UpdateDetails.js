import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

function UpdateDetails() {
  const [value, setValue] = useState({ userName: '', email: '', mobile: '' });
  const location = useLocation();
  const { Data } = location.state;
  const navigate=useNavigate()

  useEffect(() => {
    setValue(Data);
  }, [Data]); 

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setValue(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  function submitHandler(){
    console.log(value)
    let data =localStorage.setItem("newEmploye",JSON.stringify(value))
 
      navigate("/details")
  }

  return (
    
    <div style={{ backgroundColor:"gray",height:"100vh"}}>
      <table border="2px" borderCollapse='collapse' style={{marginLeft:"10%",marginRight:"29%" ,backgroundColor:"white"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Desgination</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" name="userName" value={value.userName} onChange={changeHandler} /></td>
            <td><input type="text" name="email" value={value.email} onChange={changeHandler} /></td>
            <td><input type="text" name="mobile" value={value.mobile} onChange={changeHandler} /></td>
            <td><input type="text" name='gender' value={value.gender} onChange={changeHandler}></input></td>
            <td><input type="text" name='designation' value={value.designation} onChange={changeHandler}></input></td>
            <td><input type="text" name='course' value={value.course} onChange={changeHandler}></input></td>
            <button onClick={submitHandler}>Update</button>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UpdateDetails;
