import React,{useState} from 'react';

import './Button.css';

const Button = props => {
// const[isValid,setIsValid]=useState(true)

// const clickHandler=()=>{
//   if(props.enteredValue.trim().length===0){
//     setIsValid(false)
//     return;
//   }else{
//     setIsValid(true)

//   }
// }
console.log(props.isValid)



  return (
    <button style={{background: !props.isValid ? 'green' : '#ac0e77'}}  type={props.type} className="button">
      {props.children}
    </button>
  );
};

export default Button;
