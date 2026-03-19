import { BrowserRouter, Routes, Route } from "react-router-dom";

import PortfolioHome from "./pages/PortfolioHome";
import BlogArticlePage from "./pages/BlogArticlePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
