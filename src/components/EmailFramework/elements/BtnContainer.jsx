import styles from "../EmailFramework.module.scss";

export default function BtnContainer({ children }) {
  return <div className={`${styles.btnContainer} flex wrap`}>{children}</div>;
}
