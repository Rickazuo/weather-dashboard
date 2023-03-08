import Footer from "../components/footer/footer";
import styles from "./stlyes.module.css";

function HomePage() {
  return (
    <div>
      <div className={styles.container}>
        <div>HOME PAGE</div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
