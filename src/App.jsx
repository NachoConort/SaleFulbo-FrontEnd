import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Login from './components/login';
import Reserve from './components/reserve';
import Logued from './components/logued';
import Profile from './components/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/reserve/:id' exact element={<Reserve/>}/>
        <Route path='/logued/:id' exact element={<Logued/>}/>
        <Route path='/profile/:id' exact element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App
