import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { loginSchema } from '../Schema/LoginSchema'
import '../css/Register.css'

const initialValue = {
  email: '',
  password: ''
}

export const Login = () => {

  const navigate = useNavigate();
  
  
  const { errors, handleBlur, handleChange, handleSubmit, values, touched } = useFormik({
    initialValues: initialValue,
    validationSchema: loginSchema,
   
    onSubmit: async (values, action) => {
      const { email, password } = values
      console.log("onsubmit");
      const response = await fetch('https://show-flix.onrender.com/login', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email, password
        })
      })
      console.log("in response");

      const data = await response.json()
      if (data) {
        navigate("/user");
        // console.log(data)
      }else{
        console.log("Not login");
      }

      // console.log(data);
      console.log(values)
      action.resetForm();
      console.log(data);
    }

  })
 

 
  return (
    <div>
    
      <h1>Login</h1>
      
      <div className='container-register'>
        <form onSubmit={handleSubmit}>

          <div class="form-content">
          <div><span> Email:</span></div><div>
            <input type="text" value={values.email} id="email" name="email" onChange={handleChange} onBlur={handleBlur} />
            
            {errors.email && touched.email ? (<><p className='error'>{errors.email}</p></>) : null}
            </div>
          </div>

          <div class="form-content">
          <div><span> Password:</span></div><div>
            <input type="text" value={values.password} id="password" name="password" onChange={handleChange} onBlur={handleBlur} />
            {errors.password && touched.password ? (<><p className='error'>{errors.password}</p></>) : null}
            </div>
          </div>
          <div>
            <div className='Register'> <input type="submit" value="Login" /></div>
          </div>
        </form>
      </div>

    </div>
  )
}
