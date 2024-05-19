import { supabase } from '../client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditProfile = () => {
    const { id } = useParams();
    const [agentProfile, setAgentProfile] = useState([]);
    const [formData, setFormData] = useState({
        player_name: "",
        rank: "",
        main_agent: "",
    })

    useEffect(() => {
        async function fetchProfile() {
            const { data, error } = await supabase.from("Posts").select().eq("id", id).single(); // Assuming 'id' is unique, so use 'single' to get one record

            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setAgentProfile(data);
                setFormData({
                    player_name: data.player_name,
                    rank: data.rank,
                    main_agent: data.main_agent,
                });
            }
        }

        fetchProfile();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase
            .from("Posts")
            .update({
                player_name: formData.player_name,
                rank: formData.rank,
                main_agent: formData.main_agent,
            })
            .eq("id", id);

        if (error) {
            console.error("Error updating profile:", error);
        } else {
            // Display a confirmation message to the user
            window.alert("Profile updated.");
            // Reload the page
            window.location.href = `/gallery`;
        }
        return;
    };

    const handleDelete = async (e) => {
        e.stopPropagation();

        console.log("Delete button clicked");

        const { error } = await supabase.from("Posts").delete().eq("id", id);

        if (error) {
            console.error("Error deleting profile:", error);
        } else {
            window.alert("Profile deleted.");
            window.location.href = "/gallery";
        }
    };

    if (!agentProfile) {
        return <div>Loading...</div>;
    }

    return (
        <div className='whole-page'>
            <h1>Update Your Agent Profile</h1>
            <h2>Current Profile Info:</h2>
            <h3>
                Player name: {agentProfile.player_name}, Rank: {agentProfile.rank}, Main Agent: {agentProfile.main_agent}
            </h3>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className='mini-form-container'>
                    <p>Player Name:</p>
                    <input
                        type="text"
                        name="player_name"
                        value={formData.player_name}
                        placeholder={"Enter player name"}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='mini-form-container'>
                    <p>Rank: (Iron to Radiant)</p>
                    <input
                        type='text'
                        name='rank'
                        value={formData.rank}
                        placeholder={'Enter rank'}
                        onChange={handleInputChange} />
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
                                    onChange={handleInputChange}
                                    checked={formData.main_agent === agent}
                                />
                                <label htmlFor={agent}>{agent}</label>
                            </li>
                        ))}
                    </ul>
                </div>
            </form>
            <div className='button-container-2'>
                <button className='submit' type='submit' onClick={handleSubmit}>Update Profile</button>
                <button className='delete' onClick={handleDelete}>Delete Profile</button>
            </div>
        </div>
    );
};

export default EditProfile;