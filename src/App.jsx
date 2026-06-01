import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Connectors from "./pages/Connectors/Connectors";
import About from "./pages/About/About";
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
    </BrowserRouter>
  );
}

export default App;