import styles from "./style.module.css";

export default function Button(props) {
  return <button className={styles.btn}>{props.text}</button>;
}
