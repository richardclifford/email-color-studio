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
  const { subStyles } = useContext(CampaignDetailsContext);

  return (
    <div
      id="product-1x"
      className={`${styles.containerComponent} ${styles[subStyles.subBodyTextColor]} ${isTransparent ? `${styles.transparent}` : ""}`}
      style={{ backgroundColor: !isTransparent ? subStyles.bgColor : "" }}
    >
      {hasImg && <ImgUpload />}
      <Badge color={subStyles.badgeColor} />
      <Headline type="2" />
      <Subcopy isTransparent={isTransparent} />
      {hasCta && (
        <BtnContainer>
          <Btn
            type={btnType}
            bgColor={subStyles.secondaryCtaBgColor}
            textColor={subStyles.secondaryCtaTextColor}
          />
          <Btn
            type={btnType}
            bgColor={subStyles.secondaryCtaBgColor}
            textColor={subStyles.secondaryCtaTextColor}
            label="Ipsum"
          />
          <Btn
            type={btnType}
            bgColor={subStyles.secondaryCtaBgColor}
            textColor={subStyles.secondaryCtaTextColor}
            label="Dolor"
          />
          <Btn
            type={btnType}
            bgColor={subStyles.secondaryCtaBgColor}
            textColor={subStyles.secondaryCtaTextColor}
            label="Sit"
          />
          <Btn
            type={btnType}
            bgColor={subStyles.secondaryCtaBgColor}
            textColor={subStyles.secondaryCtaTextColor}
            label="Amet"
          />
          <Btn
            type={btnType}
            bgColor={subStyles.secondaryCtaBgColor}
            textColor={subStyles.secondaryCtaTextColor}
            label="Consectetur"
          />
        </BtnContainer>
      )}
      {hasDisclaimer && <Disclaimer />}
    </div>
  );
}
