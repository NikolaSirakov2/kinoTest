import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import DetailsPage from './pages/Details';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
      <Routes>
        <Route index element={<Navigate to={'/home'}/>}></Route>
        <Route path={'/home'} element={<HomePage/>}></Route>
        <Route path={'/details'} element={<DetailsPage/>}></Route>
      </Routes>
  );
}

export default App;
