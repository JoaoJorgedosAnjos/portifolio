import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "../about";
import { Home } from "../home";
import { Project } from "../projects";
import { Skills } from "../skills";
import ScrollToTop from "./scroll-to-top";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/sobre" element={<About />} />
                <Route exact path="/habilidades" element={<Skills />} />
                <Route exact path="/projetos" element={<Project />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }