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

function ProductSingle() {
  const { secondaryStyles } = useContext(CampaignDetailsContext);

  return (
    <div className={`${styles.column} flex flex-col`}>
      <ImgUpload />
      <Badge />
      <Headline type="3" />
      <Subcopy bg={"bg"}>Lorem ipsum dolor sit amet, consectetur.</Subcopy>
      <BtnContainer>
        <Btn
          bgColor={secondaryStyles.secondaryCtaBgColor}
          textColor={secondaryStyles.secondaryCtaTextColor}
        />
      </BtnContainer>
      <Disclaimer text="Excepteur sint occaecat cupidatat non proident." />
    </div>
  );
}

export default function Product2x() {
  const { secondaryStyles } = useContext(CampaignDetailsContext);

  return (
    <div
      id="product-2x"
      className={`${styles.containerComponent} ${styles[secondaryStyles.textColor]} bg flex gap-8`}
      style={{ backgroundColor: secondaryStyles.bgColor }}
    >
      <ProductSingle />
      <ProductSingle />
    </div>
  );
}
