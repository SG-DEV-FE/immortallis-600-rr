import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../routes/HomePage';
import CareerPage from '../routes/CareerPage';
import ProjectsPage from '../routes/ProjectsPage';
import HobbiesPage from '../routes/HobbiesPage';
import GalleryPage from '../routes/GalleryPage';
import GamingPage from '../routes/GamingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/career' element={<CareerPage />} />
        <Route path='/career/projects' element={<ProjectsPage />} />
        <Route path='/hobbies' element={<HobbiesPage />} />
        <Route path='/hobbies/gallery' element={<GalleryPage />} />
        <Route path='/hobbies/gaming' element={<GamingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
