import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
     const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }





  return (
    <>
      <Header/>
      <div className="absolute">
        <img src="https://cdn.mos.cms.futurecdn.net/98GnqFKaUMYU3GG5HxhLWZ.jpg" 
        alt="" />
      </div>
        <form action="" className='absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='text-3xl font-bold py-3'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
          </h1>
          { !isSignInForm && 
          <input 
          type="text" 
          placeholder="Full Name" 
          className='p-4 my-4 w-full bg-gray-700'
          />
          }
          <input 
          type="email" 
          placeholder="Email address" 
          className='p-4 my-4 w-full bg-gray-700'
          />
          <input 
          type="password" 
          placeholder='Password' 
          className='p-4 my-4 w-full bg-gray-700'

          />
          <button className='p-4 my-6 bg-red-700 w-full'>
            {isSignInForm ? 'Sign In' : 'Sign Up'}
            </button>
          <p 
          className='py-4 cursor-pointer' 
          onClick={toggleSignInForm}
          >
            {isSignInForm ? 'New to Netflix? Sign up now' : 'Already have an account? Sign In'}
          </p>
        </form>
    </>
  )
}

export default Login