import { HardSkill } from "../HardSkillTypes";
import style from "./style.module.scss";

export const HardSkillSection = () => {
  return (
    <section className={style.hrdSkills__container}>
      <h1 className="highlight__font">Hard Skills</h1>

      <div className={style.hrdSkills__content}>
        <HardSkill />
      </div>
    </section>
  );
};
