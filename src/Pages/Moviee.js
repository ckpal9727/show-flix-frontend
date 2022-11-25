import React,{useEffect, useState} from 'react'
import { json, useNavigate } from 'react-router-dom';
const Moviee = () => {
  const [result,setResult]=useState();

  const naviget=useNavigate();

 
  
  const getMovies=async()=>{
    try {
      const response=await fetch(`/get_all_movie`)
      const updated=await response.json();
      if(updated)
      {
       setResult(updated.comedyMovie)
      }else{
        console.log("not found");
      }
    } catch (error) {
      console.log(error)
    }
  }
  

  //get single movie
  const getSingleMovie=async(id)=>{
    naviget(`/single_movie/${id}`);
  }
  //deleting movie

  const deleteMovie=async(id)=>{
    try {
        const response=await fetch(`/delete_movie`,{
          method:'delete',
          headers:{          
            'Content-type': 'application/json'
          },
          body:JSON.stringify({
            id
          })
        })
        const updated=await response.json();
        if(updated)
        {
         
          getMovies()
          console.log("movie deleted")
        }else{
          console.log("not deleted");
        }
      } catch (error) {
        console.log(error)
      }
}
  // console.log(result[0].m_name)

  useEffect(() => {
    getMovies()
  }, [])
  
  return (
    <div>
       <table border='0'>
        <th>Name</th>
        <th>Type</th>
        <th>Link</th>
        <th>Rating</th>
        <th>Release Date</th>
      {result?result.map((e,index)=>{
        return(
          <tr key={e._id}>
              <td> <p className='data'>{e.m_name}</p></td>
              <td>  <p className='data'>{e.m_type}</p></td>
              <td>  <p className='data'>{e.m_link}</p></td>
              <td>  <p className='data'>{e.m_rating}</p></td>
              <td>  <p className='data'>{e.m_releaseDate}</p></td>
              <td className='action'><input type='submit' value='Update' onClick={(i)=>getSingleMovie(e._id)} /><input type='submit' value='Delete' onClick={(i)=>{deleteMovie(e._id)}} /></td>
            </tr>
          
        )
      }):"Loading"}
      </table>
    </div>
  )
}

export default Moviee