import React, { useState } from 'react'
import './Login.css'
import SignIn from '../signIn/SignIn'

const Login = () => {
    const [signIn, setSignIn] = useState(false)
  return (
    <div className="login">
        <div className="login__background">
            <img src="https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png" alt="" className="login__logo" />
            <button onClick={() => setSignIn(true)} className="login__button">Sign In</button>
            <div className="login__gradient" />
        </div>
        <div className="login__body">
            {signIn ? (
                <SignIn />
            ) : (
                <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="login__input">
                <form>
                    <input type="email" placeholder='Email Address' />
                    <button onClick={() => setSignIn(true)} className="login__getStarted">GET STARTED</button>
                    
                </form>
            </div>
            </>
            )}
        </div>
    </div>
  )
}

export default Login