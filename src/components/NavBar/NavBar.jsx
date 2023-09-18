import React from 'react'
import style from './navBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import AuthLinks from '../AuthLinks/AuthLinks'
const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Image src="/facebook.png" alt='facebook' width={24} height={24}></Image>
        <Image src="/instagram.png" alt='instagram' width={24} height={24}></Image>
       
        <Image src="/youtube.png" alt='youtube' width={24} height={24}></Image>
      </div>
      <div className={style.logo}>RoBlog</div>
      <div className={style.links}>
        <ThemeToggle></ThemeToggle>
        <Link href='/' className={style.link}>Home</Link>
        <Link href='/' className={style.link}>Contact</Link>
        <Link href='/' className={style.link}>About</Link>
        <AuthLinks></AuthLinks>
      </div>
    </div>
  )
}

export default NavBar