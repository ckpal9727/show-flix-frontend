import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import { useParams, useNavigate } from 'react-router-dom';




export const Profile = () => {



  
  const param = useParams();

  const [name, setName] = useState("user Name");
  const [lname, setLname] = useState("user Name");
  const [email, setEmail] = useState("user Email");
  const [mobile, setMobile] = useState("1234567890");
  
  const getUserProfile=async()=> {
    const userProfile = await fetch(`https://show-flix.onrender.com/profile/${param.emailid}`)
    const userData = await userProfile.json();
    
    if (userData.message === "okk") {
      setEmail(userData.userProfile.u_email)
      setName(userData.userProfile.u_fname)
      setMobile(userData.userProfile.u_mobile)
      setLname(userData.userProfile.u_lname)
      console.log(name)
      
    }
  }
  

  
  function handleFname(e){
   setName(e.target.value)
  }
  function handleLname(e){
    setLname(e.target.value)
  }
  function handlEmail(e){
    setEmail(e.target.value)
   }
   function handleMobile(e){
     setMobile(e.target.value)
   }
  function handleBlur(e){
    console.log("handle blur")
  }

  //update profile
  const  updateProfile=async()=>{
    try {
      const response=await fetch(`https://show-flix.onrender.com/profile_update`,{
        method:'post',
        headers:{
          
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
         u_fname:name,u_lname:lname,u_mobile:mobile,u_email:email,
         
        })
      })
      const updated=await response.json();
      if(updated)
      {
        console.log(updated)
      }else{
        console.log("not updated");
      }
    } catch (error) {
      console.log(error)
    }
  }
 
  useEffect(() => {
    getUserProfile()

  }, [])

  return (
    <div>


      <div className="main-container">
        <div className="flip-box-inner">
          <div className="container">
            <div className="user-profile">
              <div className="user-profile-circle">
                <i className="fa-solid fa-user fa-3x"></i>
              </div>
            </div>
       
            <br/>
            <div>
              <input type='text' value={name}  onChange={(e)=>handleFname(e)} onBlur={(e)=>handleBlur(e)} />
              
              <input type='text' value={lname}  onChange={(e)=>handleLname(e)} onBlur={(e)=>handleBlur(e)} />
              
              <input type='text' value={email}  onChange={(e)=>handlEmail(e)} onBlur={(e)=>handleBlur(e)} />
              
              <input type='text' value={mobile}  onChange={(e)=>handleMobile(e)} onBlur={(e)=>handleBlur(e)} />
             
              <input type='button' value='Update' onClick={(e)=>{updateProfile(e)}} />

            </div>

          </div>
          <div className="profile-img"><img src="b.jpg" alt="" /></div>
        </div>
      </div>

    </div>
  )
}
