import { useState, createContext } from "react";
import "./App.css";
import EmailFramework from "./components/EmailFramework/EmailFramework";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

export const CampaignDetailsContext = createContext();

function App() {
  const DEFAULT_COLORS = {
    container: "#F6F5F3",
    bg: "#FFFFFF",
  };

  const [campaignDetails, setCampaignDetails] = useState({
    campaignName: "",
    owner: "",
  });
  const [color, setColor] = useState(DEFAULT_COLORS);

  const handleCampaignDetailsChange = (e) => {
    const { name, value } = e.target;
    setCampaignDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleColorChange = (e) => {
    const { name, value } = e.target;
    setColor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const contextValue = {
    campaignDetails,
    handleCampaignDetailsChange,
    color,
    handleColorChange,
  };

  return (
    <>
      <Header />
      <main
        id="email"
        className="container"
        style={{ backgroundColor: color.container }}
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
