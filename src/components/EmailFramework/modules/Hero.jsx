import Badge from "../elements/Badge";
import Btn from "../elements/Btn";
import BtnContainer from "../elements/BtnContainer";
import Disclaimer from "../elements/Disclaimer";
import Headline from "../elements/Headline";
import Subcopy from "../elements/Subcopy";
import style from "../../../style/EmailFramework.module.css";
import ImgUpload from "../elements/ImgUpload";

export default function Hero({ colorData }) {
  return (
    <div
      id="hero"
      className={`${style.containerComponent} ${style.bg}`}
      style={{ backgroundColor: colorData.bg }}
    >
      <ImgUpload />
      {/* <img
        src="https://placehold.co/1200x1200/F1BEDB/000/png?text=Image"
        alt=""
      /> */}
      <Badge />
      <Headline type="1" />
      <Subcopy />
      <BtnContainer>
        <Btn type="primary" />
      </BtnContainer>
      <BtnContainer>
        <Btn type="secondary" />
        <Btn type="secondary" label="Ipsum" />
        <Btn type="secondary" label="Dolor" />
        <Btn type="secondary" label="Sit" />
        <Btn type="secondary" label="Amet" />
        <Btn type="secondary" label="Consectetur" />
        <Btn type="secondary" label="Consectetur" />
        <Btn type="secondary" label="Consectetur" />
      </BtnContainer>
      <Disclaimer text="Valid online only for a limited time. Select styles. While quantities last. Offer may not be valid in conjunction with other sales or products in this email." />
    </div>
  );
}
