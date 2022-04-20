import React, {useState, useEffect} from "react"
import container from './Container';

const Quiz = () => {

//const [countDown, setCountDown] = useState(60); 
const [finalResult, setFinalResult] = useState(false);    
const [score, setScore] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [counter, setCounter] = useState(80);
const [congrats, setCongrats] = useState(false);

useEffect(() => {
  counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
}, [counter]);


useEffect(() => {
    counter == 0 && setFinalResult(true);
  }, [counter]);


//const [value, setValues] = useState({});

 
function optionClicked(value){
if(value){
 
   setScore(score + 1) 
   
}

if(currentQuestion + 1 < container.length){

  setCurrentQuestion(currentQuestion + 1)


} 
else{


    setFinalResult(true)

    console.log("working");
    
    
}


var audio = new Audio('../button.mp3');
audio.play();



}

/*---------------*/
/*if(finalResult && score > 6){
   
 
   
  var audio = new Audio('../win.mp3');
  audio.play();
  
   
   
}else if(finalResult && score < 6){

  var audio = new Audio('../fail.mp3');
  audio.play();

}*/




/*useEffect(()=>{



     setInterval(()=>{

        setCountDown(countDown - 1);
    
     }, 2000)


})*/
   
 




function startAgain(){
 
   
    setCounter(60)
   setCurrentQuestion(0)
   setScore(0)
   setFinalResult(false)

}

return(
      
  <div className='row justify-content-center'> 

      {finalResult ? ( 
          <div  className="col-lg-7 col-md-7 quiz-div"> 
               {score > 6 ?  <h1 className="text-center">Congratulations</h1> :  <h1 className="text-center">Try harder next time !</h1>}
                 
   <h1 className="text-center">You scored {score} out of  {container.length} ({ (score/container.length) * 100} %)</h1>

<button className="btn btn-success" style={{margin:"0 auto", display:"block"}} onClick={startAgain}> Play again</button>


               
               
                                
     

        </div> ) : (
   
       
         
          <div className="col-lg-7 col-md-7 quiz-div ">
                   
                  <h3 className="text-danger text-center">You have {counter}  seconds left</h3> 
            
          <h1 className="text-center">Question {currentQuestion + 1} out of  {container.length}</h1>
          
           <div><h4 className="text-center"> {container[currentQuestion].question}</h4></div>
         
                 {container[currentQuestion].options.map(option =>{

                return(

                      <p className="option" onClick={() => optionClicked(option.isCorrect)}>{option.text}</p>

                    )

              })}
               
         </div>
   

         
          )}
            <div className="col-lg-7 col-md-7 text-dark text-center py-5"><b>Developed by <a href="tel:07013950375"> Sadiq Garba  </a></b></div>
     </div>
     
  
            

   )
}


export default Quiz;