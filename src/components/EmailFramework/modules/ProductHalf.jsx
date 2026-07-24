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

export default function ProductHalf({ reverse = false }) {
  const { subStyles } = useContext(CampaignDetailsContext);

  return (
    <div
      id="product-half"
      className={`${styles.containerComponent} ${styles[subStyles.subBodyTextColor]} bg flex gap-8 ${reverse ? "row-reverse" : ""}`}
      style={{ backgroundColor: subStyles.bgColor }}
    >
      <div className={styles.column}>
        <ImgUpload />
      </div>
      <div className={`${styles.column} flex flex-col justify-center`}>
        <Badge color={subStyles.badgeColor} />
        <Headline type="3" />
        <Subcopy bg={"bg"}>Lorem ipsum dolor sit amet, consubSectetur.</Subcopy>
        <BtnContainer>
          <Btn
            bgColor={subStyles.subSecondaryCtaBgColor}
            textColor={subStyles.subSecondaryCtaTextColor}
          />
        </BtnContainer>
        <Disclaimer text="Excepteur sint occaecat cupidatat non proident." />
      </div>
    </div>
  );
}
