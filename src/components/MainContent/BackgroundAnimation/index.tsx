import style from "./style.module.scss";
import lighthouse from "../../../assets/Background/lighthouse.svg";
import lighthouseLightCone from "../../../assets/Background/lighthouseLightCone (2).svg";

export const BackgroundAnimation = () => {
    return (
        <>
        <div className={style.background__content}>
            <div className={style.lighthouse__container}>
                <img className={style.lighthouse} src={lighthouse} alt="Lighthouse" />
                <div className={style.lighthouseLight}></div>

                <img className={style.lighthouseLightCone} src={lighthouseLightCone} alt="lighthouseLightCone" />
            </div>
                <div className={style.waves}>
                    <div className={style.wave__light}></div>
                    <div className={style.wave__superLight}></div>
                    <div className={style.wave__dark}></div>
                </div>
        </div>
        <div className={style.background__circle}>
        
        </div>

        <div className={style.complementary__circle}>
        
        </div>
       
        </>
    );
}