import React from 'react'
import { BsCart3, BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill, 
  BsPeopleFill,BsListCheck,BsFillGearFill, BsMenuButtonFill } from 'react-icons/bs'


const Sidebar = ({opensidebar, openSidebartoggle}) => {
  return (
    <aside id='sidebar' className={opensidebar ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
      <div className='sidebar-brand'>
        <BsCart3 className='icons-header'/> SHOP
        
      </div>
      <div className="icon-close" onClick={openSidebartoggle}>X</div>

    </div>
    <ul className='sidebar-list'>
      <li className='sidebar-list-item'><a href=""><BsGrid1X2Fill/> Dashboard</a></li>
      <li className='sidebar-list-item'><a href=""><BsFillArchiveFill/> Products</a></li>
      <li className='sidebar-list-item'><a href=""><BsFillGrid3X3GapFill/> Category</a></li>
      <li className='sidebar-list-item'><a href=""><BsPeopleFill/> Customer</a></li>
      <li className='sidebar-list-item'><a href=""><BsListCheck/> Inventory</a></li>
      <li className='sidebar-list-item'><a href=""><BsMenuButtonFill/> Report</a></li>
      <li className='sidebar-list-item'><a href=""><BsFillGearFill/> Setting</a></li>
    </ul>
    </aside>
  )
}

export default Sidebar