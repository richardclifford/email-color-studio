import { useState, createContext } from "react";
import "./App.css";
import EmailFramework from "./components/EmailFramework/EmailFramework";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

export const CampaignDetailsContext = createContext();

function App() {
  const DEFAULT_EMAIL_BG = {
    container: "#F6F5F3",
  };

  const DEFAULT_HERO_STYLES = {
    type: "hero",
    bgColor: "#FFFFFF",
    badgeColor: "#161313",
    textColor: "light",
    primaryCtaBgColor: "#161313",
    primaryCtaTextColor: "light",
    secondaryCtaBgColor: "#a8ad09",
    secondaryCtaTextColor: "dark",
  };

  const DEFAULT_SECONDARY_STYLES = {
    bgColor: "#d73993",
    badgeColor: "#e4916a",
    SubTextColor: "dark",
    subSecondaryCtaBgColor: "#1c76d6",
    subSecondaryCtaTextColor: "dark",
  };

  const [campaignDetails, setCampaignDetails] = useState({
    campaignName: "",
    owner: "",
  });
  const [emailBg, setEmailBg] = useState(DEFAULT_EMAIL_BG);
  const [heroStyles, setHeroStyles] = useState(DEFAULT_HERO_STYLES);
  const [secondaryStyles, setSecondaryStyles] = useState(
    DEFAULT_SECONDARY_STYLES,
  );

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

  const handleSecondaryStylesChange = (e) => {
    const { name, value } = e.target;
    setSecondaryStyles((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReset = () => {
    (setEmailBg(DEFAULT_EMAIL_BG),
      setHeroStyles(DEFAULT_HERO_STYLES),
      setSecondaryStyles(DEFAULT_SECONDARY_STYLES));
  };

  const contextValue = {
    campaignDetails,
    handleCampaignDetailsChange,
    emailBg,
    handleEmailBgChange,
    heroStyles,
    handleHeroStylesChange,
    secondaryStyles,
    handleSecondaryStylesChange,
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
