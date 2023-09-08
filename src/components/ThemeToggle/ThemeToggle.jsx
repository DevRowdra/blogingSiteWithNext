'use client';
import React, { useContext } from 'react';
import style from './themeToggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div
      className={style.container}
      onClick={toggle}
      style={
        theme === 'dark'
          ? { backgroundColor: 'white' }
          : { backgroundColor: '#0f172a' }
      }
    >
      <Image
        src="/sun.png"
        height={14}
        width={14}
        alt="light"
      />
   <div
  className={style.ball}
  style={{
    backgroundColor: theme === "dark" ? "#0f172a" : "white",
    position: "absolute",
    left: theme === "dark" ? "calc(70% - 1px)" : "1px",
    transition: "background-color 0.3s, left 0.3s",
  }}
></div>


      <Image
        src="/moon.png"
        height={14}
        width={14}
        alt="dark"
      />
    </div>
  );
};

export default ThemeToggle;
