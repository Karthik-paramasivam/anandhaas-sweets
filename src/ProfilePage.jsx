import React from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    FirstName: yup.string().required().matches(/^[a-zA-Z]{3,20}$/
    ,"❌ FirstName should be atleast 3-20 alphabets only"),
    LastName: yup.string().required().matches(/^[a-zA-Z]{1,20}$/
    ,"❌ LastName should be atleast 1-20 alphabets only"),
    DOB: yup.string().required(),
    Gender: yup.string().required(),
    Email:yup.string().required().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "❌ Please enter a valid Email-Id"),
    Phone:yup.string().required().matches(/^[0-9]{10}$/, "❌ Please enter a valid Phone Number"),
    Password:yup.string().required().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})[A-Za-z0-9!@#$%^&*]+$/, "❌ Password should contain atleast one uppercase letters, lowercase letters, digits, special characters, and a minimum length of 8 characters."),
    ConformPassword:yup.string().required().oneOf([yup.ref("Password")], "❌ Password does not match")
  })
  
  const errorBorderStyle = {
    border: '2px solid red'
  };
  

export default function App() {
  const today = new Date().toISOString().substr(0, 10); // Get today's date in YYYY-MM-DD format
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })


  const onSubmit = (data) => {
    alert("✅SignUp Form Submitted Successfully.");
    console.log(data);
  }

  return (
    <div className="profile">
    <form className="form border border-3 border-dark h6 profile" onSubmit={handleSubmit(onSubmit)}>
        <p className="h3 text-center text-danger p-2">SignUp Form</p>
        <label htmlFor="firstName">First Name</label>
      <input id="FirstName" {...register("FirstName")} style={errors.FirstName ? errorBorderStyle : {}}
 />
     <p className="app-color">{errors.FirstName?.message}</p>

      <label htmlFor="LastName">LastName</label>
      <input id="LastName" {...register("LastName")} style={errors.LastName ? errorBorderStyle : {}} />
     <p className="app-color">{errors.LastName?.message}</p>

      <label htmlFor="DOB">Date Of Birth</label>
      <input
          id="DOB"
          type="date"
          {...register("DOB")}
          style={errors.DOB ? errorBorderStyle : {}}
          max={today} // Set max attribute to today's date
        />

     <p className="app-color">{errors.DOB?.message}</p>

      <label htmlFor="Gender">Gender</label>
      <select id="Gender"{...register("Gender", {required: true})} style={errors.Gender ? errorBorderStyle : {}}>
      <option value="" selected disabled>Select any one</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Other">Other</option>
      </select>
     <p className="app-color">{errors.Gender?.message}</p>

      <label htmlFor="Email">Email-Id</label>
       <input id="Email" type="text" {...register("Email")} style={errors.Email ? errorBorderStyle : {}}/> 
     <p className="app-color">{errors.Email?.message}</p>

      <label htmlFor="Phone number">Phone number</label>
       <input id="Phone" type="text" {...register("Phone")} style={errors.Phone ? errorBorderStyle : {}}/> 
     <p className="app-color">{errors.Phone?.message}</p>

      <label htmlFor="Password">Password</label>
       <input id="Password" type="password" {...register("Password")} style={errors.Password ? errorBorderStyle : {}}/> 
     <p className="app-color">{errors.Password?.message}</p>

      <label htmlFor="Conform Password">Conform Password</label>
       <input id="ConformPassword" type="password" {...register("ConformPassword")} style={errors.ConformPassword ? errorBorderStyle : {}}/> 
     <p className="app-color">{errors.ConformPassword?.message}</p>
      <button id="submit" class="btn btn-primary w-50 mx-auto fw-bolder" type="submit" value="SignUp">SignUp</button>
    </form>
    </div>
  )
}