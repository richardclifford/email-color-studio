import styles from "../../../style/EmailFramework.module.css";

export default function Disclaimer({ text }) {
  return (
    <div className={styles.disclaimer}>
      <hr />
      <p>{text ? text : "Excepteur sint occaecat cupidatat non proident."}</p>
    </div>
  );
}
