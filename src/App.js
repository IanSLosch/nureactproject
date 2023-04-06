import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import BannedListPage from './pages/BannedListPage'
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='bannedlist' element={<BannedListPage/>} />
        <Route path='about' element={<AboutPage/>} />
        <Route path='login' element={<LoginPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
