import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./Global";
import Navbar from "./components/Navbar";
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Inventors from './pages/Inventors';
import Investors from './pages/Investors';
import {createBrowserRouter,
   createRoutesFromElements,
    Route,
     Link,
     Outlet,
     RouterProvider
} from 'react-router-dom'
import Explore from './pages/Explore';
import Invention from './pages/Invention';

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

const router = createBrowserRouter(
createRoutesFromElements(
<Route path='/' element={<Root/>}>
<Route index element ={<Home/>}/>
<Route path='/Landing' element ={<Landing/>}/>
<Route path='/About' element ={<About/>}/>
<Route path='/Explore' element ={<Explore/>}/>
<Route path='/Invention' element ={<Invention/>}/>
<Route path='/Investors' element ={<Investors/>}/>
<Route path='/Inventors' element ={<Inventors/>}/>
</Route>
)
)

function App() {
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
