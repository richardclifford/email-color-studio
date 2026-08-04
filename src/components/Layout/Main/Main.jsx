import { useContext } from "react";
import { CampaignDetailsContext } from "../../../context/CampaignContext";
import styles from "./Main.module.scss";

export default function Main({ children }) {
  const { emailBg } = useContext(CampaignDetailsContext);
  return (
    <main
      id="email"
      className={`${styles.mainContainer} flex flex-row justify-center`}
      style={{ backgroundColor: emailBg.container }}
    >
      {children}
    </main>
  );
}
