import styles from "./LayoutContainer.module.scss";

export default function LayoutContainer({ children, heading }) {
  return (
    <div className={`${styles.layoutContainer} flex flex-col gap-16`}>
      <h2>{heading}</h2>
      {children}
    </div>
  );
}
