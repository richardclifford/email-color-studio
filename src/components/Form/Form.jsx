import { useContext } from "react";
import { CampaignDetailsContext } from "../../context/CampaignContext";
import styles from "./Form.module.scss";
import LayoutContainer from "../Layout/LayoutContainer/LayoutContainer";
import Row from "../Layout/Row";
import Column from "../Layout/Column/Column";
import InputColor from "./InputColor/InputColor";
import BodyCopyColorToggle from "./BodyCopyColorToggle/BodyCopyColorToggle";
import CtaTextColorToggle from "./CtaTextColorToggle/CtaTextColorToggle";
import InputText from "./InputText/InputText";
import BtnExport from "./BtnExport/BtnExport";
import BtnReset from "./BtnReset/BtnReset";

export default function Form() {
  const {
    campaignDetails,
    handleCampaignDetailsChange,
    emailBg,
    handleEmailBgChange,
    heroStyles,
    handleHeroStylesChange,
    subStyles,
    handleSubStylesChange,
    handleSubmit,
  } = useContext(CampaignDetailsContext);

  return (
    <div className={`${styles.sidebar}`}>
      <form
        action=""
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex flex-col gap-3"
        data-testid="form"
      >
        <Row>
          <Column>
            <InputText
              label="Campaign or Brand"
              name="campaignName"
              value={campaignDetails.campaignName}
              onValueChange={handleCampaignDetailsChange}
            />
          </Column>
          <Column>
            <InputText
              label="Owner"
              name="owner"
              value={campaignDetails.owner}
              onValueChange={handleCampaignDetailsChange}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <InputColor
              name="container"
              label="Email Background"
              value={emailBg.container}
              onValueChange={handleEmailBgChange}
            />
          </Column>
          <Column></Column>
        </Row>
        <LayoutContainer heading="Hero Styles">
          <Row>
            <Column>
              <InputColor
                id="hero-bg"
                label="Hero Background"
                name="bgColor"
                value={heroStyles.bgColor}
                onValueChange={handleHeroStylesChange}
              />
            </Column>
            <Column>
              <InputColor
                id="hero-badge"
                label="Hero Badge"
                name="badgeColor"
                value={heroStyles.badgeColor}
                onValueChange={handleHeroStylesChange}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <BodyCopyColorToggle
                id="hero-body-copy"
                label="Hero Body Copy"
                name="heroBodyTextColor"
                selectedValue={heroStyles.heroBodyTextColor}
                handleChange={handleHeroStylesChange}
              />
            </Column>
            <Column>
              <InputColor
                id="hero-primary-cta"
                label="Hero Primary CTA"
                name="primaryCtaBgColor"
                value={heroStyles.primaryCtaBgColor}
                onValueChange={handleHeroStylesChange}
              >
                <CtaTextColorToggle
                  name="primaryCtaTextColor"
                  selectedValue={heroStyles.primaryCtaTextColor}
                  handleChange={handleHeroStylesChange}
                />
              </InputColor>
            </Column>
          </Row>
          <Row>
            <Column>
              <InputColor
                id="hero-secondary-cta"
                label="Hero Secondary CTA"
                name="secondaryCtaBgColor"
                value={heroStyles.secondaryCtaBgColor}
                onValueChange={handleHeroStylesChange}
              >
                <CtaTextColorToggle
                  name="secondaryCtaTextColor"
                  selectedValue={heroStyles.secondaryCtaTextColor}
                  handleChange={handleHeroStylesChange}
                />
              </InputColor>
            </Column>
            <Column></Column>
          </Row>
        </LayoutContainer>
        <LayoutContainer heading="Sub Styles">
          <Row>
            <Column>
              <InputColor
                id="sub-transition-badge"
                label="Transition Badge"
                name="transitionBadgeColor"
                value={subStyles.transitionBadgeColor}
                onValueChange={handleSubStylesChange}
              />
            </Column>
            <Column>
              <BodyCopyColorToggle
                id="sub-transition-body-copy"
                label="Transition Body Copy"
                name="transitionBodyTextColor"
                selectedValue={subStyles.transitionBodyTextColor}
                handleChange={handleSubStylesChange}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <InputColor
                id="sub-bg"
                label="Sub Background"
                name="subBgColor"
                value={subStyles.subBgColor}
                onValueChange={handleSubStylesChange}
              />
            </Column>
            <Column>
              <InputColor
                id="sub-badge"
                label="Sub Badge"
                name="subBadgeColor"
                value={subStyles.subBadgeColor}
                onValueChange={handleSubStylesChange}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <BodyCopyColorToggle
                id="sub-body-copy"
                label="Sub Body Copy"
                name="subBodyTextColor"
                selectedValue={subStyles.subBodyTextColor}
                handleChange={handleSubStylesChange}
              />
            </Column>
            <Column>
              <InputColor
                id="sub-secondary-cta"
                label="Sub Secondary CTA"
                name="subSecondaryCtaBgColor"
                value={subStyles.subSecondaryCtaBgColor}
                onValueChange={handleSubStylesChange}
              >
                <CtaTextColorToggle
                  name="subSecondaryCtaTextColor"
                  selectedValue={subStyles.subSecondaryCtaTextColor}
                  handleChange={handleSubStylesChange}
                />
              </InputColor>
            </Column>
          </Row>
          <Row>
            <Column>
              <InputColor
                id="sub-tertiary-cta"
                label="Sub Tertiary CTA"
                name="subTertiaryCtaBgColor"
                value={subStyles.subTertiaryCtaBgColor}
                onValueChange={handleSubStylesChange}
              >
                <CtaTextColorToggle
                  name="subTertiaryCtaTextColor"
                  selectedValue={subStyles.subTertiaryCtaTextColor}
                  handleChange={handleSubStylesChange}
                />
              </InputColor>
            </Column>
            <Column></Column>
          </Row>
        </LayoutContainer>
        <div className="flex flex-col gap-1">
          <p>
            Before exporting your theme, verify that all color combinations meet
            AA accessibility standards using the{" "}
            <a
              href="https://webaim.org/resources/contrastchecker/"
              target="_blank"
            >
              WebAIM Contrast Checker
            </a>
            .
          </p>
          <p>
            Export your theme and share the .txt file with Emily Linner via
            Teams. Your theme will be converted to a campaign one-sheeter and
            shared with the team.
          </p>
        </div>
        <BtnExport />
        <BtnReset />
      </form>
    </div>
  );
}
