import Headline from "../elements/Headline";
import Subcopy from "../elements/Subcopy";
import style from "../../../style/EmailFramework.module.css";

function ProductSingle() {
  return (
    <div className={`${style.column} flex flex-col`}>
      <img
        src="https://placehold.co/600x600/F1BEDB/000/png?text=Image"
        alt=""
      />
      <Headline type="4" />
      <Subcopy bg={"bg"}>Lorem ipsum dolor sit amet, consectetur.</Subcopy>
    </div>
  );
}

export default function Product3x() {
  return (
    <div
      id="product-3x"
      className={`${style.containerComponent} bg flex gap-8`}
    >
      <ProductSingle />
      <ProductSingle />
      <ProductSingle />
    </div>
  );
}
