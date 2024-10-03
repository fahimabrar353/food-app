import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {

  


  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h2>COMPANY</h2>
            <ul>
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutUs">About us</Link></li>
                <li><Link to="/privacypolicy"> Privacy policy</Link></li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+8801744820559
                </li>
                <li>syed.bayes@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Ahar24.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
