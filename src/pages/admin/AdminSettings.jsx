import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Globe, Moon, Sun, Image as ImageIcon,
  Facebook, Twitter, Instagram, Linkedin,
  Github, Save
} from 'lucide-react';

const AdminSettings = () => {
  const { t, i18n } = useTranslation();
  const [settings, setSettings] = useState({
    language: i18n.language,
    theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
    socialLinks: {
      facebook: 'https://facebook.com/teknofestclub',
      twitter: 'https://twitter.com/teknofestclub',
      instagram: 'https://instagram.com/teknofestclub',
      linkedin: 'https://linkedin.com/company/teknofestclub',
      github: 'https://github.com/teknofestclub'
    },
    about: {
      title: 'Teknofest Club',
      description: 'A student-led initiative dedicated to participating in Teknofest competitions and fostering innovation in technology.'
    }
  });

  const handleSocialChange = (platform, value) => {
    setSettings(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value
      }
    }));
  };

  const handleAboutChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      about: {
        ...prev.about,
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    // Implement save functionality
    console.log('Save settings:', settings);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-dark-800 dark:text-light-100">
          {t('admin.settings.title')}
        </h1>
        <button
          onClick={handleSave}
          className="btn-primary flex items-center gap-2"
        >
          <Save size={20} />
          {t('admin.common.save')}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-dark-700 rounded-lg shadow-sm overflow-hidden"
        >
          <div className="p-6 border-b border-light-300 dark:border-dark-600">
            <h2 className="text-lg font-semibold text-dark-800 dark:text-light-100">
              {t('admin.settings.general')}
            </h2>
          </div>
          <div className="p-6 space-y-6">
            {/* Language */}
            <div>
              <label className="form-label flex items-center gap-2">
                <Globe size={16} />
                {t('admin.settings.language')}
              </label>
              <select
                value={settings.language}
                onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                className="form-input"
              >
                <option value="en">English</option>
                <option value="tr">Türkçe</option>
              </select>
            </div>

            {/* Theme */}
            <div>
              <label className="form-label flex items-center gap-2">
                {settings.theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
                {t('admin.settings.theme')}
              </label>
              <select
                value={settings.theme}
                onChange={(e) => setSettings(prev => ({ ...prev, theme: e.target.value }))}
                className="form-input"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>

            {/* Logo */}
            <div>
              <label className="form-label flex items-center gap-2">
                <ImageIcon size={16} />
                {t('admin.settings.logo')}
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-light-300 dark:border-dark-600 rounded-md">
                <div className="space-y-1 text-center">
                  <ImageIcon className="mx-auto h-12 w-12 text-dark-400 dark:text-light-500" />
                  <div className="flex text-sm text-dark-500 dark:text-light-400">
                    <label
                      htmlFor="logo-upload"
                      className="relative cursor-pointer rounded-md font-medium text-primary-500 hover:text-primary-600"
                    >
                      <span>Upload a file</span>
                      <input id="logo-upload" name="logo-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-dark-500 dark:text-light-400">
                    PNG, SVG up to 2MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-dark-700 rounded-lg shadow-sm overflow-hidden"
        >
          <div className="p-6 border-b border-light-300 dark:border-dark-600">
            <h2 className="text-lg font-semibold text-dark-800 dark:text-light-100">
              {t('admin.settings.social')}
            </h2>
          </div>
          <div className="p-6 space-y-6">
            {/* Facebook */}
            <div>
              <label className="form-label flex items-center gap-2">
                <Facebook size={16} />
                Facebook
              </label>
              <input
                type="url"
                value={settings.socialLinks.facebook}
                onChange={(e) => handleSocialChange('facebook', e.target.value)}
                className="form-input"
                placeholder="https://facebook.com/..."
              />
            </div>

            {/* Twitter */}
            <div>
              <label className="form-label flex items-center gap-2">
                <Twitter size={16} />
                Twitter
              </label>
              <input
                type="url"
                value={settings.socialLinks.twitter}
                onChange={(e) => handleSocialChange('twitter', e.target.value)}
                className="form-input"
                placeholder="https://twitter.com/..."
              />
            </div>

            {/* Instagram */}
            <div>
              <label className="form-label flex items-center gap-2">
                <Instagram size={16} />
                Instagram
              </label>
              <input
                type="url"
                value={settings.socialLinks.instagram}
                onChange={(e) => handleSocialChange('instagram', e.target.value)}
                className="form-input"
                placeholder="https://instagram.com/..."
              />
            </div>

            {/* LinkedIn */}
            <div>
              <label className="form-label flex items-center gap-2">
                <Linkedin size={16} />
                LinkedIn
              </label>
              <input
                type="url"
                value={settings.socialLinks.linkedin}
                onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                className="form-input"
                placeholder="https://linkedin.com/..."
              />
            </div>

            {/* GitHub */}
            <div>
              <label className="form-label flex items-center gap-2">
                <Github size={16} />
                GitHub
              </label>
              <input
                type="url"
                value={settings.socialLinks.github}
                onChange={(e) => handleSocialChange('github', e.target.value)}
                className="form-input"
                placeholder="https://github.com/..."
              />
            </div>
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-dark-700 rounded-lg shadow-sm overflow-hidden lg:col-span-2"
        >
          <div className="p-6 border-b border-light-300 dark:border-dark-600">
            <h2 className="text-lg font-semibold text-dark-800 dark:text-light-100">
              {t('admin.settings.about')}
            </h2>
          </div>
          <div className="p-6 space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="about-title" className="form-label">
                Title
              </label>
              <input
                id="about-title"
                type="text"
                value={settings.about.title}
                onChange={(e) => handleAboutChange('title', e.target.value)}
                className="form-input"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="about-description" className="form-label">
                Description
              </label>
              <textarea
                id="about-description"
                value={settings.about.description}
                onChange={(e) => handleAboutChange('description', e.target.value)}
                rows={4}
                className="form-input"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdminSettings;