import React from 'react'
import './Policy.css'

const Privacypolicy = () => {
  return (
    <div className='policy'>
    <h1>Privacy Policy</h1>
    <p>Last Updated: 15th October, 2024
    </p>
    <div className="container">
      <p>Ahar24 ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our website, or any services offered by Ahar24. By accessing or using our services, you agree to this policy.
      </p>
      <div className='container-items'>
      <h2>1. Information We Collect
      </h2>
      <p>We collect various types of information to provide and improve our services. The types of information we collect include:</p>
       <div className='items'>
        <h3>Personal Information:
        </h3>
        <p>Name, email address, phone number, delivery address, and payment details when you register or place an order.
        </p>
       </div>
       <div className='items'>
        <h3>Usage Data:
        </h3>
        <p>Information about your interactions with our website, including IP address, browser type, and operating system.
        </p>
       </div>
       <div className='items'>
       </div>
       <div className='items'> 
       <h3>Cookies:</h3>
        <p>We use cookies and similar tracking technologies to enhance user experience and monitor website usage.</p> 
       </div >
      </div>
      <div className='container-items'>
      <h2>2.How We Use Your Information
      </h2>
       <p>We use the information we collect for the following purposes:
       </p>
       <ul>
        <li>To process and deliver your food orders.
        </li>
        <li>To communicate with you regarding orders, promotions, and updates.</li> 
        <li>To improve our services and website.
        </li> 
        <li>To provide customer support and handle complaints or inquiries.
        </li> 
        <li>To detect and prevent fraud or unauthorized activity.
        </li>
       </ul>
   
      </div>
      <div className='container-items'>
      <h2>Data Security

      </h2>
      <p>We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure. We encourage you to protect your account by using strong passwords and limiting access to your devices.
      </p>
 
      </div>
    </div>
  </div>
  )
}

export default Privacypolicy