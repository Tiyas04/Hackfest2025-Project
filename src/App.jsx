import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/pages/Home.jsx";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Leaderboard from './components/pages/Leaderboard';
import About from './components/pages/About';
import Profile from './components/pages/Profile';
import Practice from './components/challenges/Practice';


function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Signin' element={<Signin/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path='/play' element={<Practice/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
    </Router >
    
  );
}

export default App
