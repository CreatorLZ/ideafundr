import { ThemeProvider } from "styled-components";
import { Suspense, lazy, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  Link,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Spinneranimation from "./components/Spinner";

import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Inventors from "./pages/Inventors";
import Investors from "./pages/Investors";
import Invention from "./pages/Invention";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Register from "./pages/Register";
import Login from "./pages/Login";
import GlobalStyles from "./Global";

const theme = {
  colors: {
    header: "#F2F2F2",
  },
};

const Root = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {currentUser && <Navbar />}
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
              <ProtectedRoute>
                {" "}
                <About />
              </ProtectedRoute>
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
