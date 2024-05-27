import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import Footer from "./layout/Footer";
import Sketches from "./pages/Sketches";
import ProjectDetails from "./components/ProjectDetails";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/sketches" element={<Sketches />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/project-details/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}
export default App;