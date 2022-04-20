import React, {useState} from 'react'




const TextCounter = () => {


 const [values, setValues] = useState(100);
 
 function handleChange(e){

 const {value, name} = e.target;

 var len = value.length;
 
   if(values > 0){
    setValues(100 - len);
   }

}

function handleDelete(e){


     
    if(values < 100){
        setValues(values + 1);
      }
        

}



return(

<div className="container">

   <div className="row justify-content-center">
   {(values) <= 0 ? <div  className='col-lg-8 col-md-8 col-8 alert bg-warning'> You have reached the character limit </div>: null}
      <div className="col-lg-8 col-md-8 col-8">

          <textarea className='form-control' name="body"  onKeyDown={handleDelete} onChange={handleChange}></textarea>
          <p>{ values >= 0 ? values : 0 } remaining</p>
      </div>
   </div>
</div>

)


}


export default TextCounter;