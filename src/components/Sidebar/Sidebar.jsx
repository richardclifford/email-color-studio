import { useContext } from "react";
import InputText from "./InputText/InputText";
import styles from "./Sidebar.module.css";
import { CampaignDetailsContext } from "../../App";
import ColorInput from "./ColorInput/ColorInput";
import StyleContainer from "./StyleContainer/StyleContainer";

export default function Sidebar() {
  const {
    campaignDetails,
    handleCampaignDetailsChange,
    color,
    handleColorChange,
  } = useContext(CampaignDetailsContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Campaign Name: ${campaignDetails.campaignName}\nOwner: ${campaignDetails.owner} \nContainer BG: ${color.container}`,
    );
  };

  return (
    <div className={`${styles.sidebar}`}>
      <form
        action=""
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex flex-col gap-3"
      >
        <div className={styles.row}>
          <div className={styles.column}>
            <InputText
              label="Campaign or Brand"
              name="campaignName"
              value={campaignDetails.campaignName}
              onValueChange={handleCampaignDetailsChange}
            />
          </div>
          <div className={styles.column}>
            <InputText
              label="Owner"
              name="owner"
              value={campaignDetails.owner}
              onValueChange={handleCampaignDetailsChange}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <ColorInput
              isInputSolo={true}
              label="Email BG"
              value={color.container}
              onValueChange={handleColorChange}
            />
          </div>
          <div className={styles.column}></div>
        </div>
        <StyleContainer
          label="Hero"
          value={color.container}
          onValueChange={handleColorChange}
        />
        <p>
          Export your theme and share the .txt file with Emily Linner via Teams.
          Your theme will be converted to a campaign one-sheeter and shared with
          the team.
        </p>
        <button type="submit" className={styles.export}>
          Export Theme
        </button>
        <button type="reset" className={styles.reset}>
          Reset to Default Colors
        </button>
      </form>
    </div>
  );
}
