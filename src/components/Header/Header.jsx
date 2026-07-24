import styles from "./Header.module.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Header() {
  const [isOpen, setIsOpen] = useLocalStorage("isHeaderExpanded", true);

  const handleExpandToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${styles.header} flex justify-center`}>
      <div
        className={`${styles.headerContainer} ${isOpen ? "" : styles.collapsed} flex flex-col align-center`}
      >
        <h1>Email Color Studio</h1>
        <div id={styles["collapsible-conent"]} aria-hidden={!isOpen}>
          <div>
            <p>
              Update the hex code values for any editable email element to
              customize your campaign's color palette. As you make changes, the
              template preview will update in real time, allowing you to
              instantly see how your new colors look before implementation. Once
              you're satisfied with your color selections, click{" "}
              <b>Export Theme</b> to generate the theme settings for handoff and
              implementation.
            </p>
          </div>
        </div>
        <button
          aria-expanded={isOpen}
          onClick={handleExpandToggle}
          className={`${!isOpen ? styles.flip : ""}`}
          aria-label={`${!isOpen ? "Expand" : "Collapse"} header`}
          aria-controls={styles["collapsibleConent"]}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className={styles.icon}
          >
            <path d="M342.6 105.4C330.1 92.9 309.8 92.9 297.3 105.4L137.3 265.4C124.8 277.9 124.8 298.2 137.3 310.7C149.8 323.2 170.1 323.2 182.6 310.7L320 173.3L457.4 310.6C469.9 323.1 490.2 323.1 502.7 310.6C515.2 298.1 515.2 277.8 502.7 265.3L342.7 105.3zM502.6 457.4L342.6 297.4C330.1 284.9 309.8 284.9 297.3 297.4L137.3 457.4C124.8 469.9 124.8 490.2 137.3 502.7C149.8 515.2 170.1 515.2 182.6 502.7L320 365.3L457.4 502.6C469.9 515.1 490.2 515.1 502.7 502.6C515.2 490.1 515.2 469.8 502.7 457.3z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
