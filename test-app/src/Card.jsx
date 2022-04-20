import React from "react"


const Card = (props) => {


  function handleDelete(e){

   e.preventDefault();
   props.onDelete(props.id)
   console.log(props.key)
  }
 
    return(
        <div className="card col-lg-7 col-md-7 testimonial-card mt-2 mb-3" style={{margin:"10px"}}>
        <div className="card-up aqua-gradient"></div>
        <div className="avatar mx-auto white">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg" class="rounded-circle img-fluid"
            alt="woman avatar"/>
         </div>
         <div className="card-body text-center">
          <h4 className="card-title font-weight-bold text-dark ">{props.name}</h4>
          <hr/>
          <h5 className="text-dark">{props.mobile}</h5>
          <p><i className="fas fa-quote-left"></i></p>
           <buttton className="btn btn-danger" onClick={handleDelete}>delete</buttton>
        </div>
      </div>
    )
 
}


export default Card;