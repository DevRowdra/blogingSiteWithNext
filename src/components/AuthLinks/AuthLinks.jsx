import React from 'react'
import style from './authLinks.module.css'
import Link from 'next/link'
const AuthLinks = () => {
  // tamporary properties 
  const status='notAuthenticated'
  return (
    <>
    {
      status === 'notAuthenticated' ? (
        <Link href='/login'  >Login</Link>
      ) : (
        <>
        <Link href='/write' >Write</Link>
        <span className={style.link} >LogOut</span>
        </>
      )
    }
    </>
  )
}

export default AuthLinks