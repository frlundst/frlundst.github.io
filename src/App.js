import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./Component/Views/Navbar/Navbar";
import About from "./Component/Views/About/About";
import Projects from "./Component/Views/Projects/Projects";
import Footer from "./Component/Views/Footer/Footer";
import { Project } from "./Component/Views/Project/Project";
import { Experience } from "./Component/Views/Experience/Experience";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Container>
        <Routes>
          <Route path="*" element={<h1 style={{ textAlign: "center", margin: "50px 0px" }}>404 Not found</h1>} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
