import { createContext, useState, useRef } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

import html2canvas from "html2canvas";

export const CampaignDetailsContext = createContext();

export function CampaignProvider({ children }) {
  const DEFAULT_CAMPAIGN_DETAILS = {
    campaignName: "",
    owner: "",
  };
  const DEFAULT_EMAIL_BG = {
    container: "#F6F5F3",
  };
  const DEFAULT_HERO_STYLES = {
    type: "hero",
    bgColor: "#FFFFFF",
    badgeColor: "#161313",
    heroBodyTextColor: "dark",
    primaryCtaBgColor: "#161313",
    primaryCtaTextColor: "light",
    secondaryCtaBgColor: "#E0DCD9",
    secondaryCtaTextColor: "dark",
  };
  const DEFAULT_SUB_STYLES = {
    bgColor: "#FFFFFF",
    badgeColor: "#161313",
    transitionBadgeColor: "#161313",
    transitionBodyTextColor: "dark",
    subBodyTextColor: "dark",
    subSecondaryCtaBgColor: "#E0DCD9",
    subSecondaryCtaTextColor: "dark",
    subTertiaryCtaBgColor: "#E0DCD9",
    subTertiaryCtaTextColor: "dark",
  };
  const EXPORTED_TEXT_COLORS = {
    light: "#FFFFFF",
    dark: "#161313",
  };
  const [campaignDetails, setCampaignDetails] = useLocalStorage(
    "campaignDetails",
    DEFAULT_CAMPAIGN_DETAILS,
  );
  const [emailBg, setEmailBg] = useLocalStorage("emailBg", DEFAULT_EMAIL_BG);
  const [heroStyles, setHeroStyles] = useLocalStorage(
    "heroStyles",
    DEFAULT_HERO_STYLES,
  );
  const [subStyles, setSubStyles] = useLocalStorage(
    "subStyles",
    DEFAULT_SUB_STYLES,
  );
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef();

  const handleCampaignDetailsChange = (e) => {
    const { name, value } = e.target;
    setCampaignDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEmailBgChange = (e) => {
    const { name, value } = e.target;
    setEmailBg((prevState) => ({
      ...prevState,
      [name]: value.length <= 1 ? setEmailBg(DEFAULT_EMAIL_BG) : value,
    }));
  };

  const handleHeroStylesChange = (e) => {
    const { name, value } = e.target;
    const newValue = value.length <= 1 ? DEFAULT_HERO_STYLES[name] : value;

    setHeroStyles((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubStylesChange = (e) => {
    const { name, value } = e.target;
    const newValue = value.length <= 1 ? DEFAULT_SUB_STYLES[name] : value;

    setSubStyles((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleScreenshotCapture = async () => {
    const canvas = await html2canvas(emailRef.current, { allowTaint: true });
    const dataURL = canvas.toDataURL("image/jpeg");

    const screenshotLink = document.createElement("a");
    screenshotLink.href = dataURL;
    screenshotLink.download = `${campaignDetails.campaignName.toLowerCase().replace(/\s+/g, "-")}-email-preview.jpg`;
    screenshotLink.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 100)); // Simulates an API call
      const fileContent =
        `Campaign name: ${campaignDetails.campaignName}\n` +
        `Campaign owner: ${campaignDetails.owner}\n` +
        `\n` +
        `emailBgColor="${emailBg.container}"\n` +
        `\n` +
        `heroCardBgColor="${heroStyles.bgColor}"\n` +
        `heroBadgeColor="${heroStyles.badgeColor}"\n` +
        `heroTextThemeDefault="${heroStyles.heroBodyTextColor == "dark" ? EXPORTED_TEXT_COLORS.dark : EXPORTED_TEXT_COLORS.light}"\n` +
        `heroPrimaryCtaBgColor="${heroStyles.primaryCtaBgColor}"\n` +
        `heroPrimaryCtaTextTheme="${heroStyles.primaryCtaTextColor == "dark" ? EXPORTED_TEXT_COLORS.dark : EXPORTED_TEXT_COLORS.light}"\n` +
        `heroSecondaryCtaBgColor="${heroStyles.secondaryCtaBgColor}"\n` +
        `heroSecondaryCtaTextTheme="${heroStyles.secondaryCtaTextColor == "dark" ? EXPORTED_TEXT_COLORS.dark : EXPORTED_TEXT_COLORS.light}"\n` +
        `heroHorizontalRuleColor="${heroStyles.heroBodyTextColor == "dark" ? EXPORTED_TEXT_COLORS.dark : EXPORTED_TEXT_COLORS.light}"\n` +
        `\n` +
        `subCardBgColor="${subStyles.bgColor}"\n` +
        `subBadgeColor=${subStyles.badgeColor}"\n` +
        `subTextThemeDefault="${subStyles.subBodyTextColor == "dark" ? EXPORTED_TEXT_COLORS.dark : EXPORTED_TEXT_COLORS.light}"\n` +
        `subSecondaryCtaBgColor="${subStyles.subSecondaryCtaBgColor}"\n` +
        `subSecondaryCtaTextTheme="${subStyles.subSecondaryCtaTextColor == "dark" ? EXPORTED_TEXT_COLORS.dark : EXPORTED_TEXT_COLORS.light}"\n` +
        `subTertiaryCtaBgColor="${subStyles.subTertiaryCtaBgColor}"\n` +
        `subTertiaryCtaTextTheme="${subStyles.subTertiaryCtaTextColor == "dark" ? EXPORTED_TEXT_COLORS.dark : EXPORTED_TEXT_COLORS.light}"\n` +
        `subHorizontalRuleColor="${subStyles.subBodyTextColor == "dark" ? EXPORTED_TEXT_COLORS.dark : EXPORTED_TEXT_COLORS.light}"\n` +
        `\n` +
        `transitionBadgeColor="${subStyles.transitionBadgeColor}"\n` +
        `transitionTextThemeDefault="${subStyles.subTertiaryCtaTextColor == "dark" ? EXPORTED_TEXT_COLORS.dark : EXPORTED_TEXT_COLORS.light}"\n` +
        `transitionHorizontalRuleColor="${subStyles.subTertiaryCtaTextColor == "dark" ? EXPORTED_TEXT_COLORS.dark : EXPORTED_TEXT_COLORS.light}"\n`;

      const blob = new Blob([fileContent], { type: "text/plain" });
      const fileDownloadUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = fileDownloadUrl;
      link.download = `${campaignDetails.campaignName.toLowerCase().replace(/\s+/g, "-")}-campaign-colors.txt`;
      document.body.appendChild(link);
      link.click();

      //cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(fileDownloadUrl);

      // capture/download screenshot
      handleScreenshotCapture();
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    (setCampaignDetails({
      campaignName: "",
      owner: "",
    }),
      setEmailBg(DEFAULT_EMAIL_BG),
      setHeroStyles(DEFAULT_HERO_STYLES),
      setSubStyles(DEFAULT_SUB_STYLES));
  };

  const contextValue = {
    campaignDetails,
    handleCampaignDetailsChange,
    emailBg,
    handleEmailBgChange,
    heroStyles,
    handleHeroStylesChange,
    subStyles,
    handleSubStylesChange,
    emailRef,
    handleSubmit,
    handleReset,
    isLoading,
  };

  return (
    <CampaignDetailsContext.Provider value={contextValue}>
      {children}
    </CampaignDetailsContext.Provider>
  );
}
