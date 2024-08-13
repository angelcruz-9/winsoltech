import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Layout from "./components/layout/layout";
import "./App.css";
import RevenueCycle from "./components/revenueCycle/revenueCycle";
import Services from "./components/services/services";
import ServiceDetail from "./components/services/serviceDetail";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/winsoltech" element={<Home />} />
          <Route path="/solutions" element={<RevenueCycle />} />
          <Route path="/revenueCycleManagement" element={<RevenueCycle />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} /> {/* Child route */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
