import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Plus, Search, Filter, Edit2, Trash2, 
  ChevronDown, Image as ImageIcon, X
} from 'lucide-react';

const AdminProjects = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data - In production, this would come from your API
  const projects = [
    {
      id: 1,
      name: 'Autonomous Navigation Robot',
      description: 'A robot designed to navigate complex environments without human intervention.',
      category: 'robotics',
      team: ['John Doe', 'Jane Smith'],
      status: 'active',
      image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg',
      achievements: ['2nd Place - Teknofest 2023']
    },
    {
      id: 2,
      name: 'Smart Traffic Management',
      description: 'AI-powered system to optimize traffic flow and reduce congestion.',
      category: 'ai',
      team: ['Mike Johnson', 'Sarah Lee'],
      status: 'completed',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      achievements: ['1st Place - AI Innovation']
    },
    // Add more mock projects as needed
  ];

  const categories = [
    { value: 'all', label: t('projects.filter.all') },
    { value: 'robotics', label: t('projects.categories.robotics') },
    { value: 'ai', label: t('projects.categories.ai') },
    { value: 'uav', label: t('projects.categories.uav') },
    { value: 'iot', label: t('projects.categories.iot') },
    { value: 'cyber', label: t('projects.categories.cyber') }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDeleteProject = (projectId) => {
    // Implement delete functionality
    console.log('Delete project:', projectId);
  };

  const handleEditProject = (project) => {
    // Implement edit functionality
    console.log('Edit project:', project);
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
          {t('admin.projects.title')}
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>{t('admin.projects.new')}</span>
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500" size={20} />
          <input
            type="text"
            placeholder={t('admin.common.search')}
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-dark-700 rounded-lg shadow-sm overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={() => handleEditProject(project)}
                  className="p-2 bg-white/90 dark:bg-dark-800/90 rounded-full hover:bg-white dark:hover:bg-dark-800 transition-colors"
                >
                  <Edit2 size={16} className="text-primary-500" />
                </button>
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  className="p-2 bg-white/90 dark:bg-dark-800/90 rounded-full hover:bg-white dark:hover:bg-dark-800 transition-colors"
                >
                  <Trash2 size={16} className="text-error" />
                </button>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-dark-800 dark:text-light-100">
                  {project.name}
                </h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  project.status === 'active'
                    ? 'bg-success/10 text-success'
                    : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-sm text-dark-500 dark:text-light-400 mb-4">
                {project.description}
              </p>

              {/* Team Members */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-dark-700 dark:text-light-200 mb-2">
                  Team Members
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.team.map((member, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-light-200 dark:bg-dark-600 text-dark-600 dark:text-light-300 rounded-full"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              {project.achievements.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-dark-700 dark:text-light-200 mb-2">
                    Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.achievements.map((achievement, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 rounded-full"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* No results */}
      {filteredProjects.length === 0 && (
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

      {/* Add/Edit Project Modal */}
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
                {t('admin.projects.new')}
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
                {/* Project Name */}
                <div>
                  <label htmlFor="name" className="form-label">
                    {t('admin.projects.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Enter project name"
                  />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="form-label">
                    {t('admin.projects.description')}
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="form-input"
                    placeholder="Enter project description"
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="form-label">
                    {t('admin.projects.category')}
                  </label>
                  <select id="category" className="form-input">
                    {categories.slice(1).map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Team Members */}
                <div>
                  <label htmlFor="team" className="form-label">
                    {t('admin.projects.team')}
                  </label>
                  <input
                    type="text"
                    id="team"
                    className="form-input"
                    placeholder="Enter team members (comma separated)"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="form-label">
                    {t('admin.projects.image')}
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-light-300 dark:border-dark-600 rounded-md">
                    <div className="space-y-1 text-center">
                      <ImageIcon className="mx-auto h-12 w-12 text-dark-400 dark:text-light-500" />
                      <div className="flex text-sm text-dark-500 dark:text-light-400">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-primary-500 hover:text-primary-600"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-dark-500 dark:text-light-400">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
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

export default AdminProjects;