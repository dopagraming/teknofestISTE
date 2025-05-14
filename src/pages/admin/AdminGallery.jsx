import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Plus, Search, Filter, Trash2, 
  ChevronDown, Image as ImageIcon, X, 
  Calendar, Download
} from 'lucide-react';

const AdminGallery = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data - In production, this would come from your API
  const images = [
    {
      id: 1,
      caption: 'Robotics Workshop 2024',
      category: 'workshops',
      date: '2024-03-15',
      url: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg'
    },
    {
      id: 2,
      caption: 'AI Team Project Presentation',
      category: 'projects',
      date: '2024-03-10',
      url: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg'
    },
    {
      id: 3,
      caption: 'Team Building Event',
      category: 'teamBuilding',
      date: '2024-03-05',
      url: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg'
    }
  ];

  const categories = [
    { value: 'all', label: t('gallery.filter.all') },
    { value: 'workshops', label: t('gallery.filter.workshops') },
    { value: 'competitions', label: t('gallery.filter.competitions') },
    { value: 'teamBuilding', label: t('gallery.filter.teamBuilding') },
    { value: 'projects', label: t('gallery.filter.projects') }
  ];

  const filteredImages = images.filter(image => {
    const matchesSearch = image.caption.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDeleteImage = (imageId) => {
    // Implement delete functionality
    console.log('Delete image:', imageId);
  };

  const handleDownloadImage = (imageUrl) => {
    // Implement download functionality
    console.log('Download image:', imageUrl);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-dark-800 dark:text-light-100">
          {t('admin.gallery.title')}
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>{t('admin.gallery.upload')}</span>
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500" size={20} />
          <input
            type="text"
            placeholder={t('gallery.filter.search')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input pl-10"
          />
        </div>

        {/* Category filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500" size={20} />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="form-input pl-10 appearance-none"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500" size={20} />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-dark-700 rounded-lg shadow-sm overflow-hidden group"
          >
            {/* Image */}
            <div className="relative aspect-video">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-dark-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button
                  onClick={() => handleDownloadImage(image.url)}
                  className="p-2 bg-white/90 dark:bg-dark-800/90 rounded-full hover:bg-white dark:hover:bg-dark-800 transition-colors"
                  title="Download"
                >
                  <Download size={16} className="text-primary-500" />
                </button>
                <button
                  onClick={() => handleDeleteImage(image.id)}
                  className="p-2 bg-white/90 dark:bg-dark-800/90 rounded-full hover:bg-white dark:hover:bg-dark-800 transition-colors"
                  title="Delete"
                >
                  <Trash2 size={16} className="text-error" />
                </button>
              </div>
            </div>

            {/* Image Details */}
            <div className="p-4">
              <h3 className="font-medium text-dark-800 dark:text-light-100 mb-2">
                {image.caption}
              </h3>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-dark-500 dark:text-light-400">
                  <Calendar size={14} className="mr-1" />
                  <span>{image.date}</span>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  {t(`gallery.filter.${image.category}`)}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No results */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-light-200 dark:bg-dark-600 rounded-full mb-4">
            <ImageIcon size={32} className="text-dark-400 dark:text-light-500" />
          </div>
          <h3 className="text-lg font-medium text-dark-800 dark:text-light-100 mb-2">
            {t('admin.common.noResults')}
          </h3>
          <p className="text-dark-500 dark:text-light-400">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}

      {/* Upload Images Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-dark-900/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white dark:bg-dark-700 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-light-300 dark:border-dark-600">
              <h2 className="text-xl font-semibold text-dark-800 dark:text-light-100">
                {t('admin.gallery.upload')}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-light-200 dark:hover:bg-dark-600 rounded-full transition-colors"
              >
                <X size={20} className="text-dark-400 dark:text-light-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <form className="space-y-6">
                {/* Image Upload */}
                <div>
                  <label className="form-label">
                    {t('admin.gallery.upload')}
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-light-300 dark:border-dark-600 rounded-md">
                    <div className="space-y-1 text-center">
                      <ImageIcon className="mx-auto h-12 w-12 text-dark-400 dark:text-light-500" />
                      <div className="flex text-sm text-dark-500 dark:text-light-400">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-primary-500 hover:text-primary-600"
                        >
                          <span>Upload files</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            multiple
                            accept="image/*"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-dark-500 dark:text-light-400">
                        PNG, JPG up to 10MB each
                      </p>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div>
                  <label htmlFor="caption" className="form-label">
                    {t('admin.gallery.caption')}
                  </label>
                  <input
                    type="text"
                    id="caption"
                    className="form-input"
                    placeholder="Enter image caption"
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="form-label">
                    {t('admin.gallery.category')}
                  </label>
                  <select id="category" className="form-input">
                    {categories.slice(1).map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="date" className="form-label">
                    {t('admin.gallery.date')}
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="form-input"
                  />
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-4 p-6 border-t border-light-300 dark:border-dark-600">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn bg-light-200 dark:bg-dark-600 text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-500"
              >
                {t('admin.common.cancel')}
              </button>
              <button className="btn-primary">
                {t('admin.common.save')}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default AdminGallery;