import Badge from "../elements/Badge";
import Btn from "../elements/Btn";
import BtnContainer from "../elements/BtnContainer";
import Disclaimer from "../elements/Disclaimer";
import Headline from "../elements/Headline";
import Subcopy from "../elements/Subcopy";
import styles from "../../../style/EmailFramework.module.css";
import ImgUpload from "../elements/ImgUpload";

export default function Hero({ colorData }) {
  return (
    <div
      id="hero"
      className={`${styles.containerComponent} ${styles[colorData.textColor]} `}
      style={{ backgroundColor: colorData.bgColor }}
    >
      <ImgUpload />
      <Badge color={colorData.badgeColor} />
      <Headline type="1" />
      <Subcopy />
      <BtnContainer>
        <Btn
          type="primary"
          bgColor={colorData.primaryCtaBgColor}
          textColor={colorData.primaryCtaTextColor}
        />
      </BtnContainer>
      <BtnContainer>
        <Btn
          type="secondary"
          bgColor={colorData.secondaryCtaBgColor}
          textColor={colorData.secondaryCtaTextColor}
        />
        <Btn
          type="secondary"
          label="Ipsum"
          bgColor={colorData.secondaryCtaBgColor}
          textColor={colorData.secondaryCtaTextColor}
        />
        <Btn
          type="secondary"
          label="Dolor"
          bgColor={colorData.secondaryCtaBgColor}
          textColor={colorData.secondaryCtaTextColor}
        />
        <Btn
          type="secondary"
          label="Sit"
          bgColor={colorData.secondaryCtaBgColor}
          textColor={colorData.secondaryCtaTextColor}
        />
        <Btn
          type="secondary"
          label="Amet"
          bgColor={colorData.secondaryCtaBgColor}
          textColor={colorData.secondaryCtaTextColor}
        />
        <Btn
          type="secondary"
          label="Consectetur"
          bgColor={colorData.secondaryCtaBgColor}
          textColor={colorData.secondaryCtaTextColor}
        />
        <Btn
          type="secondary"
          label="Consectetur"
          bgColor={colorData.secondaryCtaBgColor}
          textColor={colorData.secondaryCtaTextColor}
        />
        <Btn
          type="secondary"
          label="Consectetur"
          bgColor={colorData.secondaryCtaBgColor}
          textColor={colorData.secondaryCtaTextColor}
        />
      </BtnContainer>
      <Disclaimer text="Valid online only for a limited time. Select styles. While quantities last. Offer may not be valid in conjunction with other sales or products in this email." />
    </div>
  );
}
