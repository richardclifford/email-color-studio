import { useContext } from "react";
import { CampaignDetailsContext } from "../../../App";
import Headline from "../elements/Headline";
import Subcopy from "../elements/Subcopy";
import ImgUpload from "../elements/ImgUpload";
import styles from "../../../style/EmailFramework.module.css";

function ProductSingle() {
  return (
    <div className={`${styles.column} flex flex-col`}>
      <ImgUpload />
      <Headline type="4" />
      <Subcopy bg={"bg"}>Lorem ipsum dolor sit amet, consectetur.</Subcopy>
    </div>
  );
}

export default function Product3x() {
  const { subStyles } = useContext(CampaignDetailsContext);

  return (
    <div
      id="product-3x"
      className={`${styles.containerComponent} ${styles[subStyles.subBodyTextColor]} bg flex gap-8`}
      style={{ backgroundColor: subStyles.bgColor }}
    >
      <ProductSingle />
      <ProductSingle />
      <ProductSingle />
    </div>
  );
}
