import React from 'react'

import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className='LoginPage'>

        <aside></aside>

        <section>
            <h1 className='welcome'>Welcome Back</h1>

            <p className='paragraph1'>Manage Your Task Checklist Easily</p>

            <div className='input-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email"  placeholder='Enter email here...' />
            </div>

            <div className='input-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password"  placeholder='Enter password here...' />
            </div>

            <button className='lgnBtn'>Login</button>

            <p className='create'>Don't have an account? <a href="/" className='link'>Create one</a></p>

            <h1 className='or'>OR</h1>

            <button className='signBtn'>Sign in with google</button>

          

        </section>
        
    </div>
  )
}

export default LoginPage;