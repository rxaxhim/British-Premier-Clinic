import brandLogo from "@/assets/BP-logo.png";
import { Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="flex flex-col items-center text-center max-w-md w-full space-y-8">

        {/* Logo on white card */}
        <div className="bg-white rounded-2xl shadow-md px-10 py-8 w-full flex items-center justify-center">
          <img
            src={brandLogo}
            alt="British Premier Psychiatry & Psychology Center"
            className="w-64 sm:w-72 h-auto"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Under Maintenance
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            We're making some improvements to serve you better.
            <br />
            We'll be back online on <span className="font-semibold text-gray-700">Saturday, May 16th 2026</span>.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200" />

        {/* Contact card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-full space-y-4">
          <p className="text-xs uppercase tracking-widest font-semibold text-gray-400">
            Need urgent assistance?
          </p>
          <div className="space-y-3">
            <a
              href="tel:+971523052680"
              className="flex items-center justify-center gap-3 text-gray-700 hover:text-blue-600 transition-colors text-sm"
            >
              <Phone className="h-4 w-4 flex-shrink-0 text-blue-600" />
              <span>+971 52 305 2680</span>
            </a>
            <a
              href="mailto:info.britishpremier@gmail.com"
              className="flex items-center justify-center gap-3 text-gray-700 hover:text-blue-600 transition-colors text-sm"
            >
              <Mail className="h-4 w-4 flex-shrink-0 text-blue-600" />
              <span>info.britishpremier@gmail.com</span>
            </a>
            <div className="flex items-center justify-center gap-3 text-gray-500 text-sm">
              <Clock className="h-4 w-4 flex-shrink-0 text-blue-600" />
              <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
            </div>
            <a
              href="https://wa.me/971523052680"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-gray-700 hover:text-[#25D366] transition-colors text-sm"
            >
              <FaWhatsapp className="h-4 w-4 flex-shrink-0 text-[#25D366]" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} British Premier Psychiatry &amp; Psychology Center
          <br />
          <span>Website by{" "}
            <a
              href="https://yoururls.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-500 hover:text-blue-600 transition-colors underline underline-offset-2"
            >
              YourURLs
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default MaintenancePage;
