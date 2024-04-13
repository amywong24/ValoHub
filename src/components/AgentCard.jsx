import React from "react";
import { Link } from "react-router-dom";

const AgentCard = ({ agent }) => {
  const agentIconImages = {
    Astra: "src/agents/astra_icon.webp",
    Breach: "src/agents/breach_icon.webp",
    Brimstone: "src/agents/brimstone_icon.webp",
    Chamber: "src/agents/chamber_icon.webp",
    Clove: "src/agents/clove_icon.webp",
    Cypher: "src/agents/cypher_icon.webp",
    Deadlock: "src/agents/deadlock_icon.webp",
    Fade: "src/agents/fade_icon.webp",
    Gekko: "src/agents/gekko_icon.webp",
    Harbor: "src/agents/harbor_icon.webp",
    Iso: "src/agents/iso_icon.webp",
    Jett: "src/agents/jett_icon.webp",
    KAYO: "src/agents/KAYO_icon.webp",
    Killjoy: "src/agents/killjoy_icon.webp",
    Neon: "src/agents/neon_icon.webp",
    Omen: "src/agents/omen_icon.webp",
    Phoenix: "src/agents/phoenix_icon.webp",
    Raze: "src/agents/raze_icon.webp",
    Reyna: "src/agents/reyna_icon.webp",
    Sage: "src/agents/sage_icon.webp",
    Skye: "src/agents/Skye_icon.webp",
    Sova: "src/agents/sova_icon.webp",
    Viper: "src/agents/viper_icon.webp",
    Yoru: "src/agents/yoru_icon.webp",
  };

  return (
    <div>
      <div className="agent-card">
        <img src={agentIconImages[agent.main_agent]} alt={`${agent.main_agent} icon`} className="single-agent-icon" />
        <div className="button-container">
          <Link to={`/details/${agent.main_agent}`}>
            <button type="button">View Agent</button>
          </Link>
        </div>
        <h3>
          Player Name:
          <span> {agent.player_name}</span>
        </h3>
        <h3>
          Rank:
          <span> {agent.rank}</span>
        </h3>
        <h3>
          Main Agent:
          <span> {agent.main_agent}</span>
        </h3>
        <p>{agent.description}</p>
        <div className="button-container">
          <Link to={`/edit/${agent.id}`}>
            <button type="button">Edit Agent</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
