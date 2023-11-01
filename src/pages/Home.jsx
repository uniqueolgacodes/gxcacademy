import React from 'react'
import Register from './Register'
import Courses from './Courses'
import Login from './Login'
import Lowernav from '../components/Lowernav'
import Navbar from '../components/Navbar'
import "../styles/home.css"
import HomeContent from '../components/HomeContent'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>

   
    
    <div className='hero w-full rounded-3xl'>
      <div className='titleBar'>
        <div className="titleC1">
        <div className="logo"></div>
        <h1 className='logoText text-2xl font-extrabold'>GAMEX <span className='logoTextSpan text-green-500'>CODING</span> ACADEMY</h1>
        </div>
      <div className="titleC2">
      <Navbar/>
      </div>
      </div>

      <div className="heroTextBox">
        <h1 className='heroText font-extrabold'>WEB <span className='heroTextSpan'>COURSES</span><br/> AND DEVELOPMENT</h1>
      </div>
    </div>
    <Lowernav />
    <br />
    <section className='content'>
    <HomeContent/>
    <Register/>
    <Courses/>
    <Login/>
    </section>

    <Footer/>
    
    </>
  )
}

export default Home