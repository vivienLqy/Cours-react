import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Recipe from './Recipe';
import Setting from './Setting';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recette' element={<Recipe />} />
        <Route path='/paramettre' element={<Setting />} />
      </Routes>
    </div>
  );
};

export default App;