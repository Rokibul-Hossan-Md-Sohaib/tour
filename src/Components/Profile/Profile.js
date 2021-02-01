import React, { useState } from "react";
import { useForm } from "react-hook-form";


const Profile = () => {
  const [user, setUser] = useState({name: "", email:" ",file:"",gender:""});
  
  const {name, email, file,gender}= user;
  const { register, handleSubmit } = useForm();
  const handleChange=(e)=>{
      const fileName=e.target.name;
    setUser({...user ,[e.target.name]:e.target.value})
  }
  
  const handleFile=(e)=>{
    setUser({file:e.target.value,email,name})
    console.log(setUser)
  }
 const onSubmit=(e)=>{
     console.log (user)
     
     
 }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
            
            <input
             type="file"
             ref={register}
             name="picture"
             id="file"
              value={file}
              onChange={handleChange}
        />
        <div>
        <select name="gender" value ={gender} ref={register}  onChange={handleChange}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
        
      </select>
        </div>
      
           
        </div>
        <div>
            
            <input

             type="text"
             
             name="name"
             id="name"
              value={name}
              onChange={handleChange}
        />
           
        </div>
        <div>
            <button type ="submit">Register</button>
        </div>
      </form>
    </div>
  );
};
export default Profile;