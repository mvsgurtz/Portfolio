import { BackgroundAnimation } from "./BackgroundAnimation";
import style from "./style.module.scss";
import "../../assets/SkillIcons/index";
import { AboutMeSection } from "./AboutMeSection";
import { IntroSection } from "./IntroSection";
import { HardSkillSection } from "./HardSkillSection";
import { ProjectsSection } from "./ProjectsSection";
import { SoftSkillSection } from "./SoftSkillSection";

export const MainContent = () => {
  return (
    <>
      <BackgroundAnimation />
      <div className={style.main__content}>

        <IntroSection />
        <AboutMeSection />
        <HardSkillSection />
        <ProjectsSection />
        <SoftSkillSection />

      </div>
    </>
  );
};
