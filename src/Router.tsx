import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Search } from "./pages/search";
import { Details } from "./pages/details";
import { UrlResolver } from "./components/urlResolver";
import { ScrollToTop } from "./components/scrollTop";

export default function Router() {
  return (
    <BrowserRouter>
      <UrlResolver />
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Search />} />
        <Route path="/:type/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
