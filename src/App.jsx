import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PropertiesPage from "./pages/PropertiesPage";
import PreviewPage from "./pages/PreviewPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Navigate to="/properties" />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
