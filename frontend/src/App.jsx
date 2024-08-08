import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import Lander from "./components/Lander";
import HomePage from "./components/HomePage";
import { Routes,Route,Link } from 'react-router-dom';

export default function App(){
  let isRegistered = true
  return (  
      <Routes>
          <Route path="/" element={<Lander/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
      </Routes>

  )
}