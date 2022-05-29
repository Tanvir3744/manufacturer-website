import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import MyOrder from './Pages/MyOrder/MyOrder';
import AddReview from './Pages/AddReview/AddReview';
import Profile from './Pages/Profile/Profile';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Footer from './Pages/Shared/Footer';
import Details from './Components/Details';
function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myorder' element={<MyOrder />} />
        <Route path='/addreview' element={<AddReview />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/details/:id' element={<Details />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
