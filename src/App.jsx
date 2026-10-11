import Header from './components/header.jsx'
import Card from './components/card.jsx'
import TodoContainer from './components/todoContainer.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'
import Landing from './pages/landing.jsx'
import { useState } from 'react'


//this is main component that is webpage!
function App() {
  const [users, setusers] = useState([
    {
      username: "hrishi",
      password: "1234",
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Login users={users} setusers={setusers} />}/>
        <Route path="/signup" element={<Signup users={users} setusers={setusers} />}/>
        <Route path="/landing" element={<Landing />} /></Routes>
    </BrowserRouter>
  );
}

export default App