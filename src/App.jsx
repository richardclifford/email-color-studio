import "./App.css";
import EmailFramework from "./components/EmailFramework/EmailFramework";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { CampaignProvider } from "./context/CampaignContext";
import Main from "./components/Layout/Main";

function App() {
  return (
    <>
      <Header />
      <CampaignProvider>
        <Main>
          <EmailFramework />
          <Sidebar />
        </Main>
      </CampaignProvider>
    </>
  );
}

export default App;
