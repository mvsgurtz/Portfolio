import { ProjectCard } from "./ProjectCard";
import style from "./style.module.scss";
import react from "../../../assets/SkillIcons/reactIcon.svg";
import javascript from "../../../assets/SkillIcons/jsIcon.svg";
import KenzieHub from "../../../assets/ProjetoKenzieHub.png";

export const ProjectsSection = () => {
  return (
    <section className={style.projects__content}>
      <h1 className="highlight__font">Projects</h1>
      <div className={style.slider__container}>
        <ul className={style.slider}>
          <ProjectCard
            projectImg={KenzieHub}
            projectName={"KenzieHub"}
            projectSkills={[react, javascript]}
            projectLink={"#"}
            projectDescription={
              "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laboriosam quisquam, doloribus accusamus deserunt saepe adipisci quis, recusandae iure odit nemo similique, commodi illum nihil. Reprehenderit aliquid accusamus quisquam iure?"
            }
          />
        </ul>
      </div>
    </section>
  );
};
