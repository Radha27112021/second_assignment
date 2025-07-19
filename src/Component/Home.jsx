import { useState } from "react";
import teamPhoto from "../assets/team-image.png";
import "../index.css";

const onboardingPhases = [
  {
    id: "01",
    label: "Client Introduction",
    info: "A Complete search of the internet has found these results was successfully verified is the most popular phase"
  },
  {
    id: "02",
    label: "Share Proposal",
    info: "A Complete search of the internet has found these results was successfully verified is the most popular phase"
  },
  {
    id: "03",
    label: "Kickoff Meeting",
    info: "A Complete search of the internet has found these results was successfully verified is the most popular phase"
  },
  {
    id: "04",
    label: "Set Workflow",
    info: "A Complete search of the internet has found these results was successfully verified is the most popular phase"
  },
];

const Home = () => {
  const [selectedPhase, setSelectedPhase] = useState("03");

  return (
    <div className="home">
      <div className="custom-layout"></div>

      <header className="home-header">
        <h1 className="home-title">Client Onboarding Process</h1>
      </header>

      <div className="home-container">
        <aside className="left-card">
          <h3 className="left-title">We value your input</h3>
          <div className="image-container">
            <img src={teamPhoto} alt="Our team" className="team-image" />
            <button className="connect-button">Connect with Team</button>
          </div>
        </aside>

        <div className="steps-container">
          {onboardingPhases.map((phase) => (
            <div
  key={phase.id}
  className={`step-box ${selectedPhase === phase.id ? "active" : ""}`}
  onClick={() => setSelectedPhase(phase.id)}
>
  <span className="step-number">{phase.id}</span>
  <div className="step-title">{phase.label}</div>
  <div className="step-description">{phase.info}</div>
</div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
