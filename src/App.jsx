import "./App.css";
import EmailFramework from "./components/EmailFramework/EmailFramework";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { CampaignProvider } from "./context/CampaignContext";
import Main from "./components/Layout/Main/Main";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <>
      <Header />
      <CampaignProvider>
        <ToastProvider>
          <Main>
            <EmailFramework />
            <Sidebar />
          </Main>
        </ToastProvider>
      </CampaignProvider>
    </>
  );
}

export default App;
