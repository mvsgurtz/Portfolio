import style from "./style.module.scss";

interface ProjectCardProps {
  projectImg: string;
  projectName: string;
  projectSkills: string[];
  projectLink: string;
  projectDescription: string;
}

export const ProjectCard = ({
  projectImg,
  projectName,
  projectSkills,
  projectLink,
  projectDescription,
}: ProjectCardProps) => {
  return (
    <li className={style.card__container}>
      <div className={style.card__content}>
        <div className={style.card__leftside}>
          <img
            className={style.card__image}
            src={projectImg}
            alt={projectName}
          />
          <div className={style.skills__container}>
            {projectSkills.map((imageName, index) => (
              <img
                className={style.skill__image}
                key={index}
                src={imageName}
                alt={`Imagem ${index}`}
              />
            ))}
          </div>
        </div>
        <div className={style.card__info}>
          <div className={style.card__introduction}>
            <h2>{projectName}</h2>
            <p>{projectDescription}</p>
          </div>
          <a href={projectLink}>Go to Website</a>
        </div>
      </div>

      {/* <div className={style.card__content}>
        <img className={style.card__image} src={projectImg} alt={projectName} />
        <div className={style.card__info}>
          <div className={style.card__introduction}>
            <h2>{projectName}</h2>
            <div className={style.skills__container}>
              {projectSkills.map((imageName, index) => (
                <img className={style.skill__image} key={index} src={imageName} alt={`Imagem ${index}`} />
              ))}
            </div>
            <a href={projectLink}>Go to Website</a>
          </div>
          <p>{projectDescription}</p>
        </div>
      </div> */}
    </li>
  );
};
