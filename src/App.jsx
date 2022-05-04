
import './App.css';
import Addrestaurants from './componets/Addrestaurants';
import Showrest from "./componets/Showrest"
import { Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/addrestraunt' element={<Addrestaurants/>}/>
        <Route path='/showrestraunt' element={<Showrest/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
