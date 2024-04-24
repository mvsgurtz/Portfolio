import style from "./style.module.scss";
import {
  JS,
  TS,
  css,
  express,
  figma,
  git,
  github,
  html,
  insomnia,
  java,
  junit,
  mysql,
  node,
  postgre,
  prisma,
  python,
  react,
  sass,
  selenium,
} from "../../../assets/SkillIcons/index";

("{ skillName, skillImg }: { skillName: string; skillImg: string }");

export const HardSkill = () => {
  return (
    <div className={style.skill__container}>
      <div>
        <img src={html} alt="HTML" />
        <p className={style.skill__name}>HTML</p>
      </div>

      <div>
        <img src={css} alt="CSS" />
        <p className={style.skill__name}>CSS</p>
      </div>

      <div>
        <img src={JS} alt="JavaScript" />
        <p className={style.skill__name}>JavaScript</p>
      </div>
      <div>
        <img src={TS} alt="TypeScript" />
        <p className={style.skill__name}>TypeScript</p>
      </div>
      <div>
        <img src={react} alt="React" />
        <p className={style.skill__name}>React</p>
      </div>
      <div>
        <img src={node} alt="Node.JS" />
        <p className={style.skill__name}>Node.JS</p>
      </div>
      <div>
        <img src={sass} alt="Sass" />
        <p className={style.skill__name}>Sass</p>
      </div>
      <div>
        <img src={express} alt="Express" />
        <p className={style.skill__name}>Express</p>
      </div>

      <div>
        <img src={figma} alt="Figma" />
        <p className={style.skill__name}>Figma</p>
      </div>
      <div>
        <img src={git} alt="Git" />
        <p className={style.skill__name}>Git</p>
      </div>
      <div>
        <img src={github} alt="GitHub" />
        <p className={style.skill__name}>GitHub</p>
      </div>
      <div>
        <img src={insomnia} alt="Insomnia" />
        <p className={style.skill__name}>Insomnia</p>
      </div>
      <div>
        <img src={java} alt="Java" />
        <p className={style.skill__name}>Java</p>
      </div>
      <div>
        <img src={junit} alt="JUnit" />
        <p className={style.skill__name}>JUnit</p>
      </div>
      <div>
        <img src={mysql} alt="mySQL" />
        <p className={style.skill__name}>MySQL</p>
      </div>
      <div>
        <img src={postgre} alt="PostgreSQL" />
        <p className={style.skill__name}>PostgreSQL</p>
      </div>
      <div>
        <img src={prisma} alt="Prisma" />
        <p className={style.skill__name}>Prisma</p>
      </div>
      <div>
        <img src={python} alt="Python" />
        <p className={style.skill__name}>Python</p>
      </div>
      <div>
        <img src={selenium} alt="Selenium" />
        <p className={style.skill__name}>Selenium</p>
      </div>
    </div>
  );
};
