import { useEffect, useState } from 'react'
import './App.css'
import { Link, useRoutes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreateProfile from './components/CreateProfile';
import EditProfile from './components/EditProfile';

function App() {
  const [agentProfile, setAgentProfile] = useState([]);

  const fetchProfile = async () => {
    const { data, error } = await supabase.from("Posts").select();
    if (error) {
      console.error("Error fetching agent data:", error);
    } else {
      // Set the retrieved data to the state variable monkeyData
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

  ]);

  return (
    <>
      <div className='App'>
        <div className='sideNav'>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/create">
            <p>Create Agent Profile</p>
          </Link>
          <Link>
            <p>Agent Profiles</p>
          </Link>
        </div>
        {element}
      </div>
    </>
  )
}

export default App
