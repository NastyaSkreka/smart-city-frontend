import PageLayoutComponent from "./components/layout.components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.page";

function App() {
  return (
    <Router>
      <PageLayoutComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </PageLayoutComponent>
    </Router>
  );
}

export default App;
