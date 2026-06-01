import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Connectors from "./pages/Connectors/Connectors";
import About from "./pages/About/About";
import WhiteLabelGateway from "./pages/WhiteLabelGateway";
import PaymentOrchestration from "./pages/PaymentOrchestration";
import PaymentInfrastructure from "./pages/PaymentInfrastructure";

import "./App.css";
import LaunchingPaymentPlatform from "./pages/UseCase/LaunchingPaymentPlatform";
import GrowingYourPaymentBusiness from "./pages/UseCase/GrowingYourPaymentBusiness";
import ModernizingPaymentTechnology from "./pages/UseCase/ModernizingPaymentTechnology";
import EmbeddedPayments from "./pages/UseCase/EmbeddedPayments";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connectors" element={<Connectors />} />
          <Route path="/about" element={<About />} />
            <Route 
            path="/use-cases/launching-a-payment-platform" 
            element={<LaunchingPaymentPlatform />} 
          />
           <Route 
            path="/use-cases/growing-your-payment-business" 
            element={<GrowingYourPaymentBusiness />} 
          />
          <Route 
            path="/use-cases/modernizing-payment-technology" 
            element={<ModernizingPaymentTechnology />} 
          />
          <Route 
            path="/use-cases/embedded-payments" 
            element={<EmbeddedPayments />} 
          />

        </Routes>
      </MainLayout>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/connectors"
          element={
            <MainLayout>
              <Connectors />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        <Route
          path="/white-label-payment-gateway"
          element={
            <MainLayout>
              <WhiteLabelGateway />
            </MainLayout>
          }
        />

        <Route
          path="/payment-orchestration-platform"
          element={
            <MainLayout>
              <PaymentOrchestration />
            </MainLayout>
          }
        />

        <Route
          path="/payment-infrastructure"
          element={
            <MainLayout>
              <PaymentInfrastructure />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
