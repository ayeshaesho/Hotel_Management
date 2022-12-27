import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home/Home';
import Login from './pages/LoginSignup/Login/Login';
import RequireAuth from './pages/LoginSignup/RequireAuth/RequireAuth';
import Signup from './pages/LoginSignup/Signup/Signup';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/Shared/NotFound/NotFound';
import Thanks from './pages/Shared/Thanks/Thanks';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route  path='/course/:courseId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/thanks' element={<Thanks></Thanks>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
