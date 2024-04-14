import { supabase } from '../client';
import React, { useState } from 'react';

const CreateProfile = () => {
    const [profile, setProfile] = useState({ player_name: "", rank: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfile((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleAgentChange = (event) => {
        const selectedAgent = event.target.value;
        setProfile((prev) => ({
            ...prev,
            main_agent: selectedAgent,
        }));
    };

    const createProfile = async (event) => {
        event.preventDefault();

        const { error } = await supabase
            .from("Posts")
            .insert({ player_name: profile.player_name, rank: profile.rank, main_agent: profile.main_agent })
            .select();

        if (error) {
            console.log(error);
        }

        window.location = "/gallery";
    };


    return (
        <div className='whole-page'>
            <h1>Create Your Agent Profile</h1>
            <form>
                <div className='mini-form-container'>
                    <p>Player Name:</p>
                    <input
                        type="text"
                        name="player_name"
                        placeholder="Enter player name"
                        value={profile.player_name}
                        onChange={handleChange}
                    />
                </div>
                <div className='mini-form-container'>
                    <p>Rank: (Iron to Radiant)</p>
                    <input
                        type='text'
                        name='rank'
                        placeholder='Enter rank'
                        value={profile.rank}
                        onChange={handleChange} />
                </div>
                <div className='mini-form-container'>
                    <p>Main Agent: </p>
                    <ul>
                        <li><input
                            id="Astra"
                            name="main_agent"
                            type="radio"
                            value="Astra"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Astra"}
                        />Astra</li>
                        <li><input
                            id="Breach"
                            name="main_agent"
                            type="radio"
                            value="Breach"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Breach"}
                        />Breach</li>
                        <li><input
                            id="Brimstone"
                            name="main_agent"
                            type="radio"
                            value="Brimstone"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Brimstone"}
                        />Brimstone</li>
                        <li><input
                            id="Chamber"
                            name="main_agent"
                            type="radio"
                            value="Chamber"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Chamber"}
                        />Chamber</li>
                        <li><input
                            id="Clove"
                            name="main_agent"
                            type="radio"
                            value="Clove"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Clove"}
                        />Clove</li>
                        <li><input
                            id="Cypher"
                            name="main_agent"
                            type="radio"
                            value="Cypher"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Cypher"}
                        />Cypher</li>
                        <li><input
                            id="Deadlock"
                            name="main_agent"
                            type="radio"
                            value="Deadlock"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Deadlock"}
                        />Deadlock</li>
                        <li><input
                            id="Fade"
                            name="main_agent"
                            type="radio"
                            value="Fade"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Fade"}
                        />Fade</li>
                        <li><input
                            id="Gekko"
                            name="main_agent"
                            type="radio"
                            value="Gekko"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Gekko"}
                        />Gekko</li>
                        <li><input
                            id="Harbor"
                            name="main_agent"
                            type="radio"
                            value="Harbor"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Harbor"}
                        />Harbor</li>
                        <li><input
                            id="Iso"
                            name="main_agent"
                            type="radio"
                            value="Iso"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Iso"}
                        />Iso</li>
                        <li><input
                            id="Jett"
                            name="main_agent"
                            type="radio"
                            value="Jett"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Jett"}
                        />Jett</li>
                        <li><input
                            id="KAYO"
                            name="main_agent"
                            type="radio"
                            value="KAYO"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "KAYO"}
                        />KAYO</li>
                        <li><input
                            id="Killjoy"
                            name="main_agent"
                            type="radio"
                            value="Killjoy"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Killjoy"}
                        />Killjoy</li>
                        <li><input
                            id="Neon"
                            name="main_agent"
                            type="radio"
                            value="Neon"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Neon"}
                        />Neon</li>
                        <li><input
                            id="Omen"
                            name="main_agent"
                            type="radio"
                            value="Omen"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Omen"}
                        />Omen</li>
                        <li><input
                            id="Phoenix"
                            name="main_agent"
                            type="radio"
                            value="Phoenix"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Phoenix"}
                        />Phoenix</li>
                        <li><input
                            id="Raze"
                            name="main_agent"
                            type="radio"
                            value="Raze"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Raze"}
                        />Raze</li>
                        <li><input
                            id="Reyna"
                            name="main_agent"
                            type="radio"
                            value="Reyna"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Reyna"}
                        />Reyna</li>
                        <li><input
                            id="Sage"
                            name="main_agent"
                            type="radio"
                            value="Sage"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Sage"}
                        />Sage</li>
                        <li><input
                            id="Skye"
                            name="main_agent"
                            type="radio"
                            value="Skye"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Skye"}
                        />Skye</li>
                        <li><input
                            id="Sova"
                            name="main_agent"
                            type="radio"
                            value="Sova"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Sova"}
                        />Sova</li>
                        <li><input
                            id="Viper"
                            name="main_agent"
                            type="radio"
                            value="Viper"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Viper"}
                        />Viper</li>
                        <li><input
                            id="Yoru"
                            name="main_agent"
                            type="radio"
                            value="Yoru"
                            onChange={handleAgentChange}
                            checked={profile.main_agent === "Yoru"}
                        />Yoru</li>
                    </ul>
                </div>
            </form>
            <button type='submit' value='Submit' onClick={createProfile}>Create Profile</button>
        </div>
    );
};

export default CreateProfile;