import React, {useEffect, useState} from "react"

const Login = () => {
    
    const styling={
        margin:"10px"  
      }
        
      const RowStyling = {
         paddingTop: "180px",
       }
   
    const initialData = {username:"", email:"", password:""}
    const [formData, setFormData] = useState(initialData)
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [signed, setSigned] = useState("");
      
   const handleChange = (e) => {

    const {name, value} = e.target;
    setFormData({...formData, [name]: value})

   }

   const handleSubmit = (e)=>{
    
    e.preventDefault();


    setErrors(validate(formData))
     setSubmitted(true)

   }
  
    useEffect(()=>{
      
        if(Object.keys(errors).length === 0 && submitted){
          
             setSigned('You have been logged in')
           
        }
       
    }, [errors])
    

   const validate = (values) => {
      
    const dataError = {}

     if(!values.username){
          dataError.username ="Username is required";
    
     }else if(values.username.length < 4){

        dataError.username ="Username must be more than 4 characters";
     }
     if(!values.email){
        dataError.email ="Email is required";
     }
     if(!values.password){
        dataError.password ="password is required";
     }else if(values.password.length < 5){
          
        dataError.password ="Your password must be more than 5";

     }

     return dataError;

   }

return(
 <div  className="col-md-8 col-8 col-lg-8">
          <h2 className="text-center text-white">{signed}</h2>
       <input type="text" name="username" className="form-control" style={styling} onChange={handleChange}  placeholder='username'/>
        <p>{errors.username}</p>
       <input type="email" name="email" className="form-control"  style={styling} onChange={handleChange}  placeholder='Email'/>
       <p>{errors.email}</p>
       <input type="password" name="password" className="form-control"  style={styling} onChange={handleChange}  placeholder='password'/>
       <p>{errors.password}</p>
       <input type="submit" value="submit"  style={styling} onClick={handleSubmit} className="btn btn-primary"/>
</div>
)


}

export default Login;