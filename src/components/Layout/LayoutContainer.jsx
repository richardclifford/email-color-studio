import styles from "./Layout.module.css";

export default function LayoutContainer({ children, heading }) {
  return (
    <div className={`${styles.styleContainer} flex flex-col gap-16`}>
      <h2>{heading}</h2>
      {children}
    </div>
  );
}
