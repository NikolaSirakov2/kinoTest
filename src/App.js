import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
      <Routes>
        <Route index element={<Navigate to={'/home'}/>}></Route>
        <Route path={'/home'} element={<HomePage/>}></Route>
      </Routes>
  );
}

export default App;
