import { useContext } from "react";
import { CampaignDetailsContext } from "../../../App";
import Btn from "../elements/Btn";
import BtnContainer from "../elements/BtnContainer";
import Headline from "../elements/Headline";
import Subcopy from "../elements/Subcopy";
import ImgUpload from "../elements/ImgUpload";
import styles from "../../../style/EmailFramework.module.css";

function Event() {
  return (
    <div className={`${styles.eventSingle} flex`}>
      <div className={styles.column}>
        <ImgUpload />
      </div>
      <div className={styles.column}>
        <Headline type="4" />
        <Subcopy>Lorem ipsum dolor sit amet, consectetur.</Subcopy>
      </div>
    </div>
  );
}

export default function Events() {
  const { secondaryStyles } = useContext(CampaignDetailsContext);

  return (
    <div
      id="events"
      className={`${styles.containerComponent} ${styles[secondaryStyles.textColor]} flex flex-col gap-8 `}
      style={{ backgroundColor: secondaryStyles.bgColor }}
    >
      <Headline type="2" />
      <Event />
      <Event />
      <Event />
      <BtnContainer>
        <Btn
          bgColor={secondaryStyles.secondaryCtaBgColor}
          textColor={secondaryStyles.secondaryCtaTextColor}
          label="Lorem ipsum"
        />
      </BtnContainer>
    </div>
  );
}
