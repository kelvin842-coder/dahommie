//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
            <h1>@@**...Street Dahommie soccer Gadgets...**!!</h1>
       
      </header>
      <Link to={'/'} className='nav_link'>Get Products</Link>
     
      <Link to={'/signin'} className='nav_link'>Signin</Link>
      
      <Link to={'/addproduct'} className='nav_link'>Add product</Link>
    </div>

    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/addproduct' element={<Addproduct/>}/>
      <Route path='/' element={<Getproduct/>}/>
    </Routes>
    </Router>
  );
}

export default App;
