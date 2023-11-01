import React from 'react'
import "../styles/navbar.css"

const Lowernav = () => {
  return (
    <div className='lowerNav'>
      <ul className="lowerNavList">
        <li className="lowernavItem active"><button className='lowernavProperty flex shrink-0'><div className=""><box-icon color='white' name='code-block'></box-icon></div><br/><p className='font-extrabold'>E-LEARN</p></button></li>
        <li className="lowernavItem"><button className='lowernavProperty flex shrink-0'><box-icon color='white' name='code-alt'></box-icon><br/><p className='font-extrabold'>EDITORS</p></button></li>
        <li className="lowernavItem"><button className='lowernavProperty flex shrink-0'><box-icon color='white' name='award'></box-icon><br/><p className='font-extrabold'>COURSES</p></button></li>
      </ul>
    </div>
  )
}

export default Lowernav