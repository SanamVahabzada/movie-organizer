import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import ListPage from './pages/ListPage/ListPage';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes className="routes" >
        <Route className="main" path="/" element={<MainPage />} />
        <Route className="list" path="/movielist" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default App;