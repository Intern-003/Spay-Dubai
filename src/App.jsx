import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Connectors from "./pages/Connectors/Connectors";
import About from "./pages/About/About";
import WhiteLabelGateway from "./pages/WhiteLabelGateway";
import PaymentOrchestration from "./pages/PaymentOrchestration";
import PaymentInfrastructure from "./pages/PaymentInfrastructure";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
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
