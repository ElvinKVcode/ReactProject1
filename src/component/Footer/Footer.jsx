import { useState, useEffect } from "react";
import footerLogo from "../../assets/FooterLogo/FooterLogo.svg";
import style from './Footer.module.css';
import { headings, links, icons } from "../../data";

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribeClick = () => {
    setIsSubscribed(true);
  };

  useEffect(() => {
    if (isSubscribed) {
      document.querySelector(`.${style.divInputBtn} input`).value = 'Fuad müəllim və Tələbələri Əjdahadı !';
      document.querySelector(`.${style.footer}`).style.backgroundColor = 'green';
    }
  }, [isSubscribed]);

  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__inner}>
          <div className={style.leftFooter}>
            <img src={footerLogo} alt="footerLogo " className={`${style.logoFooter}`} />
            <h1>Want to receive</h1>
            <h1>our awesome stories?</h1>
            <div className={style.divInputBtn}>
              <input type="email" placeholder="Enter your email" />
              <button onClick={handleSubscribeClick} className={style.black}>Subscribe</button>
            </div>
            <span>© The 18 Design, All rights reserved.</span>
          </div>

          <div className={style.rightFooter}>
            <div className={style.mailFooter}>
              <h2>Email</h2><br />
              <span>kamilovelvin4@gmail.com</span>
            </div>

            <div className={style.linksFooter}>
              <ul className={style.list}>
                {links.map(({ id, href, text }) => (
                  <li key={id}><a href={href}>{text}</a></li>
                ))}
              </ul>
            </div>
            <div className={style.textFooter}>
              {headings.map(item => <h3 key={item}>{item}</h3>)}
            </div>

            <div className={style.socialMedia}>
              {icons.map((icon, index) => (
                <a href="#" key={index}>
                  <img src={icon} alt="Icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
