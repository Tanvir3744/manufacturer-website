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
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Pages/Login/RequireAuth';
import Order from './Pages/Dashboard/Order';
import Review from './Components/Review';
function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myorder' element={<RequireAuth><MyOrder /></RequireAuth>} />
        <Route path='/addreview' element={<RequireAuth> <AddReview /></RequireAuth>} />
        <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path='/dashboard'
          element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index={<Dashboard />}></Route>
          <Route path='review' element={<Review />}></Route>
          <Route path='orders' element={<Order />}></Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/details/:id' element={<RequireAuth><Details /></RequireAuth>} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
