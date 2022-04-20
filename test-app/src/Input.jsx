import React, {useState} from "react"



const  Input = () =>{

    const [answer, setAnswer] = useState();
    const [number1, setNumber] = useState();
    const [number2, setNumber2] = useState();
    const [number3, setNumber3] = useState();

    const handleChange =(e)=>{
        e.preventDefault();
        const {name, value} = e.target;


    if(name === "number1"){

        setNumber(value)

    }else if(name ==="number2"){

        setNumber2(value)

    }else if(name === "number3"){

        setNumber3(value)

    }

    }


    const handleClick =(e)=>{

        e.preventDefault();

        var ans =  (number1 * number2) / number3;
      
        setAnswer(ans);
    }
    
    
    const styling={
        margin:"10px"  
      }





    return(
      <div>

       <h1 style={{textAlign:"center"}}> Your answer: {answer}</h1>                 
      <input type="number" style={styling} onChange={handleChange} className="form-control" placeholder='number 1' name="number1"/>
      <input type="number"  style={styling}  onChange={handleChange} className="form-control" placeholder='number 2' name="number2"/>
      <input type="number"  style={styling} onChange={handleChange} className="form-control" placeholder='number 3' name="number3"/>
      <input type="submit"   style={styling} onClick={handleClick} className='btn btn-primary' value="Calculate"/>
    
    
     </div>
   
   )




}


export default Input;

