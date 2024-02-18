import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./views/Contact";
import Home from "./views/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/contacto"
            element={<Contact />}
          />
        </Routes>
      </main>
    </div>
  );
};
export default App;
