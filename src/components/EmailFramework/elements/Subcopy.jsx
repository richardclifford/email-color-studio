import style from "../../../style/EmailFramework.module.css";

export default function Subcopy({ children }) {
  return (
    <p className={style.subcopy}>
      {children && children}
      {!children &&
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    </p>
  );
}
