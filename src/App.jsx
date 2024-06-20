import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Login from './components/login';
import Reserve from './components/reserve';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/reserve' exact element={<Reserve/>}/>
      </Routes>
    </Router>
  )
}

export default App
