import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Orders from './Components/Orders/Orders';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (

    <div className="App">
      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/products' element={<Products></Products>}></Route>

        <Route path='/orders' element={
          <RequireAuth><Orders></Orders></RequireAuth>
        }>
        </Route>

        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

    </div>
  );
}

export default App;
