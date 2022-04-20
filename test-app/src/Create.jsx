import React, {useState} from "react"


const Create = (props) => {

 const [contact, setContact] = useState({name:"", mobile:""});

 
 const handleChange = (e) =>{

            
         const {name, value} = e.target;

         setContact({...contact, [name]:value })

    
}

 const handleClick = (e) => {
    
      e.preventDefault();
     props.onAdd(contact);
   

    



 }

 


 

return(

  <div className="container">
     <div className="row justify-content-center">
        <div className="col-lg-6 col-md-6 col-7 input-div">
        <h4 className="text-center">Add new contact</h4>

        
          <p> <input type="text" name="name" required onChange={handleChange}  placeholder="Full name" autofocus="autofocus"/></p>
           
       
          <p><input type="text" name="mobile" required  onChange={handleChange} placeholder="Mobile number"/></p>

           <button className="btn btn-primary round-0" style={{marginTop:"4px"}} onClick={handleClick}>
               Add
           </button>
           
       </div>  
     </div> 
   </div>





   )



}

export default Create;