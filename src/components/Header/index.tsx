import style from "./style.module.scss";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <div className={style.navigator}>
              <li>
                <p>About Me</p>
              </li>
              <li>
                <div>
                  <p>Skills</p>
                  {/* <span>^</span> */}
                  {/* <p>Hard Skills</p>
                  <p>Soft Skills</p> */}
                </div>
              </li>
              <li>
                <p>Projects</p>
              </li>
              <li>
                <p>Contact Me</p>
              </li>
            </div>
            <div className={style.button}>
              <input
                type="checkbox"
                id="dark-mode-toggle"
                className={style.darkModeToggle}
              />
              <label className={style.darkmodeBtn} htmlFor="dark-mode-toggle">
                <img src={sun} alt=""  className={style.sunSVG}/>
                <img src={moon} alt="" className={style.moonSVG}/> 
              </label>

              <input type="checkbox" id ="language-Toggle"    className={style.languageToggle} />
                <label className={style.languageBtn} htmlFor="language-Toggle"></label>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};
