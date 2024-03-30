import style from "./style.module.scss";

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
                  <span>^</span>
                  <p>Hard Skills</p>
                  <p>Soft Skills</p>
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
              <li>
                <button></button>
              </li>
              <li>
                <button></button>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};
