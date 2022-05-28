import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import MyOrder from './Pages/MyOrder/MyOrder'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Home />}/>
        <Route path='/conatact' element={<Contact/>}/>
        <Route path='/myorder' element={<MyOrder />}/>
        <Route path='/addreview' element={}/>
        <Route path='/profile' element={}/>
        <Route path='/dashboard' element={}/>
      </Routes>
    </div>
  );
}

export default App;
