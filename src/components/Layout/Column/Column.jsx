import styles from "./Column.module.css";

export default function Column({ children }) {
  return (
    <div className={`${styles.column} flex flex-col gap-8`}>{children}</div>
  );
}
