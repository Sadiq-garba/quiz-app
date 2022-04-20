import React, {useState} from "react"

const Quadratic =()=>{
      
    
 const initialValues = {a:0, b:0, c:0}
 const [values, setValues] = useState(initialValues);
 const [answer, setAnswers] = useState();
 const [ans, setAns] = useState();

 function handleChange(e){

    const {name, value} = e.target
    
  

   setValues({...values, [name]:value })
    
    
   


 }


 
 function handleClick(e){

 e.preventDefault()

  //var proc = (-1 * values.b )  + Number(Math.sqrt( ( values.b * values.b) - (4 * values.a * values.c)))/ 2 * values.a;

  //var proc2 = (-1 * values.b ) - Number(Math.sqrt( ( values.b * values.b) - (4 * values.a * values.c)))/ 2 * values.a;  
 // setAnswers(proc);
  //setAns(proc2);
      
 }

return(

    <div className="container">

    <div className="row justify-content-center">

     <div className="col-lg-7 col-md-7 col-7">
     
               <h2>{answer}, {ans}</h2>
    </div>
              
       <div className="col-lg-7 col-md-7 col-7">
         <input type="number" name="a"  placeholder="A" className="form-control" onChange={handleChange}/>
         
       </div>
      
       <div className="col-lg-7 col-md-7 col-7">
         <input type="number" name="b"  placeholder="B" className="form-control"  onChange={handleChange} />
         
       </div>
       <div className="col-lg-7 col-md-7 col-7">
         <input type="number" name="c" placeholder="C" className="form-control"  onChange={handleChange} />
         
       </div>

       <div className="col-lg-7 col-md-7 col-7">
         <input type="submit" value="Calculate" className="btn btn-primary"  onClick={handleClick} />
         
       </div>
    </div>
 </div>





  )






}

export default Quadratic;