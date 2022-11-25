import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/User.css'

const User = () => {

  const [result, setResult] = useState();
  const [deleteuser,setDeleteUser]=useState(false)
  const navigate=useNavigate();
  const fetchData = async () => {
    try {
      const response = await fetch('/get_all_user');
      const data = await response.json();
      console.log(data);
      setResult(data);
    } catch (error) {

    }

  }

  //to get the profile page of a user
  const getProfile=async(email)=>{
    console.log("clicked get prodile")
    // console.log(email)
    navigate(`/profile/${email}`)
  }

  const deleteUser=async(e)=>{
    try {
      const response=await fetch(`/delete_user/${e}`,{
        method:'delete',
        headers:{          
          'Content-type': 'application/json'
        },
      })
      const updated=await response.json();
      if(updated)
      {
        setDeleteUser(true)
        fetchData()
        console.log("user deleted")
      }else{
        console.log("not deleted");
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData();
    
  }, [])



  return (
    <div className='user-container'>
      <table border='0'>
        <th>User</th>
        <th>Role</th>
        <th>Action</th>
        {result ? result.map((e, index) => {
          return (
            <tr key={e._id}>
              <td> <p className='data'>{e.u_email}</p></td>
              <td>  <p className='data'>{e.u_isAdmin ? 'true' : 'false'}</p></td>
              <td className='action'><input type='submit' value='Update' onClick={(i)=>getProfile(e.u_email)} /><input type='submit' value='Delete' onClick={(i)=>{deleteUser(e._id)}} /></td>
            </tr>
          )
        }) : "Loading...."}
      </table>


    </div>
  )
}

export default User