import { useContext } from "react";
import { CampaignDetailsContext } from "../../../context/CampaignContext";
import Btn from "../elements/Btn";
import BtnContainer from "../elements/BtnContainer";
import Headline from "../elements/Headline";
import Subcopy from "../elements/Subcopy";
import ImgUpload from "../elements/ImgUpload";
import styles from "../EmailFramework.module.scss";

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
  const { subStyles } = useContext(CampaignDetailsContext);

  return (
    <div
      id="events"
      className={`${styles.containerComponent} ${styles[subStyles.subBodyTextColor]} flex flex-col gap-8 `}
      style={{ backgroundColor: subStyles.subBgColor }}
    >
      <Headline type="2" />
      <Event />
      <Event />
      <Event />
      <BtnContainer>
        <Btn
          bgColor={subStyles.subSecondaryCtaBgColor}
          textColor={subStyles.subSecondaryCtaTextColor}
          label="Lorem ipsum"
        />
      </BtnContainer>
    </div>
  );
}
