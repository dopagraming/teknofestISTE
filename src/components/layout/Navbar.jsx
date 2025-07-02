import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll event for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle language toggle
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "tr" : "en";
    i18n.changeLanguage(newLang);
  };

  // Nav items
  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.projects"), path: "/projects" },
    { name: t("nav.team"), path: "/team" },
    { name: t("nav.events"), path: "/events" },
    { name: t("nav.gallery"), path: "/gallery" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-dark-800 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary-500">
            Teknofest
            <span className="text-accent-500">İSTE</span> Clone
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
            px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200
            ${
              isActive
                ? "text-secondary-500 dark:text-secondary-400 border-b-2 border-secondary-500"
                : "text-dark-300 dark:text-light-300 hover:text-secondary-500 dark:hover:text-secondary-400"
            }
          `}
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/join"
            className="ml-3 px-5 py-2 rounded-lg text-sm font-semibold bg-accent-500 text-white hover:bg-accent-600 transition-colors duration-200"
          >
            {t("nav.join")}
          </NavLink>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors"
            aria-label={
              theme === "dark" ? t("common.lightMode") : t("common.darkMode")
            }
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="ml-1 p-2 rounded-full text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors"
            aria-label={t("common.langSwitch")}
          >
            <Globe size={20} />
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-1 rounded-full text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors"
            aria-label={
              theme === "dark" ? t("common.lightMode") : t("common.darkMode")
            }
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={toggleLanguage}
            className="p-2 mr-2 rounded-full text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors"
            aria-label={t("common.langSwitch")}
          >
            <Globe size={20} />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-dark-800 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                px-4 py-2 rounded-md text-sm font-semibold transition-colors
                ${
                  isActive
                    ? "text-secondary-500 dark:text-secondary-400 bg-light-300 dark:bg-dark-700"
                    : "text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-700"
                }
              `}
                >
                  {item.name}
                </NavLink>
              ))}

              <NavLink
                to="/join"
                className="px-4 py-2 rounded-md text-sm font-semibold bg-accent-500 text-white hover:bg-accent-600 transition-colors"
              >
                {t("nav.join")}
              </NavLink>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
