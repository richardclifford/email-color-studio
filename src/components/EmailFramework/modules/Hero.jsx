import { useContext } from "react";
import { CampaignDetailsContext } from "../../../context/CampaignContext";
import Badge from "../elements/Badge";
import Btn from "../elements/Btn";
import BtnContainer from "../elements/BtnContainer";
import Disclaimer from "../elements/Disclaimer";
import Headline from "../elements/Headline";
import Subcopy from "../elements/Subcopy";
import ImgUpload from "../elements/ImgUpload";
import styles from "../EmailFramework.module.scss";

export default function Hero() {
  const { heroStyles } = useContext(CampaignDetailsContext);

  return (
    <div
      id="hero"
      className={`${styles.containerComponent} ${styles[heroStyles.heroBodyTextColor]}`}
      style={{ backgroundColor: heroStyles.bgColor }}
    >
      <ImgUpload />
      <Badge color={heroStyles.badgeColor} />
      <Headline type="1" />
      <Subcopy />
      <BtnContainer>
        <Btn
          type="primary"
          bgColor={heroStyles.primaryCtaBgColor}
          textColor={heroStyles.primaryCtaTextColor}
        />
      </BtnContainer>
      <BtnContainer>
        <Btn
          type="secondary"
          bgColor={heroStyles.secondaryCtaBgColor}
          textColor={heroStyles.secondaryCtaTextColor}
        />
        <Btn
          type="secondary"
          label="Ipsum"
          bgColor={heroStyles.secondaryCtaBgColor}
          textColor={heroStyles.secondaryCtaTextColor}
        />
        <Btn
          type="secondary"
          label="Dolor"
          bgColor={heroStyles.secondaryCtaBgColor}
          textColor={heroStyles.secondaryCtaTextColor}
        />
        <Btn
          type="secondary"
          label="Sit"
          bgColor={heroStyles.secondaryCtaBgColor}
          textColor={heroStyles.secondaryCtaTextColor}
        />
        <Btn
          type="secondary"
          label="Amet"
          bgColor={heroStyles.secondaryCtaBgColor}
          textColor={heroStyles.secondaryCtaTextColor}
        />
        <Btn
          type="secondary"
          label="Consectetur"
          bgColor={heroStyles.secondaryCtaBgColor}
          textColor={heroStyles.secondaryCtaTextColor}
        />
        <Btn
          type="secondary"
          label="Consectetur"
          bgColor={heroStyles.secondaryCtaBgColor}
          textColor={heroStyles.secondaryCtaTextColor}
        />
        <Btn
          type="secondary"
          label="Consectetur"
          bgColor={heroStyles.secondaryCtaBgColor}
          textColor={heroStyles.secondaryCtaTextColor}
        />
      </BtnContainer>
      <Disclaimer text="Valid online only for a limited time. Select styles. While quantities last. Offer may not be valid in conjunction with other sales or products in this email." />
    </div>
  );
}
