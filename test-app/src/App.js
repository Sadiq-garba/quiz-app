import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React,{useState, useEffect} from 'react'
import Main from './Main'
import Form from './Form'
import add, {substract, devide} from './Logic'
import Create from './Create';
import Card  from   './Card';
import Header from './Header';
import Footer from './Footer';
//import container from './Container';
import Quiz from './Qiuz';


// Put any other imports below so that CSS from your
// components takes precedence over default styles.



function App() {

/*const initialValues = { username:"", email:"", password:"" }
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] =  useState({});
const [isSubmit, setIsSubmit] =useState(false);



const handleChange = (e) => {
 
const {name, value} = e.target;
setFormValues({...formValues, [name]: value })
console.log(formValues);


} 


const handleSubmit = (e) => {

 e.preventDefault();

 setFormErrors(validate(formValues));

  setIsSubmit(true)
}

useEffect(()=>{
   console.log(formErrors);
  if(Object.keys(formErrors) === 0 && isSubmit){

     console.log(formValues);

  }


},[formErrors])

const validate = (values) =>{

  const errors = {}
  const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if(!values.username){

    errors.username ="Username is required"



  }
  if(!values.email){

    errors.email ="Email is required"



  }else if(!regex.test(values.email)){
     
    errors.email ="This is not a valid email"

  }
  if(!values.password){

    errors.password ="Password is required"



  }
    
  return errors;

}



const styling={
  margin:"10px"  
}
  
const RowStyling = {
   paddingTop: "180px",
    const [errors, setErrors] = useState({});
 }*/
  //const [errors, setErrors] = useState({});

 /*const [data, setData] = useState([]);

 function handleAdd(newContact){

     
    
    setData([...data, newContact])

 } 


const RowStyling = {
  paddingTop: "180px",
}
 
   function deleteAction(id){


   setData([...data.filter((val, key) =>{


    return key !== id;
     



   })])


   }*/

  /* function check(values){

    const error = {}
 
    if(!values.name){
       
     error.name = "Name is required";
 
 
    }
    if(!values.mobile){
       
     error.mobile = "Mobile number is required";
 
 
    }
 
    return error;
 
 
  }*/

  
/*const question = (contact) =>{

return <Quiz key={contact.id} id={contact.id} question={contact.question} option={contact.option} />;



}*/
  
      
  return(
    <div>
    <Header />
    <div className='container'>
      

      <Quiz />
       
       
     </div>
    </div>
   );
}

export default App;
