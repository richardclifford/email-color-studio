import { useContext } from "react";
import { CampaignDetailsContext } from "../../../App";
import Badge from "../elements/Badge";
import Btn from "../elements/Btn";
import BtnContainer from "../elements/BtnContainer";
import Disclaimer from "../elements/Disclaimer";
import Headline from "../elements/Headline";
import Subcopy from "../elements/Subcopy";
import ImgUpload from "../elements/ImgUpload";
import styles from "../../../style/EmailFramework.module.css";

export default function Product1x({
  isTransparent = false,
  hasImg = true,
  hasCta = true,
  hasDisclaimer = true,
  btnType = "secondary",
}) {
  const { secondaryStyles } = useContext(CampaignDetailsContext);

  return (
    <div
      id="product-1x"
      className={`${styles.containerComponent} ${styles[secondaryStyles.textColor]} ${isTransparent ? `${styles.transparent}` : ""}`}
      style={{ backgroundColor: !isTransparent ? secondaryStyles.bgColor : "" }}
    >
      {hasImg && <ImgUpload />}
      <Badge color={secondaryStyles.badgeColor} />
      <Headline type="2" />
      <Subcopy isTransparent={isTransparent} />
      {hasCta && (
        <BtnContainer>
          <Btn
            type={btnType}
            bgColor={secondaryStyles.secondaryCtaBgColor}
            textColor={secondaryStyles.secondaryCtaTextColor}
          />
          <Btn
            type={btnType}
            bgColor={secondaryStyles.secondaryCtaBgColor}
            textColor={secondaryStyles.secondaryCtaTextColor}
            label="Ipsum"
          />
          <Btn
            type={btnType}
            bgColor={secondaryStyles.secondaryCtaBgColor}
            textColor={secondaryStyles.secondaryCtaTextColor}
            label="Dolor"
          />
          <Btn
            type={btnType}
            bgColor={secondaryStyles.secondaryCtaBgColor}
            textColor={secondaryStyles.secondaryCtaTextColor}
            label="Sit"
          />
          <Btn
            type={btnType}
            bgColor={secondaryStyles.secondaryCtaBgColor}
            textColor={secondaryStyles.secondaryCtaTextColor}
            label="Amet"
          />
          <Btn
            type={btnType}
            bgColor={secondaryStyles.secondaryCtaBgColor}
            textColor={secondaryStyles.secondaryCtaTextColor}
            label="Consectetur"
          />
        </BtnContainer>
      )}
      {hasDisclaimer && <Disclaimer />}
    </div>
  );
}
