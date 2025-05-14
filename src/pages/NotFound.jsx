import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Home, AlertCircle } from 'lucide-react';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-light-200 dark:bg-dark-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Error Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-error/10 text-error rounded-full mb-8">
            <AlertCircle size={40} />
          </div>

          {/* Error Message */}
          <h1 className="text-4xl font-bold text-dark-800 dark:text-light-100 mb-4">
            {t('common.notFound.title')}
          </h1>
          <p className="text-lg text-dark-600 dark:text-light-300 mb-8">
            {t('common.notFound.message')}
          </p>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            <Home size={20} className="mr-2" />
            {t('common.notFound.home')}
          </Link>

          {/* Decorative Elements */}
          <div className="mt-12 space-y-4">
            <div className="h-2 w-24 bg-error/20 rounded-full mx-auto" />
            <div className="h-2 w-16 bg-error/10 rounded-full mx-auto" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;