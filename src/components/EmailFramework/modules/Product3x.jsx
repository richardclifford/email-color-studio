import Headline from "../elements/Headline";
import Subcopy from "../elements/Subcopy";
import styles from "../../../style/EmailFramework.module.css";
import ImgUpload from "../elements/ImgUpload";

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
  return (
    <div
      id="product-3x"
      className={`${styles.containerComponent} bg flex gap-8`}
    >
      <ProductSingle />
      <ProductSingle />
      <ProductSingle />
    </div>
  );
}
