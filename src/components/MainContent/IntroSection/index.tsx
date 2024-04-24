import style from "./style.module.scss"

export const IntroSection = () => {
  return (
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
  );
};
