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
    heroBodyTextColor: "dark",
    primaryCtaBgColor: "#161313",
    primaryCtaTextColor: "light",
    secondaryCtaBgColor: "#E0DCD9",
    secondaryCtaTextColor: "dark",
  };

  const DEFAULT_SUB_STYLES = {
    bgColor: "#FFFFFF",
    badgeColor: "#161313",
    subBodyTextColor: "dark",
    secondaryCtaBgColor: "#E0DCD9",
    secondaryCtaTextColor: "dark",
  };

  const [campaignDetails, setCampaignDetails] = useState({
    campaignName: "",
    owner: "",
  });
  const [emailBg, setEmailBg] = useState(DEFAULT_EMAIL_BG);
  const [heroStyles, setHeroStyles] = useState(DEFAULT_HERO_STYLES);
  const [subStyles, setSubStyles] = useState(DEFAULT_SUB_STYLES);

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
