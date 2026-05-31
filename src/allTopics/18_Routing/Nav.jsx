import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <header style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"20px",
    }}>
        <div style={{fontWeight:"700"}}>Browser router example </div>
        <nav style={{display:"flex",gap:"30px"}}>
            <Link to='/'>Home</Link>
            <Link to="Signup">Signup</Link>
        </nav>
    </header>
  )
}

export default Nav