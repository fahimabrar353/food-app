import React from 'react'
import './Navbar.css'
import  assets  from '../../assets/Ahar24.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets} alt="" />
    </div>
  )
}

export default Navbar
