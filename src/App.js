import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import ProfilePage from './components/profile';
import UpdateUser from './components/updateuser';
import AddUser from './components/adduser-old/AddUser';
function App() {
  return (
     
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/adduser" element={<AddUser />} />
            {/* <Route path="/update/:id" element={<UpdateUser />} /> */}
            <Route path="/update/:id" element={<AddUser />} />
          </Routes>
        </Router>
     
  );
}

export default App;