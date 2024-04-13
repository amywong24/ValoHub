import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import data from "/agents.json"

const AgentDetails = () => {
    const { id } = useParams(); // Get agentId from URL
    const [agent, setAgent] = useState(null);

    useEffect(() => {
        const agent = data.find(a => {
            return a.id === id;
          });
        setAgent(agent);
        console.log("baby bear", agent);
        console.log(agent.icon);
    }, [id]);

    if (!agent) {
        return <p>Loading agent details...</p>;
    }

    return (
        <div className="agent-details">
            <h2>{agent.main_agent}</h2>
            <img src={agent.icon} alt={`${agent.main_agent} icon`} className='single-agent-icon' />
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