import Btn from "../elements/Btn";
import BtnContainer from "../elements/BtnContainer";
import Headline from "../elements/Headline";
import Subcopy from "../elements/Subcopy";
import style from "../../../style/EmailFramework.module.css";

function Event() {
  return (
    <div className={`${style.eventSingle} flex`}>
      <div className={style.column}>
        <img
          src="https://placehold.co/180x188/F1BEDB/000/png?text=Image"
          alt=""
        />
      </div>
      <div className={style.column}>
        <Headline type="4" />
        <Subcopy>Lorem ipsum dolor sit amet, consectetur.</Subcopy>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <div
      id="events"
      className={`${style.containerComponent} flex flex-col gap-8`}
    >
      <Headline type="2" />
      <Event />
      <Event />
      <Event />
      <BtnContainer>
        <Btn type="secondary" label="Lorem ipsum" />
      </BtnContainer>
    </div>
  );
}
