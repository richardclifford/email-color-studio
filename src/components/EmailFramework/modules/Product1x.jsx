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
      style={{ backgroundColor: !isTransparent ? subStyles.subBgColor : "" }}
    >
      {hasImg && <ImgUpload />}
      <Badge
        color={
          isTransparent
            ? subStyles.transitionBadgeColor
            : subStyles.subBadgeColor
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
                ? subStyles.subTertiaryCtaBgColor
                : subStyles.subSecondaryCtaBgColor
            }
            textColor={
              btnType === "tertiary"
                ? subStyles.subTertiaryCtaTextColor
                : subStyles.subSecondaryCtaTextColor
            }
          />
          <Btn
            type={btnType}
            bgColor={
              btnType === "tertiary"
                ? subStyles.subTertiaryCtaBgColor
                : subStyles.subSecondaryCtaBgColor
            }
            textColor={
              btnType === "tertiary"
                ? subStyles.subTertiaryCtaTextColor
                : subStyles.subSecondaryCtaTextColor
            }
            label="Ipsum"
          />
          <Btn
            type={btnType}
            bgColor={
              btnType === "tertiary"
                ? subStyles.subTertiaryCtaBgColor
                : subStyles.subSecondaryCtaBgColor
            }
            textColor={
              btnType === "tertiary"
                ? subStyles.subTertiaryCtaTextColor
                : subStyles.subSecondaryCtaTextColor
            }
            label="Dolor"
          />
          <Btn
            type={btnType}
            bgColor={
              btnType === "tertiary"
                ? subStyles.subTertiaryCtaBgColor
                : subStyles.subSecondaryCtaBgColor
            }
            textColor={
              btnType === "tertiary"
                ? subStyles.subTertiaryCtaTextColor
                : subStyles.subSecondaryCtaTextColor
            }
            label="Sit"
          />
          <Btn
            type={btnType}
            bgColor={
              btnType === "tertiary"
                ? subStyles.subTertiaryCtaBgColor
                : subStyles.subSecondaryCtaBgColor
            }
            textColor={
              btnType === "tertiary"
                ? subStyles.subTertiaryCtaTextColor
                : subStyles.subSecondaryCtaTextColor
            }
            label="Amet"
          />
          <Btn
            type={btnType}
            bgColor={
              btnType === "tertiary"
                ? subStyles.subTertiaryCtaBgColor
                : subStyles.subSecondaryCtaBgColor
            }
            textColor={
              btnType === "tertiary"
                ? subStyles.subTertiaryCtaTextColor
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
