import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Layout from "./components/layout/layout";
import "./App.css";
import RevenueCycle from "./components/revenueCycle/revenueCycle";
import Contact from "./components/contact/contact";
import Careers from "./components/careers/careers";
import FullCodingServices from "./components/revenueCycle/solutions/full-coding-services";
import DenialManagement from "./components/revenueCycle/solutions/denial-management";
import UMProcess from "./components/revenueCycle/solutions/pre-service";
import ChargeCapture from "./components/revenueCycle/solutions/charge-capture";
import TelehealthRPM from "./components/revenueCycle/solutions/telehealth";
import MedicalRecordsManagement from "./components/revenueCycle/solutions/medical-records";
import HomeHealthCare from "./components/revenueCycle/solutions/home-health";
import CashPostingComponent from "./components/revenueCycle/solutions/cash-posting";
import EligibilityVerificationComponent from "./components/revenueCycle/solutions/eligibility-verification";
import AccountsReceivables from "./components/revenueCycle/solutions/account-receivable";
import PrivacyPolicy from "./components/footer/privacy-policy";
import TermsOfService from "./components/footer/terms";
import PatientPreRegistration from "./components/revenueCycle/solutions/pre-registration";
import ClaimSubmission from "./components/revenueCycle/solutions/claim-submission";
import ClaimManagement from "./components/revenueCycle/solutions/claim-management";
import ImprovePatient from "./components/Home/blogPosts/improvePatient";
import AiHealth from "./components/Home/blogPosts/aiHealth";
import DataAnalytics from "./components/Home/blogPosts/dataAnalytics";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/winsoltech" element={<Home />} />
          <Route path="blogPosts/improving-patient-care" element={<ImprovePatient />} />
          <Route path="blogPosts/ai-in-healthcare" element={<AiHealth />} />
          <Route path="blogPosts/data-analytics-in-healthcare" element={<DataAnalytics />} />
          <Route path="/solutions" element={<RevenueCycle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="solutions/full-coding-services" element={<FullCodingServices />} />
          <Route path="solutions/denial-management" element={<DenialManagement/>} />
          <Route path="solutions/pre-service" element={<UMProcess />} />
          <Route path="solutions/charge-capture" element={<ChargeCapture />} />
          <Route path="solutions/telehealth" element={<TelehealthRPM />} />
          <Route path="solutions/medical-records" element={<MedicalRecordsManagement />} />
          <Route path="solutions/home-health" element={<HomeHealthCare />} />
          <Route path="solutions/cash-posting" element={<CashPostingComponent />} />
          <Route path="solutions/eligibility-verification" element={<EligibilityVerificationComponent />} />
          <Route path="solutions/account-receivable" element={<AccountsReceivables />} />
          <Route path="solutions/pre-registration" element={<PatientPreRegistration />} />
          <Route path="solutions/claim-submission" element={<ClaimSubmission />} />
          <Route path="solutions/claim-management" element={<ClaimManagement />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
