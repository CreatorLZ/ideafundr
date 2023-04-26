import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./Global";
import Navbar from "./components/Navbar";
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Inventors from './pages/Inventors';
import Investors from './pages/Investors';
import Profile from './pages/Profile';
import {createBrowserRouter,
   createRoutesFromElements,
    Route,
     Link,
     Outlet,
     RouterProvider
} from 'react-router-dom'
import Explore from './pages/Explore';
import Invention from './pages/Invention';
import Register from './pages/Register';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Login from './pages/Login';

const theme = {
  colors: {
    header:'#F2F2F2'
  }
}

const Root = () =>{
  return(
    <>
    <Navbar/>
    <>
    <Outlet/>
    </>
    </>
    )
    
}


function App() {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser);

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<Root/>}>
    <Route index element ={currentUser ?<Home/> : <Landing/>}/>
    <Route path='/Landing' element ={<Landing/>}/>
    <Route path='/About' element ={currentUser ? <Landing/>: <About/>}/>
    <Route path='/Explore' element ={currentUser ? <Landing/>:<Explore/>}/>
    <Route path='/Invention' element ={currentUser ? <Landing/>:<Invention/>}/>
    <Route path='/Investors' element ={currentUser ? <Landing/>:<Investors/>}/>
    <Route path='/Inventors' element ={currentUser ? <Landing/>:<Inventors/>}/>
    <Route path='/Register' element ={currentUser? <Home/>:<Register/>}/>
    <Route path='/Login' element ={currentUser? <Home/>:<Login/>}/>
    <Route path='/Profile' element ={currentUser? <Profile/>:<Landing/>}/>
    </Route>
    )
    )


  return( 
    <ThemeProvider theme={theme}>
  <> 
  <GlobalStyles />
 <RouterProvider router={router}/>
  </>
    </ThemeProvider>
  )
}


export default App;
