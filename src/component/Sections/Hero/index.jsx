import { useState, useEffect } from "react";
import sectionLogo from "@assets/SectionLogo.svg";
import sectionImg from "@assets/Hero/image.svg";
import style from "./Hero.module.css";

function Hero() {
    const [theme, setTheme] = useState('normal');

    const handleClick = () => {
        setTheme((theme) => (theme === 'normal' ? 'changed' : 'normal'));
    };

    useEffect(() => {
        const oneElements = document.querySelectorAll(`.${style.divText} h1`);
        const sixElements = document.querySelectorAll(`.${style.divText} h6`);
        const inputElement = document.querySelector(`.${style.divInputBtn} input`);

        if (theme === 'changed') {
            oneElements.forEach(el => el.style.fontSize = 'initial');
            sixElements.forEach(el => el.style.fontSize = 'initial');
            inputElement.value = 'Fuad müəllim və Tələbələri Əjdahadı !';
            inputElement.style.color = 'red';

        } else if(theme==='normal'){
            oneElements.forEach(el => el.style.fontSize = '50px');
            sixElements.forEach(el => el.style.fontSize = '15px');
            inputElement.value = '';
            inputElement.style.color = 'initial';
        }

        return () => {
            oneElements.forEach(el => el.style.fontSize = 'initial');
            sixElements.forEach(el => el.style.fontSize = 'initial');
            inputElement.value = '';
            inputElement.style.color = 'initial';
        }
    }, [theme]);

    return (
        <section className={`${style.section}`}>
            <main>
                <div className={`${style.left}`}>
                    <div className={`${style.divText}`}>
                        <h1>Always Track &</h1>
                        <h1>Analyze Your Business</h1>
                        <h1>Statistics To Succeed.</h1>
                        <h6>A better way to manage your sales, team, clients & marketing</h6>
                        <h6>— on a single platform. Powerful, affordable & efficient.</h6>
                    </div>
                    <div className={`${style.divInputBtn}`}>
                        <input type="text" placeholder="Enter your email" />
                        <button onClick={handleClick} className={`${style.black}`}>Get started</button>
                    </div>
                    <div className={`${style.divLogo}`}>
                        <img src={sectionLogo} alt="logo" className={`${style.animatedLogo}`} />
                    </div>
                </div>

                <div className={`${style.right}`}>
                    <img src={sectionImg} alt="img" />
                </div>
            </main>
        </section>
    );
}

export default Hero;
