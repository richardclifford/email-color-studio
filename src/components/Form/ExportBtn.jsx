import { useContext } from "react";
import { CampaignDetailsContext } from "../../App";
import styles from "./Form.module.css";

export default function ExportBtn() {
  const { isLoading } = useContext(CampaignDetailsContext);

  return (
    <button type="submit" className={styles.export} disabled={isLoading}>
      {isLoading && <span className={styles.spinner}></span>}
      {isLoading ? "Exporting..." : "Export Theme"}
    </button>
  );
}
