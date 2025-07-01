import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/NavBar/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
