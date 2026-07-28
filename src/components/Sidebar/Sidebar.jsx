import { useContext } from "react";
import { CampaignDetailsContext } from "../../context/CampaignContext";
import styles from "./Sidebar.module.scss";
import LayoutContainer from "../Layout/LayoutContainer/LayoutContainer";
import Row from "../Layout/Row";
import Column from "../Layout/Column/Column";
import InputColor from "../Form/InputColor/InputColor";
import BodyCopyColorToggle from "../Form/BodyCopyColorToggle/BodyCopyColorToggle";
import CtaTextColorToggle from "../Form/CtaTextColorToggle/CtaTextColorToggle";
import InputText from "../Form/InputText/InputText";
import BtnExport from "../Form/BtnExport/BtnExport";
import BtnReset from "../Form/BtnReset/BtnReset";

export default function Sidebar() {
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
              label="Email BG"
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
                id="hero-card"
                label="Hero Card"
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
                id="sub-card"
                label="Sub Card"
                name="bgColor"
                value={subStyles.bgColor}
                onValueChange={handleSubStylesChange}
              />
            </Column>
            <Column>
              <InputColor
                id="sub-badge"
                label="Sub Badge"
                name="badgeColor"
                value={subStyles.badgeColor}
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
                name="tertiaryCtaBgColor"
                value={subStyles.tertiaryCtaBgColor}
                onValueChange={handleSubStylesChange}
              >
                <CtaTextColorToggle
                  name="tertiaryCtaTextColor"
                  selectedValue={subStyles.tertiaryCtaTextColor}
                  handleChange={handleSubStylesChange}
                />
              </InputColor>
            </Column>
            <Column></Column>
          </Row>
        </LayoutContainer>
        <p>
          Export your theme and share the .txt file with Emily Linner via Teams.
          Your theme will be converted to a campaign one-sheeter and shared with
          the team.
        </p>
        <BtnExport />
        <BtnReset />
      </form>
    </div>
  );
}
