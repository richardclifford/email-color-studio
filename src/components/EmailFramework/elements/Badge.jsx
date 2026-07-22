import styles from "../../../style/EmailFramework.module.css";

export default function Badge({ color }) {
  return (
    <p className={styles.badge} style={{ color: color }}>
      Lorem Ipsum Dolor
    </p>
  );
}
