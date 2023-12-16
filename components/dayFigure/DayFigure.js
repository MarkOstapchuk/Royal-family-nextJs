import styles from "./dayFigure.module.scss";
import Image from "next/image";
const dayFigure = ({text, info}) => {
    function getDate(info) {
        return info.birthDate + ' ----- ' + info.deathDate
    }
 return (
  <div className={styles.inner}>
      <h2>{text}</h2>
      <div className={styles.card}>
          <img src={`/figureList/${info.img}`} alt=""/>
          <div>
              <h3>{info.name}</h3>
              <h4>{getDate(info)}</h4>
              <h4>{info.info}</h4>
          </div>
      </div>
  </div>
 );
};

export default dayFigure;