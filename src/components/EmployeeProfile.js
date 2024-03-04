import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeProfile = () => {
  const [formData, setFormData] = useState(null);
  let navigate=useNavigate()

  useEffect(() => {
    // Retrieve form data from local storage
    const storedFormData = JSON.parse(localStorage.getItem('newEmploye'));
    console.log(storedFormData)
    setFormData(storedFormData)
    console.log(storedFormData)
  
  }, []);
 const updateHandler=(Data)=>{
    console.log(Data)
    navigate("/update", {state: { Data }})

  }
  const handleDelete = (Data) =>{
   localStorage.removeItem("newEmploye")
   navigate("/delete")
    
  }
  const NavHandler=()=>{
    navigate("/newemploy")
  }

  const renderTable = () => {
    return (
      <table border="2px" border-collapse= 'collapse'>
        <thead >
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>gender</th>
            <th>Designation</th>
            <th>Course</th>
            <th>update</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
        <tr>
          {console.log(formData)}
          <td>{formData.userName}</td>
          <td>{formData.email}</td>
          <td>{formData.mobile}</td>
          <td>{formData.gender}</td>
          <td>{formData.designation}</td>
          <td>{formData.course}</td>
          {/* <td>
            {formData.file && (
              <img
                src={URL.createObjectURL(formData.file)}
                alt="Uploaded File"
              ></img>
            )}
          </td> */}
        
          <td><button onClick={()=>updateHandler(formData)}>Update</button></td>
          <td><button onClick={handleDelete}>Delete</button></td>
           
        </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h2>Form Data</h2>
      {formData ? renderTable() : <p>No form data available.<button onClick={NavHandler}>CreateNew</button></p>}
    </div>
  );
};

export default EmployeeProfile ;
