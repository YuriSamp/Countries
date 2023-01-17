import React from 'react';
import { NavbarWhite, NavbarBlack, Titulo, Button, ButtonBlack } from 'styles.css'
import { BsMoon, BsSun } from 'react-icons/bs'
import { useRecoilState } from 'recoil'
import { DarkModeAtom } from '@/utils/Atom';

export const Navbar = () => {

  const [DarkMode, setDarkMode] = useRecoilState(DarkModeAtom)

  return (
    <nav className={DarkMode ? NavbarBlack : NavbarWhite}>
      <h1 className={Titulo}>Where in the world?</h1>
      <button className={DarkMode ? ButtonBlack : Button} onClick={() => setDarkMode(DarkMode => !DarkMode)}>
        {DarkMode ? <BsSun className='svg' /> : <BsMoon className='svg' />}
        <h2>Dark Mode</h2>
      </button>
    </nav>
  );
}


