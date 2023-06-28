import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Properties from "./pages/Properties";
import NotFound from "./pages/NotFound";
import Details from "./components/properties/Details";
import PropertyType from "./components/properties/PropertyType";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/properties" element={<Properties />} />
        <Route
          path="/properties/type/:propertyType"
          element={<PropertyType />}
        />
        <Route path="/properties/details/:propertyId" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
