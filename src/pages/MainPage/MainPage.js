import React from 'react'
import Favorite from '../../components/Favorite/Favorite';
import  Search from '../../components/Search/Search';
import "./MainPage.css"

const MainPage = () => {
  return (
    <div className='container_main_page'>
      <Search />
      <Favorite />
    </div>
  )
}

export default MainPage;