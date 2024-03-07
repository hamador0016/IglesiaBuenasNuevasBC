import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from "./Components/Header"
import Home from './Components/Home'
import Contact from './Components/Contact'
import Events from './Components/Events'
import Families from './Components/Families'
import Pastors from './Components/Pastors'
import Seremons from './Components/Seremons'
import Footer from './Components/Footer'


function App() {
  return (
   <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Contact' element={<Contact></Contact>}></Route>
      <Route path='/Events' element={<Events></Events>}></Route>
      <Route path='/Families' element={<Families></Families>}></Route>
      <Route path='/Pastors' element={<Pastors></Pastors>}></Route>
      <Route path='/Seremons' element={<Seremons></Seremons>}></Route>
    </Routes>
    <Footer></Footer>
   </>
  );
}

export default App;
