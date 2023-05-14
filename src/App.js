import { ThemeProvider } from "styled-components";
// import GlobalStyles from "./Global";
// import Landing from './pages/Landing';
// import Home from './pages/Home';
// import About from './pages/About';
// import Inventors from './pages/Inventors';
// import Investors from './pages/Investors';
// import Profile from './pages/Profile';
// import Explore from './pages/Explore';
// import Invention from './pages/Invention';
// import Register from './pages/Register';
// import Login from './pages/Login';
import Navbar from "./components/Navbar";
import { Suspense, lazy, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Spinneranimation from "./components/Spinner";

const Landing = lazy(() => import("./pages/Landing"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Inventors = lazy(() => import("./pages/Inventors"));
const Investors = lazy(() => import("./pages/Investors"));
const Invention = lazy(() => import("./pages/Invention"));
const Profile = lazy(() => import("./pages/Profile"));
const Explore = lazy(() => import("./pages/Explore"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const GlobalStyles = lazy(() => import("./Global"));



const theme = {
  colors: {
    header: "#F2F2F2",
  },
};

const Root = () => {
  return (
    <>
      <Navbar/>
      <>
        <Outlet />
      </>
    </>
  );
};

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route
          index
          element={
            currentUser ? (
              <Suspense fallback={<Spinneranimation />}>
                <Home />
              </Suspense>
            ) : (
              <Landing />
            )
          }
        />
        <Route
          path="/Landing"
          element={
            <Suspense fallback={<Spinneranimation />}>
              <Landing />{" "}
            </Suspense>
          }
        />
        <Route
          path="/About"
          element={
            currentUser ? (
              <Suspense fallback={<Spinneranimation />}>
                <About />
              </Suspense>
            ) : (
              <Landing />
            )
          }
        />
        <Route
          path="/Explore"
          element={
            currentUser ? (
              <Suspense fallback={<Spinneranimation />}>
                <Explore />
              </Suspense>
            ) : (
              <Landing />
            )
          }
        />
        <Route
          path="/Invention"
          element={
            currentUser ? (
              <Suspense fallback={<Spinneranimation />}>
                <Invention />{" "}
              </Suspense>
            ) : (
              <Landing />
            )
          }
        />
        <Route
          path="/Investors"
          element={
            currentUser ? (
              <Suspense fallback={<Spinneranimation />}>
                <Investors />
              </Suspense>
            ) : (
              <Landing />
            )
          }
        />
        <Route
          path="/Inventors"
          element={
            currentUser ? (
              <Suspense fallback={<Spinneranimation />}>
                <Inventors />{" "}
              </Suspense>
            ) : (
              <Landing />
            )
          }
        />
        <Route
          path="/Register"
          element={
            currentUser ? (
              <Home />
            ) : (
              <Suspense fallback={<Spinneranimation />}>
                <Register />
              </Suspense>
            )
          }
        />
        <Route
          path="/Login"
          element={
            currentUser ? (
              <Home />
            ) : (
              <Suspense fallback={<Spinneranimation />}>
                <Login />{" "}
              </Suspense>
            )
          }
        />
        <Route
          path="/Profile"
          element={
            currentUser ? (
              <Suspense fallback={<Spinneranimation />}>
                <Profile />{" "}
              </Suspense>
            ) : (
              <Landing />
            )
          }
        />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <RouterProvider router={router} />
      </>
    </ThemeProvider>
  );
}

export default App;
