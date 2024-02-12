import { ThemeProvider } from "styled-components";
import { Suspense, lazy, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Spinneranimation from "./components/Spinner";

import GlobalStyles from "./Global";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Navbar2 from "./components/Navbar2";
import Path from "./pages/Path";
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

const theme = {
  colors: {
    header: "#F2F2F2",
  },
};

const Root = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {currentUser? <Navbar /> : <Navbar2/>}
      <Outlet />
    </>
  );
};

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Landing" />;
    }
    return children;
  };
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Root />}>
        <Route
          index
          element={
            <Suspense fallback={<Spinneranimation />}>
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/Landing"
          element={
            <Suspense fallback={<Spinneranimation />}>
              <Landing />
            </Suspense>
          }
        />
        <Route
          path="/About"
          element={
            <Suspense fallback={<Spinneranimation />}>
              {/* <ProtectedRoute> */}
                {" "}
                <About />
              {/* </ProtectedRoute> */}
            </Suspense>
          }
        />
         <Route
          path="/Path"
          element={
            <Suspense fallback={<Spinneranimation />}>
              {/* <ProtectedRoute> */}
                {" "}
                <Path />
              {/* </ProtectedRoute> */}
            </Suspense>
          }
        />
        <Route
          path="/Explore"
          element={
            <Suspense fallback={<Spinneranimation />}>
              <ProtectedRoute>
                <Explore />
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/Invention"
          element={
            <Suspense fallback={<Spinneranimation />}>
              <ProtectedRoute>
                {" "}
                <Invention />
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/Investors"
          element={
            <Suspense fallback={<Spinneranimation />}>
              <ProtectedRoute>
                {" "}
                <Investors />{" "}
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/Inventors"
          element={
            <Suspense fallback={<Spinneranimation />}>
              <ProtectedRoute>
                {" "}
                <Inventors />{" "}
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/Register"
          element={
            <Suspense fallback={<Spinneranimation />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/Login"
          element={
            <Suspense fallback={<Spinneranimation />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/Profile"
          element={
            <Suspense fallback={<Spinneranimation />}>
              <ProtectedRoute>
                {" "}
                <Profile />{" "}
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route path="*"
        element={
          <NotFound/>
        }/>
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
