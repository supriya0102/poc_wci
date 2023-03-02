import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProfilePage from './components/profile/ProfilePage';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;