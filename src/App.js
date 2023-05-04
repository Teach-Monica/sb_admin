import './App.css';
import Dashboard from './Dashboard.js';
import Buttons from './Buttons.js';
import Cards from './Cards.js';
import Color from './Color.js';
import Border from './Border.js';
import Animation from './Animation.js';
import Other from './Other.js';
import Login from './Login.js';
import Register from './Register.js';
import Error404 from './Error404.js';
import Blank from './Blank.js';
import {Routes,Route} from "react-router-dom";
import ForgetPassword from './ForgetPassword';
import Charts from './Charts.js';
import Tables from './Tables.js';

function App() {
  return (
    <div>
    
    <Routes>
     <Route path="/" element={<Dashboard/>}/> 
        <Route path="/dashboard" element={<Dashboard/>}/> 
        <Route path="/buttons" element={<Buttons/>}/>
        <Route path="/cards" element={<Cards/>}/>
        <Route path="/color" element={<Color/>}/>
        <Route path="/border" element={<Border/>}/>
        <Route path="/animation" element={<Animation/>}/>
        <Route path="/other" element={<Other/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/error404" element={<Error404/>}/>
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
        <Route path="/blank" element={<Blank/>}/>
        <Route path="/charts" element={<Charts/>}/>
        <Route path="/tables" element={<Tables/>}/>
        </Routes>
        {/* <Dashboard/>
        <Buttons/> */}

    </div>
  )
}

export default App;
