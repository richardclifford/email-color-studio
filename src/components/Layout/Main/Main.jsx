import { useContext } from "react";
import { ToastContext } from "../../../context/ToastContext";
import { CampaignDetailsContext } from "../../../context/CampaignContext";
import styles from "./Main.module.scss";

export default function Main({ children }) {
  const { emailBg } = useContext(CampaignDetailsContext);
  const { addToast } = useContext(ToastContext);
  return (
    <>
      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={() => addToast("Error message", "error")}
          style={{ padding: 10, backgroundColor: "black", color: "white" }}
        >
          Show Error Toast
        </button>
        <button
          onClick={() => addToast("Success message", "success")}
          style={{ padding: 10, backgroundColor: "black", color: "white" }}
        >
          Show Success Toast
        </button>
      </div>
      <main
        id="email"
        className={`${styles.mainContainer} flex flex-row justify-center`}
        style={{ backgroundColor: emailBg.container }}
      >
        {children}
      </main>
    </>
  );
}
