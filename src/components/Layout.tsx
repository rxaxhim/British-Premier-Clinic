import { ReactNode, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingAppointment from "./FloatingAppointment";
import PromoPopup from "./PromoPopup";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showPromoPopup, setShowPromoPopup] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setShowPromoPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPromoPopup(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <FloatingAppointment />
      <PromoPopup isOpen={showPromoPopup} onClose={handleClosePopup} />
    </div>
  );
};

export default Layout;