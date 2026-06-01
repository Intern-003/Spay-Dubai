import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}