// --------------- Header Jsx-------------------

import { useEffect, useState } from "react";
import headerLogo from "../../assets/HeaderLogo.svg";
import lightMood from "../../assets/LightMood.svg";
import darkMood from "../../assets/DarkMood.svg";
import style from "./Header.module.css"
import {headings, links, icons} from "../../data";

const Header = () => {
  const [theme, setTheme] = useState('light')

  const handleClick = () => {
    setTheme(theme => (theme == 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    if (theme == 'light') {
      document.body.style.backgroundColor = '#fff'
      document.body.style.color = '#000'
    }
    else if (theme == 'dark') {
      document.body.style.backgroundColor = '#000'
      document.body.style.color = '#fff'
    }
    return () => {
      document.body.style.backgroundColor = '#fff'
      document.body.style.color = '#000'
    }
  }, [theme])

  return (
    <header className={`${style.header}`}>
      <div className="container">
        <nav className={`${style.nav}`}>
          <div className={`${style.left}`}>
            <a href="">
              <img src={headerLogo} alt="logo" className={`${style.logo}`} />
            </a>
            <ul className={`${style.list}`}>
              {links.map(({ id, href, text }) => (
                <li key={id}><a href={href}>{text}</a></li>
              ))}
            </ul>
          </div>
          <div className={`${style.buttons}`}>
            <button onClick={handleClick} className={`${style.light_mood} ${style.btn}`} type="button">
              {theme == 'light' ? <Sun /> : <Moon />}
            </button>
            <button className={`${style.white} ${style.btn}`} type="button">Login</button>
            <button className={`${style.black} ${style.btn}`} type="button">Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;

const Sun = () => {
  return (
    <img src={lightMood} alt="lightmood" className={`${style.lightMoodIcon}`} />
  )
}

const Moon = () => {
  return (
    <img src={darkMood} alt="darkmood" className={`${style.darkMoodIcon}`} />
  )
}