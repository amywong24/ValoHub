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
            <h2>For player name, type in your Riot Games username with the tag.</h2>
            <h3>Ex: Sunshine#NA1</h3>
            <form className='form-container'>
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
                    <ul className='radio-list'>
                        {["Astra", "Breach", "Brimstone", "Chamber", "Clove", "Cypher", "Deadlock", "Fade", "Gekko", "Harbor", "Iso", "Jett", "KAYO", "Killjoy", "Neon", "Omen", "Phoenix", "Raze", "Reyna", "Sage", "Skye", "Sova", "Viper", "Yoru"].map((agent) => (
                            <li className="radio-item" key={agent}>
                                <input
                                    id={agent}
                                    name="main_agent"
                                    type="radio"
                                    value={agent}
                                    onChange={handleAgentChange}
                                    checked={profile.main_agent === agent}
                                />
                                <label htmlFor={agent}>{agent}</label>
                            </li>
                        ))}
                    </ul>
                </div>
            </form>
            <button type='submit' value='Submit' onClick={createProfile}>Create Profile</button>
        </div>
    );
};

export default CreateProfile;