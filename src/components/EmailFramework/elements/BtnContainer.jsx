import styles from "../../../style/EmailFramework.module.css";

export default function BtnContainer({ children }) {
  return <div className={`${styles.btnContainer} flex wrap`}>{children}</div>;
}
