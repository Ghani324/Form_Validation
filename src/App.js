import Form from "./Form";
import './App.css'
import { useState } from "react";

function App() {
 const [values,setValues]=useState({
  userame:"",
  email:"",
  birthday:"",
  password:"",
  confirmPassword:""
 })
 const inputs=[
  {
    id:1,
    name:"username",
    placeholder:"Username",
    errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
    label:"Username",
    type:"text",
    required: true,
    pattern:`^[A-Za-z0-9]{3,16}$`
  },
  {
    id:2,
    name:"email",
    placeholder:"Email",
    errorMessage:"It should be a valid email address!",
    label:"Email",
    type:"email",
    required: true,
  },
  {
    id:3,
    name:"birthday",
    placeholder:"Birthday",
    label:"Birthday",
    type:"date",
  },
  {
    id:4,
    name:"password",
    placeholder:"Password",
    errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    label:"Password",
    type:"text",
    required: true,
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
  },
  {
    id:5,
    name:"confirmPassword",
    placeholder:"Confirm Password",
    errorMessage:"Passwords don't match!",
    label:"Confirm Password",
    type:"text",
    required: true,
    pattern: values.password,
  },
 
 ]
  const handleSubmit=(e)=>{
    e.preventDefault()
    
  }
  const onChange=(e)=>{
    const {name,value}=e.target
    setValues({...values,[name]:value})
  }
  return (
    <div className="app">
    <form onSubmit={handleSubmit}>
      <h1>Registration</h1>
   {inputs.map((input)=>(
    <Form key={input.id} {...input} value={values[inputs.name]}
    onChange={onChange}
    />
  ))}
     <button>Submit</button>
    </form>
    </div>
  );
}

export default App;
