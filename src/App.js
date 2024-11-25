import './App.css';
import "./style/style.scss"
import { Route, Routes } from 'react-router-dom'
import SearchByNumber from './components/SearchByNumber/SearchByNumber';
import Layout from './components/layout/layout';
import PokemonList from './components/PokemonList/pokemonlist';
import HomePage from './components/HomePage/HomePage';


function App() {
return (
  <div className='page_wrapper'>  
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="home" element={<HomePage/>}/>
        <Route path="pokemonlist" element={<PokemonList/>}/>
        <Route path="searchbynumber" element={<SearchByNumber/>}/>
      </Route>
    </Routes>
  </div>
  );
}

export default App;

