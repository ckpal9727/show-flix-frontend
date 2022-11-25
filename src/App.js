
import './App.css';
import { Route, Routes } from 'react-router-dom';
import User from './Pages/User';
import Moviee from './Pages/Moviee';
import { Layout } from './Pages/Layout';
import  '../src/css/Layout.css'; 
import { Login } from './Pages/Login';
import { Profile } from './Pages/Profile';
import SingleMovie from './Pages/SingleMovie';




function App() {
  return (
    <div className="container">
     <Layout/>
      <Routes>
        <Route path='/user' element={<User/>}>User</Route>
        <Route path='/movie' element={<Moviee/>}>Movie</Route>
        <Route path='/login' element={<Login/>}>Movie</Route>
        <Route path='/profile/:emailid' element={<Profile/>}>Profile</Route>
        <Route path='/single_movie/:mid' element={<SingleMovie/>}>Single Movie</Route>
        
      </Routes>
    </div>
  );
}

export default App;
