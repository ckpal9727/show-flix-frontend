import React from 'react'
import { Link, Outlet } from 'react-router-dom'



export const Layout = () => {
    const linkStyle = {
        color:"black" ,
        'text-decoration':"none"
      };
  return (
    <div>
        <nav>
            <ul className='navbar'>
              
                <li>
                    <button class='btn-bar'><Link style={linkStyle} to='/user'>User</Link></button>
                </li>
                <li>
                   <button class='btn-bar'> <Link style={linkStyle} to='/movie'>Movie</Link></button>
                </li>
               
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
