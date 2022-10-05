import { HashRouter,Routes,Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import { Home, Login, ProductDetails, Purchases,UserInfo} from './pages';
import Navbar from './componentes/Navbar'
import ProtectedRoutes from './componentes/ProtectedRoutes';
import Loader from './componentes/Loader';
 


function App() {
  const isLoading = useSelector(state => state.isLoading)
  
  return (
    <HashRouter>
      <Navbar />
      <div className='container'>
        {isLoading && <Loader />}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/login' element={<Login />} />

          <Route element={<ProtectedRoutes/>}>
            <Route path='/purchases' element={<Purchases />} />
            <Route path='/user' element={<UserInfo/>}/>
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
