import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  LayoutDashboard, FolderKanban, Users, Calendar, 
  Image, UserPlus, MessageSquare, Settings, 
  LogOut, Menu, X, Moon, Sun, Globe 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminLayout = () => {
  const { t, i18n } = useTranslation();
  const { logout, user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
  };

  // Menu items with their icons
  const menuItems = [
    { 
      path: '/admin', 
      label: t('admin.sidebar.dashboard'), 
      icon: <LayoutDashboard size={20} /> 
    },
    { 
      path: '/admin/projects', 
      label: t('admin.sidebar.projects'), 
      icon: <FolderKanban size={20} /> 
    },
    { 
      path: '/admin/team', 
      label: t('admin.sidebar.team'), 
      icon: <Users size={20} /> 
    },
    { 
      path: '/admin/events', 
      label: t('admin.sidebar.events'), 
      icon: <Calendar size={20} /> 
    },
    { 
      path: '/admin/gallery', 
      label: t('admin.sidebar.gallery'), 
      icon: <Image size={20} /> 
    },
    { 
      path: '/admin/join-requests', 
      label: t('admin.sidebar.joinRequests'), 
      icon: <UserPlus size={20} /> 
    },
    { 
      path: '/admin/messages', 
      label: t('admin.sidebar.messages'), 
      icon: <MessageSquare size={20} /> 
    },
    { 
      path: '/admin/settings', 
      label: t('admin.sidebar.settings'), 
      icon: <Settings size={20} /> 
    },
  ];

  return (
    <div className="min-h-screen bg-light-200 dark:bg-dark-800 flex">
      {/* Sidebar - Desktop */}
      <aside className="fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-dark-700 shadow-md hidden md:flex flex-col">
        {/* Sidebar header */}
        <div className="h-16 flex items-center justify-center border-b border-light-300 dark:border-dark-600">
          <Link to="/admin" className="flex items-center">
            <span className="text-xl font-bold text-primary-500">
              Teknofest<span className="text-accent-500">Club</span>
              <span className="ml-1 text-sm font-normal text-dark-500 dark:text-light-400">Admin</span>
            </span>
          </Link>
        </div>

        {/* Menu items */}
        <nav className="flex-1 pt-4 pb-4 overflow-y-auto">
          <ul className="px-2 space-y-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors
                    ${location.pathname === item.path
                      ? 'bg-primary-50 dark:bg-dark-600 text-primary-600 dark:text-primary-400'
                      : 'text-dark-600 dark:text-light-300 hover:bg-light-200 dark:hover:bg-dark-600'
                    }
                  `}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-light-300 dark:border-dark-600">
          {user && (
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 text-sm font-medium">
                {user.name?.charAt(0) || 'A'}
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium text-dark-800 dark:text-light-100 truncate">
                  {user.name || 'Admin User'}
                </p>
                <p className="text-xs text-dark-500 dark:text-light-400 truncate">
                  {user.email || 'admin@example.com'}
                </p>
              </div>
            </div>
          )}
          
          <div className="flex justify-between">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors"
              aria-label={theme === 'dark' ? t('common.lightMode') : t('common.darkMode')}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-md text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors"
              aria-label={t('common.langSwitch')}
            >
              <Globe size={20} />
            </button>
            
            <button
              onClick={handleLogout}
              className="p-2 rounded-md text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors"
              aria-label={t('admin.sidebar.logout')}
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-20 bg-dark-900 bg-opacity-50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-dark-700 shadow-lg md:hidden flex flex-col"
          >
            {/* Sidebar header */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-light-300 dark:border-dark-600">
              <Link to="/admin" className="flex items-center">
                <span className="text-xl font-bold text-primary-500">
                  Teknofest<span className="text-accent-500">Club</span>
                </span>
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-md text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors"
                aria-label="Close sidebar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu items */}
            <nav className="flex-1 pt-4 pb-4 overflow-y-auto">
              <ul className="px-2 space-y-1">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`
                        flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors
                        ${location.pathname === item.path
                          ? 'bg-primary-50 dark:bg-dark-600 text-primary-600 dark:text-primary-400'
                          : 'text-dark-600 dark:text-light-300 hover:bg-light-200 dark:hover:bg-dark-600'
                        }
                      `}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Sidebar footer */}
            <div className="p-4 border-t border-light-300 dark:border-dark-600">
              {user && (
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 text-sm font-medium">
                    {user.name?.charAt(0) || 'A'}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm font-medium text-dark-800 dark:text-light-100 truncate">
                      {user.name || 'Admin User'}
                    </p>
                    <p className="text-xs text-dark-500 dark:text-light-400 truncate">
                      {user.email || 'admin@example.com'}
                    </p>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-md text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors"
                  aria-label={theme === 'dark' ? t('common.lightMode') : t('common.darkMode')}
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                
                <button
                  onClick={toggleLanguage}
                  className="p-2 rounded-md text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors"
                  aria-label={t('common.langSwitch')}
                >
                  <Globe size={20} />
                </button>
                
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-md text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors"
                  aria-label={t('admin.sidebar.logout')}
                >
                  <LogOut size={20} />
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 flex flex-col md:pl-64">
        {/* Header for mobile */}
        <header className="bg-white dark:bg-dark-700 shadow-sm h-16 flex items-center md:hidden">
          <div className="px-4 flex justify-between items-center w-full">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-md text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors"
              aria-label="Open sidebar"
            >
              <Menu size={24} />
            </button>
            <Link to="/admin" className="flex items-center">
              <span className="text-xl font-bold text-primary-500">
                Teknofest<span className="text-accent-500">Club</span>
              </span>
            </Link>
            <div className="w-10">
              {/* Spacer to balance the layout */}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <AnimatePresence mode="wait">
            <Outlet />
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;