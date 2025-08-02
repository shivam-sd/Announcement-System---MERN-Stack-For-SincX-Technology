import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home'
import CreateAnnouncement from './pages/CreateAnnouncement';
import EditAnnouncement from './pages/EditAnnouncement';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateAnnouncement />} />
        <Route path="/edit/:id" element={<EditAnnouncement />} />
      </Routes>
    </div>
  )
}

export default App
