import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import React, { useState, useEffect } from 'react';
import data from "/agents.json"

const AgentDetails = () => {
    const { agentId } = useParams(); // Get agentId from URL
    const [agent, setAgent] = useState(null);

    useEffect(() => {
        // Find the agent based on agentId
        const agent = data.find(a => {
            console.log('Current a:', a); // Log each 'a' value as the find() function iterates
            return a.id === agentId;
          });
        setAgent(agent);
    }, [agentId]);

    if (!agent) {
        return <div>Loading agent details...</div>;
    }

    return (
        <div className="agent-details">
            <h2>{agent.main_agent}</h2>
            <img src={agent.icon} alt={`${agent.main_agent} icon`} style={{ width: '100px' }} />
            <p>{agent.description}</p>
            <h3>Voicelines</h3>
            <ul>
                {agent.voiceline.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
        </div>
    );
};

export default AgentDetails;