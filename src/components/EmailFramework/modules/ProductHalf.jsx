import Badge from "../elements/Badge";
import Btn from "../elements/Btn";
import BtnContainer from "../elements/BtnContainer";
import Disclaimer from "../elements/Disclaimer";
import Headline from "../elements/Headline";
import Subcopy from "../elements/Subcopy";
import styles from "../../../style/EmailFramework.module.css";
import ImgUpload from "../elements/ImgUpload";

export default function ProductHalf({ reverse = false }) {
  return (
    <div
      id="product-half"
      className={`${styles.containerComponent} bg flex gap-8 ${reverse ? "row-reverse" : ""}`}
    >
      <div className={styles.column}>
        <ImgUpload />
      </div>
      <div className={`${styles.column} flex flex-col justify-center`}>
        <Badge />
        <Headline type="3" />
        <Subcopy bg={"bg"}>Lorem ipsum dolor sit amet, consectetur.</Subcopy>
        <BtnContainer>
          <Btn />
        </BtnContainer>
        <Disclaimer text="Excepteur sint occaecat cupidatat non proident." />
      </div>
    </div>
  );
}
