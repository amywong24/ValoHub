import React from "react";
import { Link } from "react-router-dom";

const AgentCard = ({ agent }) => {
  const agentIconImages = {
    Astra: "/agents/astra_icon.webp",
    Breach: "/agents/breach_icon.webp",
    Brimstone: "/agents/brimstone_icon.webp",
    Chamber: "/agents/chamber_icon.webp",
    Clove: "/agents/clove_icon.webp",
    Cypher: "/agents/cypher_icon.webp",
    Deadlock: "/agents/deadlock_icon.webp",
    Fade: "/agents/fade_icon.webp",
    Gekko: "/agents/gekko_icon.webp",
    Harbor: "/agents/harbor_icon.webp",
    Iso: "/agents/iso_icon.webp",
    Jett: "/agents/jett_icon.webp",
    KAYO: "/agents/KAYO_icon.webp",
    Killjoy: "/agents/killjoy_icon.webp",
    Neon: "/agents/neon_icon.webp",
    Omen: "/agents/omen_icon.webp",
    Phoenix: "/agents/phoenix_icon.webp",
    Raze: "/agents/raze_icon.webp",
    Reyna: "/agents/reyna_icon.webp",
    Sage: "/agents/sage_icon.webp",
    Skye: "/agents/Skye_icon.webp",
    Sova: "/agents/sova_icon.webp",
    Viper: "/agents/viper_icon.webp",
    Yoru: "/agents/yoru_icon.webp",
  };

  return (
    <div className="card-container">
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
