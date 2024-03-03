
import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import NewEmployee from './components/NewEmployee';
import Signup from './components/Signup';
import {Routes,Route} from "react-router-dom"



function App() {
  return (
   <>
      {/* <LoginPage/> */}
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="newemploy" element={<NewEmployee/>}></Route>
        
      </Routes>
   </>
  );
}

export default App;
