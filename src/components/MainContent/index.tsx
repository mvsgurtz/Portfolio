import { BackgroundAnimation } from "./BackgroundAnimation";
import style from "./style.module.scss";

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
                
                <span className={style.impactPhrase__intro}>“If you think or dream that you can, go for it. Boldness possesses geniality, power and magic. Dare to do it and the power shall be granted.”</span>
            
            </section>
            
            <BackgroundAnimation />

            <section className={style.aboutMe__content}>
                <div>
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit aperiam error consectetur minus ut delectus ad laborum odit fugiat. Magnam nihil maiores dignissimos aliquid maxime!</p>
                </div>
            </section>

            <section className={style.hrdSkills__content}>
                    <h1>Hard Skills</h1>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <p></p>
                        </div>
                    </div>
            </section>

            <section className={style.projects__content}>
                <div>
                    <h1>Projects</h1>
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
    )
}