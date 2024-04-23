import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home'
import Register from './components/pages/Register'
import Account from './components/pages/Account'
import Login from './components/pages/Login'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/profil' element={<Account />} />
      <Route path='/signin' element={<Login />} />
    </Routes>
  );
};

export default App;