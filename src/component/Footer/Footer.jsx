// ----------------Footer Jsx-----------

import footerLogo from "../../assets/FooterLogo/FooterLogo.svg";
import facebookLogo from "../../assets/FooterLogo/FacebookLogo.svg";
import twitterLogo from "../../assets/FooterLogo/TwitterLogo.svg";
import linkedinLogo from "../../assets/FooterLogo/LinkdinLogo.svg";
import slackLogo from "../../assets/FooterLogo/SlackLogo.svg";
import githubLogo from "../../assets/FooterLogo/GithubLogo.svg";
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.leftFooter}>
        <img src={footerLogo} alt="footerLogo " className={`${style.logoFooter}`} />
        <h1>Want to receive</h1>
        <h1>our awesome stories?</h1>
        <div className={style.divInputBtn}>
          <input type="email" placeholder="Enter your email" />
          <button className={style.black}>Subscribe</button>
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
            <li><a href="#">About Us</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className={style.textFooter}>
          <h3>Lead generation</h3>
          <h3>Customer engagement</h3>
          <h3>Customer support</h3>
          <h3>Help Center Articles</h3>
          <h3>Outbound Messages</h3>
        </div>

        <div className={style.socialMedia}>
          <a href="#"><img src={facebookLogo} alt="facebook" /></a>
          <a href="#"><img src={twitterLogo} alt="twitter" /></a>
          <a href="#"><img src={linkedinLogo} alt="linkedin" /></a>
          <a href="#"><img src={slackLogo} alt="slack" /></a>
          <a href="#"><img src={githubLogo} alt="github" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;