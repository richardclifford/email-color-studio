import styles from "../EmailFramework.module.scss";

export default function Badge({ color }) {
  return (
    <p className={styles.badge} style={{ color: color }}>
      Lorem Ipsum Dolor
    </p>
  );
}
