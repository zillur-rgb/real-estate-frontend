import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Properties from "./pages/Properties";
import NotFound from "./pages/NotFound";
import Details from "./components/properties/Details";
import PropertyType from "./components/properties/PropertyType";
import Profile from "./pages/Profile";
import PublicRoute from "./routes/PublicRoutes";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/properties"
          element={
            <PublicRoute>
              <Properties />
            </PublicRoute>
          }
        />
        <Route
          path="/properties/type/:propertyType"
          element={
            <PublicRoute>
              <PropertyType />
            </PublicRoute>
          }
        />
        <Route
          path="/properties/details/:propertyId"
          element={
            <PublicRoute>
              <Details />
            </PublicRoute>
          }
        />
        <Route
          path="/my-profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
