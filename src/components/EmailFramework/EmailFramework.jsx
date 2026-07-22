import Hero from "./modules/Hero.jsx";
import Spacer from "./modules/Spacer.jsx";
import Product1x from "./modules/Product1x.jsx";
import Product2x from "./modules/Product2x.jsx";
import Product3x from "./modules/Product3x.jsx";
import ProductHalf from "./modules/ProductHalf.jsx";
import Events from "./modules/Events.jsx";
import styles from "../../style/EmailFramework.module.css";

export default function EmailFramework() {
  return (
    <div className={styles.containerEmail}>
      <Hero />
      <Product1x
        isTransparent={true}
        hasImg={false}
        hasCta={false}
        hasBottomPadding={true}
      />
      <Spacer />
      <Product1x hasImg={false} btnType="tertiary" hasDisclaimer={false} />
      <Spacer />
      <Product1x />

      <Product2x />
      <ProductHalf />
      <ProductHalf reverse={true} />
      <Spacer />
      <Product3x />
      <Spacer />
      <Events />
    </div>
  );
}
