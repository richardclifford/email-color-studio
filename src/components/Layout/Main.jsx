import { useContext } from "react";
import { CampaignDetailsContext } from "../../context/CampaignContext";

export default function Main({ children }) {
  const { emailBg } = useContext(CampaignDetailsContext);

  return (
    <main
      id="email"
      className="container"
      style={{ backgroundColor: emailBg.container }}
    >
      {children}
    </main>
  );
}
