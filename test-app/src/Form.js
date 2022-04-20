import React, {useState} from "react";
import container from "./Container"


const Form = ()  =>{
 


const [theName, setName] = useState("");

const [number, setNumber] = useState("");
  



function handleChange(e){

  e.preventDefault();

  const {name, value} = e.target;


    if(name === 'name'){ 
       setName(value);
       console.log(value);

    }else if(name === 'number'){
        setNumber(value);
        console.log(value);
    }





}
 

function handleSubmit(e){

   
    e.preventDefault();


    container.push(
        {
           name:theName,
           number:number
        }
    );
   
    console.log(container);

}   

return(
<div className="justify-content-center">
   <input type="text" className="" name="name" onChange={handleChange} placeholder="name"/>
   <input type="text" className="" name="number"  onChange={handleChange} placeholder="number" />
   <input type="submit" className="btn btn-primary" value="submit" id="submit" onClick={handleSubmit}/>
  
</div>





);

}




export default Form;