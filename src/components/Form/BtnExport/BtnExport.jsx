import { useContext } from "react";
import { CampaignDetailsContext } from "../../../context/CampaignContext";
import styles from "./BtnExport.module.scss";

export default function BtnExport() {
  const { isLoading } = useContext(CampaignDetailsContext);

  return (
    <button
      type="submit"
      className={`${styles.export} flex`}
      disabled={isLoading}
    >
      {isLoading && <span className={styles.spinner}></span>}
      {isLoading ? "Exporting..." : "Export Theme"}
    </button>
  );
}
