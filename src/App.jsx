import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import CardDetails from "./pages/CardDetails.jsx/CardDetail"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import PrivateRoute from './PrivateRoute/PrivateRoute';
import EditProfile from './components/profile/EditProfile';
 
function App() {
 
  return (
    <>

           <Router>
              <Navbar />
              <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register"   element={<Register/> } />
                <Route path="/card-details/:id"  element={<PrivateRoute><CardDetails/></PrivateRoute> } />            
                <Route path="/profile"  element={<PrivateRoute><EditProfile/></PrivateRoute> } />            
                <Route path="/about"  element={<h1>This is about page</h1> } />
                
              </Routes>
              <Footer />
          </Router>
    </>
  )
}

export default App
