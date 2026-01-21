import React from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import ContactUs from './components/ContactUs.jsx'
import Testimonials from './components/Testimonials.jsx'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <About/>
      <Projects />
      <Testimonials/>
      <ContactUs />
    </div>
  )
}

export default App
