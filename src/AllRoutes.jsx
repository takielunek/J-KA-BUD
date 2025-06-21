import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AnalysisPage from "./pages/AnalysisPage";
import AcceptPage from "./pages/AcceptPage";
import ProtocolPage from "./pages/ProtocolPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import RegulationsPage from "./pages/RegulationsPage";
import ScrollToTopButton from "./ScrollToTopButton";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/analiza-dokumentacji" element={<AnalysisPage />} />
        <Route path="/odbior-techniczny" element={<AcceptPage />} />
        <Route path="/protokol" element={<ProtocolPage />} />
        <Route path="/polityka-prywatnosci" element={<PrivacyPolicyPage />} />
        <Route path="/regulamin" element={<RegulationsPage />} />
      </Routes>
      <ScrollToTopButton />
    </BrowserRouter>
  );
};

export default AllRoutes;
