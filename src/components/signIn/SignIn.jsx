import React, { useRef } from "react";
import "./SignIn.css";
import { auth } from "../../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const emailRef = useRef(null)
    const passwordlRef = useRef(null)

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordlRef.current.value
    ).then((user)=>{
        console.log(user);
    }).catch((err)=>{
        alert(err.message)
    })
  };
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordlRef.current.value
    ).then((user)=>{
        console.log(user);
    }).catch((err)=>{
        alert(err.message)
    })
  };
  return (
    <div className='signIn'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type='email' placeholder='Email' />
        <input ref={passwordlRef} type='password' placeholder='Password' />
        <button onClick={login} type='submit'>
          Sign In
        </button>
        <h4>
          <span className='signIn__gray'>New to Netflix?</span>{" "}
          <span className='signIn__link' onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
