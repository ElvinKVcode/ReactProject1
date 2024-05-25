// --------------- Header Jsx-------------------

import headerLogo from "../../assets/HeaderLogo.svg";
import lightMood from "../../assets/LightMood.svg";
import style from "./Header.module.css"

const Header = () => {
  return (
    <header className={`${style.header}`}>
      <div className="container">
        <nav className={`${style.nav}`}>
          <div className={`${style.left}`}>
            <a href="">
              <img src={headerLogo} alt="logo" className={`${style.logo}`} />
            </a>
            <ul className={`${style.list}`}>
              <li><a href="">About Us</a></li>
              <li><a href="">How it work</a></li>
              <li><a href="">Pricing</a></li>
              <li><a href="">FAQs</a></li>
            </ul>
          </div>
          <div className={`${style.buttons}`}>
            <button className={`${style.light_mood} ${style.btn}`} type="button">
              <img src={lightMood} alt="lightmood" className={`${style.lightMoodIcon}`} />
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
