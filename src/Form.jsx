import React, { useState } from 'react'
import './Form.css'
const Form = (props) => {
  const [focused,setFocused]=useState(false)
  const {label,onChange,id,errorMessage,...inputProps}=props


  const handleFocus=(e)=>{
setFocused(true)
  }

  return (
    <div className='form'>
        <label htmlFor="">{label}</label>
           <input type="text" {...inputProps} onChange={onChange}
           onBlur={handleFocus}
           onFocus={()=>{
            inputProps.name === "confirmPassword" && setFocused(true)}}
           focused={focused.toString()}
           />
          <span>{errorMessage}</span>
    </div>
  )
}

export default Form
