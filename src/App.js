import './App.css';
import "./style/style.scss"
import { Route, Routes } from 'react-router-dom'
import RandomPokemon from './components/randompokemon/RandomPokemon';
import SearchByNumber from './components/SearchByNumber/SearchByNumber';
import CharacterSearch from './components/charactersearch/charactersearch';
// import { useRoutes } from 'react-router-dom';
import Layout from './components/layout/layout';
import { SpeedInsights } from "@vercel/speed-insights/react"
// import axios from "axios"
// import { useEffect, useState } from 'react';


function App() {
return (
  <div className='page_wrapper'>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="randompokemon" element={<RandomPokemon/>}/>
        <Route path="searchbynumber" element={<SearchByNumber/>}/>
        <Route path="charactersearch" element={<CharacterSearch/>}/>
      </Route>
    </Routes>
  </div>
  );
}

export default App;

