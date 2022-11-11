import React from 'react'
import './styles.css'
import MyImage from './pointing.webp'
import logo from './404-logo-removebg-preview.png'
export const Notfound:React.FC=()=> {
  return (
    <div className='flexbox-container'>
      {/* <div className='flexbox-item flexbox-item-1'>
        <p>div 1</p>
      </div> */}
      <div className='flexbox-item flexbox-item-2'>
        <img src={MyImage} className='image-size'/>
        <p>Looks its bit crazy over there. May be we should go back</p>
        <a href='#'>Go Back to Home Page</a>
      </div>
      <div className='flexbox-item flexbox-item-3'>
        <div className='inner-flex'>
        <img src={logo} className='logo-image'/>
        
        <p>Page Not Found</p>
        </div>
        
      </div>
     
    </div>
  )
}

