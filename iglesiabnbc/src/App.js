import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from "./Components/Header/Header.jsx"
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Events from './Components/Events/Events.jsx'
import Families from './Components/Families/Families.jsx'
import Pastors from './Components/Pastors/Pastors.jsx'
import Seremons from './Components/Seremons/Seremons.jsx'
import Footer from './Components/Footer/Footer.jsx'


function App() {
  return (
   <>
   <div className='site-content'>
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
    </div>
   </>
  );
}

export default App;
