import styles from "../EmailFramework.module.scss";

export default function Disclaimer({ text }) {
  return (
    <div className={styles.disclaimer}>
      <hr />
      <p>{text ? text : "Excepteur sint occaecat cupidatat non proident."}</p>
    </div>
  );
}
