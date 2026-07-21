import style from "../../../style/EmailFramework.module.css";

export default function Btn({ type = "secondary", label }) {
  const btnClass = style[`${type}`];

  return (
    <button className={`${style.btn} ${btnClass}`}>
      {label ? label : "Lorem"}
    </button>
  );
}
