// -------------Section Jsx----------------------

import sectionLogo from "../../assets/SectionLogo.svg";
import sectionImg from "./imgs/SectionImg.svg";
import style from "./Section.module.css";

function Section() {
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
                        <button className={`${style.black}`}>Get started</button>
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

export default Section;