
import './App.css';
import EmployeeProfile from './components/EmployeeProfile';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import NewEmployee from './components/NewEmployee';
import Signup from './components/Signup';
import {Routes,Route} from "react-router-dom"
import UpdateDetails from './components/UpdateDetails';
import Delete from './components/Delete';



function App() {
  return (
   <>
      {/* <LoginPage/> */}
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/newemploy" element={<NewEmployee/>}></Route>
        <Route path="/details" element={<EmployeeProfile/>}></Route>
        <Route path="/update" element={<UpdateDetails/>}></Route>
        <Route path="/delete" element={<Delete/>}></Route>
        
      </Routes>
   </>
  );
}

export default App;
