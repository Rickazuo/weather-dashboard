import styles from "./styles.module.css";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      Made by{" "}
      <a
        className={styles.nameFooter}
        href="https://gsajulia.github.io/"
        target="_blank"
      >
        Júlia
      </a>
      and
      <a
        className={styles.nameFooter}
        href="https://rickazuo.github.io/portfolio/"
        target="_blank"
      >
        Ricardo
      </a>
    </div>
  );
}
