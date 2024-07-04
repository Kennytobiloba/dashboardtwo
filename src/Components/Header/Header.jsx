import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs'


const Header = ({ openSidebartoggle ,  opensidebar}) => {
  return (
    <header className='header' >
      <div className='menu-icons' >
        <BsJustify className='icon' onClick={openSidebartoggle}/>
      </div>
      <div className="header-left">
        <BsSearch className='icon ' />
      </div>
      <div className="header-right icon-header">
        <BsFillBellFill className="icon"/>
        <BsFillEnvelopeFill className='icon'/>
        <BsPersonCircle className='icon'/>
      </div>
    </header>
  )
}

export default Header
