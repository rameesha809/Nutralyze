import React from 'react'
import { Link } from 'react-router-dom'
import Diff from './Diff'
import Benefits from './Benefits'
import Calories from './Calories'
import Footer from './Footer'

export default function Landing() {
  return (
    <>
    <div className="hero min-h-screen w-full"
    style={{
      backgroundImage: "url(/src/assets/hero.jpg)",
      backgroundAttachment: 'fixed',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
    <div className="hero-overlay bg-opacity-10 text-neutral-950"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold text-neutral-950">Hello there!!</h1>
        <p className="mb-5 text-neutral-950">
          Lets help you find the details about the ingredients of your diet tody.
        </p>
        <button className="btn btn-neutral text-white border-none"><Link className='text-white' to='/Started'>Get Started</Link></button>
      </div>
    </div>
  </div>
  <Diff />
  <Calories />
  <Benefits />
  <Footer />
  </>
  )
}
