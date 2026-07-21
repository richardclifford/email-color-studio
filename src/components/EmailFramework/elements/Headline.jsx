import style from "../../../style/EmailFramework.module.css";

export default function Headline({ type }) {
  const headlineType = style[`headline-${type}`];

  return (
    <p className={`${headlineType}`}>
      {type === "1" || type === "2"
        ? "Lorem Ipsum Dolor Sit Amet Do"
        : "Lorem Ipsum Dolor"}
    </p>
  );
}
