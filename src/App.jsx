import { useEffect, useState } from 'react'
import './App.css'
import { Link, useRoutes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreateProfile from './components/CreateProfile';
import EditProfile from './components/EditProfile';
import AgentDetails from './components/AgentDetails';
import AgentList from './components/AgentList';
import { supabase } from './client';

function App() {
  const [agentProfile, setAgentProfile] = useState([]);

  const fetchProfile = async () => {
    const { data, error } = await supabase.from("Posts").select();
    if (error) {
        console.error("Error fetching agent data:", error);
    } else {
        setAgentProfile(data);
    }
};

  useEffect(() => {
    fetchProfile();
  },[]);

  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/create",
      element: <CreateProfile />,
    },
    {
      path: "/edit/:id",
      element: <EditProfile data={agentProfile}/>
    },
    {
      path: "/details/:id",
      element: <AgentDetails data={agentProfile}/>
    },
    {
      path: "/gallery",
      element: <AgentList agents={agentProfile}/>
    }

  ]);

  return (
    <>
      <div className='App'>
        <div className='sideNav'>
          <Link to="/">
            <p className='header'>Home</p>
          </Link>
          <Link to="/create">
            <p className='header'>Create Agent Profile</p>
          </Link>
          <Link to="/gallery">
            <p className='header'>Agent Profiles</p>
          </Link>
        </div>
        {element}
      </div>
    </>
  )
}

export default App
