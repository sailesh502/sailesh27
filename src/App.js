import logo from './logo.svg';
import { BrowserRouter as Router,Route,Link,Switch,Routes,Outlet } from 'react-router-dom';
import './App.css';
import DisplayingData from './components/displaying data';
import DisplayingClass from './class component';
import CounterInFunc from './functional state';
import TernaryOperator from './ternary operator';
import Book from './components/name';
import Toggle from './class component';
import Looping from './looping'
import Form from './forms';
// import Home from './life cycle'
import ExampleUseEffect from './use_effect';

// import About from './about';
import Navbar from './components/navbar';
// import Home from './life cycle';
import Comp1 from './components/home';
import About from './components/about';
import HttpCall from '../axios';
function App() {
  const arr = ['a','b','c'] 
  return(
    <div>
      <HttpCall/>
    </div>
  )
}

export default App;



// <Router>
    // <div>
    {/* //   <DisplayingData/>
    //   <DisplayingClass user='babu'/>
    //   <CounterInFunc/>
  //   <TernaryOperator/> */}
          {/* <Toggle/>
          <Book var={arr}/> 
          <Looping/>
          <Form/>
          <Home/> */}
          {/* <ExampleUseEffect/> */}
          {/* <Navbar/>
            <Routes>
              <Route exact path='/home' Component={Comp1}></Route>
              <Route exact path='/about' Component={About}></Route>
            </Routes> */}
          
    // </div>
    {/* </Router> */}