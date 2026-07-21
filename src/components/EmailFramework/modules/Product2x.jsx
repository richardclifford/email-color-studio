import Badge from "../elements/Badge";
import Btn from "../elements/Btn";
import BtnContainer from "../elements/BtnContainer";
import Disclaimer from "../elements/Disclaimer";
import Headline from "../elements/Headline";
import Subcopy from "../elements/Subcopy";
import style from "../../../style/EmailFramework.module.css";

function ProductSingle() {
  return (
    <div className={`${style.column} flex flex-col`}>
      <img
        src="https://placehold.co/1200x1200/F1BEDB/000/png?text=Image"
        alt=""
      />
      <Badge />
      <Headline type="3" />
      <Subcopy bg={"bg"}>Lorem ipsum dolor sit amet, consectetur.</Subcopy>
      <BtnContainer>
        <Btn />
      </BtnContainer>
      <Disclaimer text="Excepteur sint occaecat cupidatat non proident." />
    </div>
  );
}

export default function Product2x() {
  return (
    <div
      id="product-2x"
      className={`${style.containerComponent} bg flex gap-8`}
    >
      <ProductSingle />
      <ProductSingle />
    </div>
  );
}
