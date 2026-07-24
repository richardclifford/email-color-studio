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
  btnType = "subSecondary",
}) {
  const { subStyles } = useContext(CampaignDetailsContext);

  return (
    <div
      id="product-1x"
      className={`${styles.containerComponent} ${isTransparent ? styles[subStyles.transitionBodyTextColor] : styles[subStyles.subBodyTextColor]} ${isTransparent ? `${styles.transparent}` : ""}`}
      style={{ backgroundColor: !isTransparent ? subStyles.bgColor : "" }}
    >
      {hasImg && <ImgUpload />}
      <Badge
        color={
          isTransparent ? subStyles.transitionBadgeColor : subStyles.badgeColor
        }
      />
      <Headline type="2" />
      <Subcopy isTransparent={isTransparent} />
      {hasCta && (
        <BtnContainer>
          <Btn
            type={btnType}
            bgColor={
              btnType === "tertiary"
                ? subStyles.tertiaryCtaBgColor
                : subStyles.subSecondaryCtaBgColor
            }
            textColor={
              btnType === "tertiary"
                ? subStyles.tertiaryCtaTextColor
                : subStyles.subSecondaryCtaTextColor
            }
          />
          <Btn
            type={btnType}
            bgColor={
              btnType === "tertiary"
                ? subStyles.tertiaryCtaBgColor
                : subStyles.subSecondaryCtaBgColor
            }
            textColor={
              btnType === "tertiary"
                ? subStyles.tertiaryCtaTextColor
                : subStyles.subSecondaryCtaTextColor
            }
            label="Ipsum"
          />
          <Btn
            type={btnType}
            bgColor={
              btnType === "tertiary"
                ? subStyles.tertiaryCtaBgColor
                : subStyles.subSecondaryCtaBgColor
            }
            textColor={
              btnType === "tertiary"
                ? subStyles.tertiaryCtaTextColor
                : subStyles.subSecondaryCtaTextColor
            }
            label="Dolor"
          />
          <Btn
            type={btnType}
            bgColor={
              btnType === "tertiary"
                ? subStyles.tertiaryCtaBgColor
                : subStyles.subSecondaryCtaBgColor
            }
            textColor={
              btnType === "tertiary"
                ? subStyles.tertiaryCtaTextColor
                : subStyles.subSecondaryCtaTextColor
            }
            label="Sit"
          />
          <Btn
            type={btnType}
            bgColor={
              btnType === "tertiary"
                ? subStyles.tertiaryCtaBgColor
                : subStyles.subSecondaryCtaBgColor
            }
            textColor={
              btnType === "tertiary"
                ? subStyles.tertiaryCtaTextColor
                : subStyles.subSecondaryCtaTextColor
            }
            label="Amet"
          />
          <Btn
            type={btnType}
            bgColor={
              btnType === "tertiary"
                ? subStyles.tertiaryCtaBgColor
                : subStyles.subSecondaryCtaBgColor
            }
            textColor={
              btnType === "tertiary"
                ? subStyles.tertiaryCtaTextColor
                : subStyles.subSecondaryCtaTextColor
            }
            label="ConsubSectetur"
          />
        </BtnContainer>
      )}
      {hasDisclaimer && <Disclaimer />}
    </div>
  );
}
