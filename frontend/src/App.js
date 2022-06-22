import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen.js';


function App() {
  return (
    <>
    <Navbar />

      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/product/:slug' element={<ProductScreen/>} />
        <Route path='/cart' element={<CartScreen />}/>
        <Route path='/signin' element= {<SigninScreen />} />
      </Routes>

    </>
  )}

export default App;
