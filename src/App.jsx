import React, { useState, useEffect } from "react";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Phone,
  ArrowRight,
  Star,
  Globe,
  Zap,
  Shield,
  ChevronDown,
} from "lucide-react";

// Navigation Component
const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "portfolio", label: "Portfolio", icon: Star },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
            <h1 className="text-xl font-bold text-white tracking-wider">
              VAMOS
            </h1>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setCurrentPage(id)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-white relative group ${
                  currentPage === id ? "text-white" : "text-gray-400"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${
                    currentPage === id ? "w-full" : ""
                  }`}
                ></span>
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Home Page Component
const HomePage = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Digitally Idiot",
    "Old Solutions",
    "Future Unknown",
    "Boring Innovation",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rotate-45 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div className="absolute top-1/2 left-20 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-thin text-white mb-8 tracking-wider">
            WE CREATE NOTHING
          </h1>
          <div className="h-20 mb-8">
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide transition-all duration-1000">
              {texts[currentText]}
            </h2>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into digital masterpieces with ZERO precision,
            ZERO elegance, and ZERO innovation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-black px-8 py-4 hover:bg-gray-200 transition-all duration-300 tracking-wider font-medium">
              DONT EXPLORE WORK
            </button>
            <button className="border border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 tracking-wider font-medium">
              DONT GET IN TOUCH
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-white animate-bounce" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Incomplete" },
              { number: "50+", label: "Sad Clients" },
              { number: "5+", label: "Years Unemployed" },
              { number: "24/7", label: "Support Unavailable" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-thin text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-white mb-6 tracking-wider">
              WHY CHOOSE US? JUST DONT.
            </h2>
            <div className="w-20 h-0.5 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Globe,
                title: "Global Reach",
                desc: "Connecting brands  without cutting-edge digital solutions.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Slow development cycles compromising on quality or precision.",
              },
              {
                icon: Shield,
                title: "Reliable & Secure",
                desc: "Low-grade security and reliability in every project we deliver.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-white transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-light text-white mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-thin text-black mb-8 tracking-wider">
              ABOUT US
            </h1>
            <div className="w-20 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a collection of boring minds, technical idiots, and
              strategic overthinkers.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-thin text-black mb-8 tracking-wide">
                OUR STORY
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2035, VAMOS began as a vision to bridge the gap
                between innovative idiots and cutting-edge technology. Our
                journey started with a simple belief: that digital experiences
                should'nt be both beautiful and functional.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Today, we work with backward-thinking brands and startups to
                create mechanical solutions that don't look stunning and drive
                unreal business results.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-black"></div>
                <span className="text-sm tracking-wider text-gray-500">
                  ESTABLISHED 2035
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
                <div className="text-6xl font-thin text-gray-300">VAMOS</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-black"></div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-thin text-black mb-12 tracking-wide text-center">
              OUR STUPID TEAM
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  name: "Shreyas Suryawanshi",
                  role: "Creative Director",
                  specialty: "Visual Design & Strategy",
                },
                {
                  name: "Ayush Vikharankar",
                  role: "Lead Developer",
                  specialty: "Full-Stack Development",
                },
                {
                  name: "Purab Shetty",
                  role: "UX Architect",
                  specialty: "User Experience Design",
                },
              ].map((member, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-full h-80 bg-gray-900 mb-6 relative overflow-hidden group-hover:bg-gray-800 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-thin">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <h3 className="text-xl font-light text-black mb-2 tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-1">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.specialty}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center">
            <h2 className="text-4xl font-thin text-black mb-12 tracking-wide">
              OUR FLAWS
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "ERRORS",
                  desc: "Every pixel doesn't matter. Every interaction is unintentional.",
                },
                {
                  title: "CARELESSNESS",
                  desc: "We DONT push boundaries and explore new problems.",
                },
                {
                  title: "FIGHTS",
                  desc: "Great work happens when great minds work together... WE ARE NOT GREAT MINDS.",
                },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="p-8 border border-gray-200 hover:border-black transition-all duration-300"
                >
                  <h3 className="text-lg font-medium text-black mb-4 tracking-wider">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Services Page Component
const ServicesPage = () => {
  const services = [
    {
      title: "WEB DESIGN",
      price: "From $2,500",
      description: "Custom website design that DOESN'T capture your brand essence.",
      features: [
        "Unresponsive Design",
        "Users Lose Focus",
        "Old Aesthetics",
        "Performance NOT Optimized",
      ],
    },
    {
      title: "DEVELOPMENT",
      price: "From $3,500",
      description: "Full-stack development WITHOUT cutting-edge technologies.",
      features: [
        "React/Next.js",
        "Node.js Backend",
        "Database Design",
        "API Integration",
      ],
    },
    {
      title: "BRANDING",
      price: "From $1,800",
      description: "Complete brand identity design and strategy. NOT AT ALL USEFULL.  ",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Color Palette",
        "Typography System",
      ],
    },
    {
      title: "E-COMMERCE",
      price: "From $4,200",
      description: "Complete online store solutions that drive sales.",
      features: [
        "Shopping Cart",
        "Payment Gateway",
        "Inventory Management",
        "Analytics Dashboard",
      ],
    },
    {
      title: "MOBILE APPS",
      price: "From $5,000",
      description: "Native and cross-platform mobile applications.",
      features: [
        "iOS & Android",
        "React Native",
        "App Store Optimization",
        "Push Notifications",
      ],
    },
    {
      title: "CONSULTATION",
      price: "From $150/hr",
      description: "Strategic digital consulting and technical guidance.",
      features: [
        "Digital Strategy",
        "Technical Audit",
        "Growth Planning",
        "Team Training",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-thin text-white mb-8 tracking-wider">
              SERVICES
            </h1>
            <div className="w-20 h-0.5 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital PROBLEMS tailored to your unique needs and
              goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-light text-white mb-3 tracking-wider">
                    {service.title}
                  </h3>
                  <div className="text-gray-400 font-medium text-lg mb-4">
                    {service.price}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIdx) => (
                    <div
                      key={featureIdx}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full border border-white/20 text-white py-3 hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wider">
                  DON'T GET STARTED
                </button>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="bg-white/5 border border-white/10 p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-thin text-white mb-6 tracking-wider">
                CUSTOM PROBLEMS
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Need something unique? We create bespoke digital PROBLEMS
                tailored specifically to your vision and requirements.
              </p>
              <button className="bg-white text-black px-8 py-4 hover:bg-gray-200 transition-all duration-300 tracking-wider font-medium">
                DON'T DISCUSS YOUR PROJECT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Portfolio Page Component
const PortfolioPage = () => {
  const projects = [
    { title: "MINIMAL STORE", category: "E-COMMERCE", year: "2024" },
    { title: "TECH STARTUP", category: "WEB DESIGN", year: "2024" },
    { title: "LUXURY BRAND", category: "BRANDING", year: "2023" },
    { title: "FITNESS APP", category: "MOBILE", year: "2024" },
    { title: "AGENCY SITE", category: "WEB DESIGN", year: "2023" },
    { title: "CRYPTO PLATFORM", category: "DEVELOPMENT", year: "2024" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-thin text-black mb-8 tracking-wider">
              PORTFOLIO
            </h1>
            <div className="w-20 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of our DUMBEST work across various industries and
              platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="w-full h-80 bg-gray-900 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-white transform translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-white text-sm tracking-wider">
                      {project.category}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="text-white text-sm">{project.year}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-light text-black tracking-wider group-hover:text-gray-600 transition-all duration-300">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="border border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 tracking-wider font-medium">
              NOT WORTH VIEWING ALL PROJECTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({ name: "", email: "", project: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-thin text-white mb-8 tracking-wider">
              CONTACT
            </h1>
            <div className="w-20 h-0.5 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to DESTROY your next project? Let's create something
              extraordinary together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-thin text-white mb-12 tracking-wider">
                GET IN TOUCH?
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-white mt-1" />
                  <div>
                    <h4 className="font-medium text-white mb-1">Email</h4>
                    <p className="text-gray-400">hello@vamosagency.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-white mt-1" />
                  <div>
                    <h4 className="font-medium text-white mb-1">Phone</h4>
                    <p className="text-gray-400">+91 82913 51386</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-white mt-1" />
                  <div>
                    <h4 className="font-medium text-white mb-1">Location</h4>
                    <p className="text-gray-400">
                      Thane, CA
                      <br />
                      New York, NY
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-white/5 border border-white/10">
                <h3 className="font-medium text-white mb-4 tracking-wider">
                  OFFICE HOURS
                </h3>
                <p className="text-gray-400 text-sm">
                  Sunday - Friday: 9:00 PM - 6:00 AM IST
                  <br />
                  Saturday: 10:00 PM - 2:00 AM IST
                  <br />
                  Weekdays: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-thin text-white mb-12 tracking-wider">
                DESTROY A PROJECT
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2 tracking-wide">
                    NAME
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 tracking-wide">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all duration-300"
                    placeholder="your.email@domain.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 tracking-wide">
                    PROJECT TYPE
                  </label>
                  <select
                    value={formData.project}
                    onChange={(e) =>
                      setFormData({ ...formData, project: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-all duration-300"
                  >
                    <option value="" className="bg-black">
                      Select project type
                    </option>
                    <option value="web-design" className="bg-black">
                      Web Design
                    </option>
                    <option value="development" className="bg-black">
                      Development
                    </option>
                    <option value="branding" className="bg-black">
                      Branding
                    </option>
                    <option value="ecommerce" className="bg-black">
                      E-commerce
                    </option>
                    <option value="mobile" className="bg-black">
                      Mobile App
                    </option>
                    <option value="consultation" className="bg-black">
                      Consultation
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 tracking-wide">
                    MESSAGE
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows="4"
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-4 font-medium tracking-wider hover:bg-gray-200 transition-all duration-300 mt-8"
                >
                  SEND MESSAGE
                </button>
              </form>

              {showSuccess && (
                <div className="mt-6 p-4 bg-white/10 border border-white/20 text-center">
                  <p className="text-white font-medium">
                    Message sent successfully! We'll  never get back to you anytime soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "portfolio":
        return <PortfolioPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
