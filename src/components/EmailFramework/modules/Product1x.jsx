import Badge from "../elements/Badge";
import Btn from "../elements/Btn";
import BtnContainer from "../elements/BtnContainer";
import Disclaimer from "../elements/Disclaimer";
import Headline from "../elements/Headline";
import Subcopy from "../elements/Subcopy";
import style from "../../../style/EmailFramework.module.css";
import ImgUpload from "../elements/ImgUpload";

export default function Product1x({
  isTransparent = false,
  hasImg = true,
  hasCta = true,
  hasDisclaimer = true,
  btnType = "secondary",
}) {
  return (
    <div
      id="product-1x"
      className={`${style.containerComponent} ${isTransparent ? `${style.transparent}` : ""}`}
    >
      {hasImg && <ImgUpload />}
      <Badge />
      <Headline type="2" />
      <Subcopy isTransparent={isTransparent} />
      {hasCta && (
        <BtnContainer>
          <Btn type={btnType} />
          <Btn type={btnType} label="Ipsum" />
          <Btn type={btnType} label="Dolor" />
          <Btn type={btnType} label="Sit" />
          <Btn type={btnType} label="Amet" />
          <Btn type={btnType} label="Consectetur" />
        </BtnContainer>
      )}
      {hasDisclaimer && <Disclaimer />}
    </div>
  );
}
