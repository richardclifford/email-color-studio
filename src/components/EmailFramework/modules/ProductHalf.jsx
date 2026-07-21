import Badge from "../elements/Badge";
import Btn from "../elements/Btn";
import BtnContainer from "../elements/BtnContainer";
import Disclaimer from "../elements/Disclaimer";
import Headline from "../elements/Headline";
import Subcopy from "../elements/Subcopy";
import style from "../../../style/EmailFramework.module.css";

export default function ProductHalf({ reverse = false }) {
  return (
    <div
      id="product-double"
      className={`${style.containerComponent} bg flex gap-8 ${reverse ? "row-reverse" : ""}`}
    >
      <div className={style.column}>
        <img
          src="https://placehold.co/600x1100/F1BEDB/000/png?text=Image"
          alt=""
        />
      </div>
      <div className={`${style.column} flex flex-col justify-center`}>
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
