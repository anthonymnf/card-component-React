import styles from "./style.module.css";
import Button from "../Button";

export default function Card({ title, posterIMg, description }) {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={posterIMg} alt="StarWars_Post" />

      <div>
        <h1> {title} </h1>
        <p className={styles.text}>{description}</p>
        <Button text="Compre Agora!" />
      </div>
    </div>
  );
}
