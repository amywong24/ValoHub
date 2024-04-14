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
            <form onSubmit={handleSubmit}>
                <div className='mini-form-container'>
                    <p>Player Name:</p>
                    <input
                        type="text"
                        name="player_name"
                        placeholder={formData.player_name ? "Enter player name" : ""}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='mini-form-container'>
                    <p>Rank: (Iron to Radiant)</p>
                    <input
                        type='text'
                        name='rank'
                        placeholder={formData.rank ? 'Enter rank' : ''}
                        onChange={handleInputChange} />
                </div>
                <div className='mini-form-container'>
                    <p>Main Agent: </p>
                    <ul>
                        <li><input
                            id="Astra"
                            name="main_agent"
                            type="radio"
                            value="Astra"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Astra"}
                        />Astra</li>
                        <li><input
                            id="Breach"
                            name="main_agent"
                            type="radio"
                            value="Breach"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Breach"}
                        />Breach</li>
                        <li><input
                            id='Brimstone'
                            name="main_agent"
                            type="radio"
                            value="Brimstone"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Brimstone"}
                        />Brimstone</li>
                        <li><input
                            id='Chamber'
                            name="main_agent"
                            type="radio"
                            value="Chamber"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Chamber"}
                        />Chamber</li>
                        <li><input
                            id='Clove'
                            name="main_agent"
                            type="radio"
                            value="Clove"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Clove"}
                        />Clove</li>
                        <li><input
                            id='Cypher'
                            name="main_agent"
                            type="radio"
                            value="Cypher"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Cypher"}
                        />Cypher</li>
                        <li><input
                            id='Deadlock'
                            name="main_agent"
                            type="radio"
                            value="Deadlock"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Deadlock"}
                        />Deadlock</li>
                        <li><input
                            id='Fade'
                            name="main_agent"
                            type="radio"
                            value="Fade"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Fade"}
                        />Fade</li>
                        <li><input
                            id='Gekko'
                            name="main_agent"
                            type="radio"
                            value="Gekko"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Gekko"}
                        />Gekko</li>
                        <li><input
                            id='Harbor'
                            name="main_agent"
                            type="radio"
                            value="Harbor"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Harbor"}
                        />Harbor</li>
                        <li><input
                            id='Iso'
                            name="main_agent"
                            type="radio"
                            value="Iso"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Iso"}
                        />Iso</li>
                        <li><input
                            id='Jett'
                            name="main_agent"
                            type="radio"
                            value="Jett"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Jett"}
                        />Jett</li>
                        <li><input
                            id='KAYO'
                            name="main_agent"
                            type="radio"
                            value="KAYO"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "KAYO"}
                        />KAYO</li>
                        <li><input
                            id='Killjoy'
                            name="main_agent"
                            type="radio"
                            value="Killjoy"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Killjoy"}
                        />Killjoy</li>
                        <li><input
                            id='Neon'
                            name="main_agent"
                            type="radio"
                            value="Neon"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Neon"}
                        />Neon</li>
                        <li><input
                            id='Omen'
                            name="main_agent"
                            type="radio"
                            value="Omen"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Omen"}
                        />Omen</li>
                        <li><input
                            id='Phoenix'
                            name="main_agent"
                            type="radio"
                            value="Phoenix"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Phoenix"}
                        />Phoenix</li>
                        <li><input
                            id='Raze'
                            name="main_agent"
                            type="radio"
                            value="Raze"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Raze"}
                        />Raze</li>
                        <li><input
                            id='Reyna'
                            name="main_agent"
                            type="radio"
                            value="Reyna"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Reyna"}
                        />Reyna</li>
                        <li><input
                            id='Sage'
                            name="main_agent"
                            type="radio"
                            value="Sage"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Sage"}
                        />Sage</li>
                        <li><input
                            id='Skye'
                            name="main_agent"
                            type="radio"
                            value="Skye"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Skye"}
                        />Skye</li>
                        <li><input
                            id='Sova'
                            name="main_agent"
                            type="radio"
                            value="Sova"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Sova"}
                        />Sova</li>
                        <li><input
                            id='Viper'
                            name="main_agent"
                            type="radio"
                            value="Viper"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Viper"}
                        />Viper</li>
                        <li><input
                            id='Yoru'
                            name="main_agent"
                            type="radio"
                            value="Yoru"
                            onChange={handleInputChange}
                            checked={formData.main_agent === "Yoru"}
                        />Yoru</li>
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