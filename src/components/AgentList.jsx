import React, { useState, useEffect } from "react";
import AgentCard from "./AgentCard";
import { supabase } from "../client";

const AgentList = () => {
  const [agents, setAgents] = useState([]);

  const fetchAgents = async () => {
    try {
      const { data, error } = await supabase.from("Posts").select();
      if (error) {
        throw error;
      }
      setAgents(data);
    } catch (error) {
      console.error("Error fetching agents:", error.message);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  return (
    <div>
      <div className="main-page">
        <div className="whole-page">
        <h1>Agent Profiles</h1>
          <div className="agent-gallery-container">
            {agents.length === 0 ? (
              <h2>No agents found!</h2>
            ) : (
              agents.map((agent) => <AgentCard key={agent.id} agent={agent} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentList;
