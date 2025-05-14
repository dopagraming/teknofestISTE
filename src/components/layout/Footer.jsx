import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 text-light-300 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">
                Teknofest
                <span className="text-accent-500">Club</span>
              </span>
            </Link>
            <p className="text-sm text-light-400 mb-4">
              A student-led initiative dedicated to participating in Teknofest competitions and fostering innovation in technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-light-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-light-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-light-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-light-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-light-400 hover:text-primary-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-white mb-4 text-lg">{t('nav.about')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-light-400 hover:text-primary-400 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-light-400 hover:text-primary-400 transition-colors">
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-light-400 hover:text-primary-400 transition-colors">
                  {t('nav.team')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-light-400 hover:text-primary-400 transition-colors">
                  {t('nav.gallery')}
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-white mb-4 text-lg">{t('common.moreInfo')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events" className="text-light-400 hover:text-primary-400 transition-colors">
                  {t('nav.events')}
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-light-400 hover:text-primary-400 transition-colors">
                  {t('nav.join')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light-400 hover:text-primary-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <a href="https://teknofest.org" target="_blank" rel="noopener noreferrer" className="text-light-400 hover:text-primary-400 transition-colors">
                  Teknofest
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold text-white mb-4 text-lg">{t('contact.info.title')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-light-400" />
                <a href="mailto:info@teknofestclub.com" className="text-light-400 hover:text-primary-400 transition-colors">
                  info@teknofestclub.com
                </a>
              </li>
              <li className="text-light-400">
                University Campus
                <br />
                Building B, Room 204
                <br />
                Istanbul, Turkey
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-light-500 mb-4 md:mb-0">
            &copy; {currentYear} Teknofest Club. {t('common.moreInfo')}
          </p>
          
          <div className="flex space-x-4 text-sm text-light-500">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;