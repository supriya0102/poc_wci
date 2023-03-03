import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProfilePage from './components/profile/ProfilePage';
import AddUser from './components/adduser/AddUser';
import UpdateUser from './components/updateuser';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/update/:id" element={<UpdateUser />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;