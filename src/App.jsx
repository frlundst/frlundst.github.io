import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Desktop } from "./Component/Views/Desktop/Desktop";
import About from "./Component/Views/About/About";
import Projects from "./Component/Views/Projects/Projects";
import { Project } from "./Component/Views/Project/Project";
import { Experience } from "./Component/Views/Experience/Experience";
import { NotFound } from "./Component/Views/NotFound/NotFound";

// Every page opens as a window on the same desktop.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Desktop />}>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
