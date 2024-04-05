import { BackgroundAnimation } from "./BackgroundAnimation";
import style from "./style.module.scss";
import astronaut from "../../assets/astronautByMVS.svg"
import alien from "../../assets/AlienByMVS.svg"
import nav from "../../assets/NavByMVS.svg"
import { HardSkill } from "./HardSkill";
import "../../assets/SkillIcons/index" ; 
import { JS, TS, css, express, figma, git, github, html, insomnia, java, junit, mysql, node, postgre, prisma, python, react, sass, selenium } from "../../assets/SkillIcons/index";



export const MainContent = () => {
  return (
    <div className={style.main__content}>
      <section className={style.intro__container}>
        <div className={style.intro__content}>
          <div>
            <h1 className={style.name__intro}>Marcos Goulart</h1>
            <h2 className={style.stack__intro}>Fullstack Developer</h2>
          </div>
          <div className={style.portfolio__intro}>
            <span>Welcome</span>
            <span>to my</span>
            <span>Portfolio</span>
          </div>
        </div>

        <span className={style.impactPhrase__intro}>
          “If you think or dream that you can, go for it. Boldness possesses
          geniality, power and magic. Dare to do it and the power shall be
          granted.”
        </span>
      </section>

      <BackgroundAnimation />

      <section className={style.aboutMe__container}>
        <div className={style.aboutMe__content}>
          <img src={astronaut} alt="" />
          <p>
            Tenho 20 anos e estou cursando o terceiro semestre de Ciência da
            Computação, sempre tive facilidade e gosto pela área da tecnologia,
            mas já me dediquei muito ao esporte, nele aprendi a disciplina,
            foco, espirito de liderança e como a coletividade auxilia no
            trabalho com excelência.
          </p>
        </div>
      </section>

      <section className={style.hrdSkills__content}>
        <h1>Hard Skills</h1>
        <img src={alien} alt="" />
        <div>
          <HardSkill skillName = {"HTML"} skillImg = {html}/>
          <HardSkill skillName = {"CSS"} skillImg = {css}/>
          <HardSkill skillName = {"JavaScript"} skillImg = {JS}/>
          <HardSkill skillName = {"TypeScript"} skillImg = {TS}/>
          <HardSkill skillName = {"React"} skillImg = {react}/>
          <HardSkill skillName = {"Node.JS"} skillImg = {node}/>
          <HardSkill skillName = {"SASS"} skillImg = {sass}/>
          <HardSkill skillName = {"EXPRESS"} skillImg = {express}/>
          <HardSkill skillName = {"PostgreSQL"} skillImg = {postgre}/>
          <HardSkill skillName = {"Prisma"} skillImg = {prisma}/>
          <HardSkill skillName = {"Figma"} skillImg = {figma}/>
          <HardSkill skillName = {"Java"} skillImg = {java}/>
          <HardSkill skillName = {"mySQL"} skillImg = {mysql}/>
          <HardSkill skillName = {"Selenium"} skillImg = {selenium}/>
          <HardSkill skillName = {"Insomnia"} skillImg = {insomnia}/>
          <HardSkill skillName = {"JUnit"} skillImg = {junit}/>
          <HardSkill skillName = {"Python"} skillImg = {python}/>
          <HardSkill skillName = {"GitHub"} skillImg = {github}/>
          <HardSkill skillName = {"Git"} skillImg = {git}/>
        </div>
      </section>

      <section className={style.projects__content}>
        <div>
          <h1>Projects</h1>
          <img src={nav} alt="" />
          <div>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <h2>Tft</h2>
                <div>
                  <img src="" alt="" />
                </div>
                <p>Melhor jogo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.sftSkills__content}>
        <h1>Soft Skills</h1>
        <div>
          <img src="" alt="" />
          <p></p>
        </div>
      </section>
    </div>
  );
};
