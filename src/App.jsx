import { useState, createContext, useRef } from "react";
import "./App.css";
import EmailFramework from "./components/EmailFramework/EmailFramework";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import html2canvas from "html2canvas";

export const CampaignDetailsContext = createContext();

function App() {
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
    tertiaryCtaBgColor: "#E0DCD9",
    tertiaryCtaTextColor: "dark",
  };

  const [campaignDetails, setCampaignDetails] = useState({
    campaignName: "",
    owner: "",
  });
  const [emailBg, setEmailBg] = useState(DEFAULT_EMAIL_BG);
  const [heroStyles, setHeroStyles] = useState(DEFAULT_HERO_STYLES);
  const [subStyles, setSubStyles] = useState(DEFAULT_SUB_STYLES);

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
      [name]: value,
    }));
  };

  const handleHeroStylesChange = (e) => {
    const { name, value } = e.target;
    setHeroStyles((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubStylesChange = (e) => {
    const { name, value } = e.target;
    setSubStyles((prevState) => ({
      ...prevState,
      [name]: value,
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const fileContent =
      `--- Campaign Lead Information ---\n\n` +
      `Details:\n` +
      `\n` +
      `Campaign name: ${campaignDetails.campaignName}\n` +
      `Campaign owner: ${campaignDetails.owner}\n` +
      `\n` +
      `Email Bg: ${emailBg.container}\n` +
      `\n` +
      `Hero Card: ${heroStyles.bgColor}\n` +
      `Hero BadgeColor: ${heroStyles.badgeColor}\n` +
      `Hero Body Copy: ${heroStyles.heroBodyTextColor}\n` +
      `Hero Primary CTA Bg Color: ${heroStyles.primaryCtaBgColor}\n` +
      `Hero Primary CTA Text Color: ${heroStyles.primaryCtaTextColor}\n` +
      `Hero Secondary CTA Bg Color: ${heroStyles.secondaryCtaBgColor}\n` +
      `Hero Secondary CTA Text Color: ${heroStyles.secondaryCtaTextColor}\n` +
      `\n` +
      `Sub Card: ${subStyles.bgColor}\n` +
      `Sub BadgeColor: ${subStyles.badgeColor}\n` +
      `Sub Body Copy: ${subStyles.subBodyTextColor}\n` +
      `Sub Secondary CTA Bg Color: ${subStyles.secondaryCtaBgColor}\n` +
      `Sub Secondary CTA Text Color: ${subStyles.secondaryCtaTextColor}\n`;

    const blob = new Blob([fileContent], { type: "text/plain" });

    const fileDownloadUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = fileDownloadUrl;
    link.download = `${campaignDetails.campaignName.toLowerCase().replace(/\s+/g, "-")}-campaign-colors.txt`;

    document.body.appendChild(link);
    link.click();

    //cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(fileDownloadUrl); // Free up memory

    // capture/download screenshot
    handleScreenshotCapture();
  };

  const handleReset = () => {
    (setEmailBg(DEFAULT_EMAIL_BG),
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
  };

  return (
    <>
      <Header />
      <main
        id="email"
        className="container"
        style={{ backgroundColor: emailBg.container }}
      >
        <CampaignDetailsContext.Provider value={contextValue}>
          <EmailFramework />
          <Sidebar />
        </CampaignDetailsContext.Provider>
      </main>
    </>
  );
}

export default App;
