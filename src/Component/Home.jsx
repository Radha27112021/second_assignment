import { useState } from "react";
import teamPhoto from "../assets/team-image.png";
import "./Home.css";

// Divide phases into arrays to minimize Html code
const onboardingPhases = [
  {
    id: "01",
    label: "Client Introduction",
    info: "We start with a brief introduction and understanding of your expectations. This lays the foundation for a successful partnership.",
  },
  {
    id: "02",
    label: "Share Proposal",
    info: "We present a tailored proposal that aligns with your goals and outlines the approach, timelines, and deliverables.",
  },
  {
    id: "03",
    label: "Kickoff Meeting",
    info: "A collaborative session to finalize scope, introduce team members, and define the initial workflow.",
  },
  {
    id: "04",
    label: "Set Workflow",
    info: "We establish communication channels, set up tools, and define how progress will be tracked moving forward.",
  },
];

const Home = () => {
  const [selectedPhase, setSelectedPhase] = useState("03"); //set default selected phase to 03

  return (
    <div className="home">
      {/* Header */}
      <header className="home-header">
        <h1 className="home-title">Client Onboarding Process</h1>
      </header>

      {/* Main Section */}
      <section className="home-section">
        <div className="home-container">
          {/* Left Side */}
          <aside className="left-card">
            <h3 className="left-title">We value your input</h3>
            <img src={teamPhoto} alt="Our team" className="team-image" />
            <button className="connect-button">Connect with Team</button>
          </aside>

          {/* Right Side - Steps */}
          <div className="steps-container">
            {onboardingPhases.map((phase) => (
              <div
                key={phase.id}
                className={`step-box ${selectedPhase === phase.id ? "active" : ""}`}
                onClick={() => setSelectedPhase(phase.id)}
              >
                <div className="step-content">
                  <span className="step-number">{phase.id}</span>
                  <div className="step-text">
                    <h4 className="step-title">{phase.label}</h4>
                  </div>
                  <div className="step-text">
                    <p className="step-description">{phase.info}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
