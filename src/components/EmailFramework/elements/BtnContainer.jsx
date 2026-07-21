import style from "../../../style/EmailFramework.module.css";

export default function BtnContainer({ children }) {
  return <div className={`${style.btnContainer} flex wrap`}>{children}</div>;
}
