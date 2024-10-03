import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Chat from '../Chatbot/Chatbot'



const Home = () => {
 
    const [category,setCategory] = useState("All")
  
  return (
    <>
      <Header/>
      <Chat/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
    </>
  )
}

export default Home
