import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-medium border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="British Premier Psychiatry" className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
            <div className="block">
              <h1 className="text-lg font-semibold text-foreground leading-tight">
                British Premier
              </h1>
              <p className="text-sm text-muted-foreground -mt-1">
                Psychiatry & Psychology
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) 
                    ? "text-primary" 
                    : "text-foreground"
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                  isActive(item.href) ? "after:w-full" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact" className="flex items-center space-x-2 border-black/30">
                <Phone className="h-4 w-4" />
                <span>Call Us</span>
              </Link>
            </Button>
            <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90" asChild>
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="sm">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-3">
                  <img src={logo} alt="British Premier Psychiatry" className="h-14 w-14 sm:h-16 sm:w-16" />
                  <div>
                    <h2 className="font-semibold text-foreground">British Premier</h2>
                    <p className="text-sm text-muted-foreground">Psychiatry & Psychology</p>
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        isActive(item.href) 
                          ? "text-primary" 
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col space-y-3 pt-6 border-t border-border">
                  <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
                    <Link to="/contact" className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Call Us</span>
                    </Link>
                  </Button>
                  <Button className="bg-gradient-primary text-primary-foreground" asChild onClick={() => setIsOpen(false)}>
                    <Link to="/appointment">Book Appointment</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;