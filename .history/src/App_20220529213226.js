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
import MyProfile from './Pages/Dashboard/MyProfile'
import MyOrders from './Pages/Dashboard/MyOrders';
import ManageOrder from './Pages/Dashboard/ManageOrder'
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
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='manageOrder' element={<ManageOrder></ManageOrder>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
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
