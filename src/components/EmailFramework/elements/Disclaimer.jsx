import style from "../../../style/EmailFramework.module.css";

export default function Disclaimer({ text }) {
  return (
    <div className={style.disclaimer}>
      <hr />
      <p>{text ? text : "Excepteur sint occaecat cupidatat non proident."}</p>
    </div>
  );
}
