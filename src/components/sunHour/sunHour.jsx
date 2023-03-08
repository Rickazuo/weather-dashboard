import styles from "./styles.module.css";
import sun from "../../assets/sun.svg";
import chartSun from "../../assets/chartExampleSun.svg";

export default function () {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <img src={sun} alt="" />
        <span>Horário do sol</span>
      </h1>
      <div>
        <img src={chartSun} alt="Chart about sun hour" />
      </div>
    </div>
  );
}
