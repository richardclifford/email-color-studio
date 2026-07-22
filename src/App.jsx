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
    bgColor: "#997224",
    badgeColor: "#11d828",
    textColor: "light",
    primaryCtaBgColor: "#402fa5",
    primaryCtaTextColor: "dark",
    secondaryCtaBgColor: "#a8ad09",
    secondaryCtaTextColor: "light",
  };

  const [campaignDetails, setCampaignDetails] = useState({
    campaignName: "",
    owner: "",
  });
  const [emailBg, setEmailBg] = useState(DEFAULT_EMAIL_BG);
  const [heroStyles, setHeroStyles] = useState(DEFAULT_HERO_STYLES);

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

  const contextValue = {
    campaignDetails,
    handleCampaignDetailsChange,
    emailBg,
    handleEmailBgChange,
    heroStyles,
    handleHeroStylesChange,
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
