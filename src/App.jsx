import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from "./components/Weather";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router basename="/weather-application">
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
