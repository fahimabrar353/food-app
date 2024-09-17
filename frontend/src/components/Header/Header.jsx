
import React, { useState, useEffect } from 'react';
import './Header.css';
import menuImage from '../../assets/header/header_image_02.jpg';



const Header = () => {
  const words = ['Order', 'Have', 'Enjoy'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change word every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [words.length]);
    return (
        <div className='header'>
           <div className='header-contents'>
            <h1>{words[currentWordIndex]}</h1>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
           </div>
           <div className='header-images'>
             <img className='img' src={menuImage} alt="Image in Box 2"/>
           </div>
        </div>
    )
}

export default Header


