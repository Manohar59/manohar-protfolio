import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHireMe, setShowHireMe] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const sideMenuLinks = [
    { href: "#about", label: "Skills" },
    { href: "#certificates", label: "Internship Certificates" },
    { href: "#certificates", label: "Professional Certificates" },
    { href: "#projects", label: "Projects" },
    { href: "#languages", label: "Languages" },
    { href: "#contact", label: "Contact Me" },
  ];

  const handleHireMe = () => {
    setShowHireMe(true);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold gradient-text">
              Manohar!
            </a>

            {/* Desktop Nav + Hamburger */}
            <div className="flex items-center gap-8">
              <ul className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="nav-link text-lg">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Hamburger Menu Button */}
              <button
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Side Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end" onClick={() => setIsOpen(false)}>
          <div
            className="w-72 bg-background border-l border-border h-full shadow-2xl p-6 pt-20 fade-in overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 text-foreground"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            <ul className="flex flex-col gap-4">
              {sideMenuLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="nav-link text-lg block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={handleHireMe}
                  className="w-full text-left text-lg font-semibold py-2 px-4 rounded-lg bg-white text-black hover:bg-white/90 transition-colors"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Hire Me Modal */}
      {showHireMe && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setShowHireMe(false)}>
          <div
            className="glass-card w-full max-w-lg p-8 rounded-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors"
              onClick={() => setShowHireMe(false)}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold gradient-text mb-6">Hire Me</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const name = formData.get("name");
                const email = formData.get("email");
                const subject = formData.get("subject");
                const message = formData.get("message");
                window.location.href = `mailto:kathimanohar621@gmail.com?subject=${encodeURIComponent(String(subject))}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
                setShowHireMe(false);
              }}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Manohar"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Subject</label>
                <input
                   name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                <textarea
                  name="message"
                  placeholder="Hello, I'd like to discuss about Project or else."
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 py-3"
              >
                Send Message ✈
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
