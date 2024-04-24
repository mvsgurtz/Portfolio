import style from "./style.module.scss";

export const AboutMeSection = () => {
  return (
    <section className={style.aboutMe__container}>
      <div className={style.aboutMe__content}>
        <h1 className="highlight__font">
          <span className={style.aboutMe__title}>About Me</span>
        </h1>
        <p>
          <span className={style.aboutMe__info}>
            Tenho 20 anos e estou cursando o terceiro semestre de Ciência da
            Computação, sempre tive facilidade e gosto pela área da tecnologia,
            mas já me dediquei muito ao esporte, nele aprendi a disciplina,
            foco, espirito de liderança e como a coletividade auxilia no
            trabalho com excelência.
          </span>
        </p>
      </div>
    </section>
  );
};
