"use client"
import React, { useState } from 'react';
import style from './authLinks.module.css';
import Link from 'next/link';
const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  // tamporary properties
  const status = 'notAuthenticated';
  return (
    <>
      {status === 'notAuthenticated' ? (
        <Link href="/login" className={style.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={style.link}>Write</Link>
          <span className={style.link}>LogOut</span>
        </>
      )}
      <div className={style.burger} onClick={()=>setOpen(!open)}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      {open && (
        <div className={style.responsiveMenu}>
          <Link
            href="/"
            
          >
            Home
          </Link>
          <Link
            href="/"
            
          >
            Contact
          </Link>
          <Link
            href="/"
            
          >
            About
          </Link>
          {status === 'notAuthenticated' ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={style.link}>LogOut</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
