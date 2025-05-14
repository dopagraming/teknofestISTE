import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Plus, Search, Filter, Edit2, Trash2, 
  ChevronDown, Image as ImageIcon, X, 
  Linkedin, Mail, Globe
} from 'lucide-react';

const AdminTeam = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');

  // Mock data - In production, this would come from your API
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'president',
      department: 'Computer Engineering',
      email: 'john@example.com',
      bio: 'Team leader with expertise in robotics and AI.',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      social: {
        linkedin: 'https://linkedin.com/in/johndoe',
        email: 'john@example.com',
        website: 'https://johndoe.com'
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'teamLead',
      department: 'Electrical Engineering',
      email: 'jane@example.com',
      bio: 'Robotics team lead with 3 years of experience.',
      photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      social: {
        linkedin: 'https://linkedin.com/in/janesmith',
        email: 'jane@example.com'
      }
    }
  ];

  const roles = [
    { value: 'all', label: t('team.filter.all') },
    { value: 'president', label: t('team.roles.president') },
    { value: 'vicePresident', label: t('team.roles.vicePresident') },
    { value: 'teamLead', label: t('team.roles.teamLead') },
    { value: 'member', label: t('team.roles.member') },
    { value: 'advisor', label: t('team.roles.advisor') }
  ];

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'all' || member.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const handleDeleteMember = (memberId) => {
    // Implement delete functionality
    console.log('Delete member:', memberId);
  };

  const handleEditMember = (member) => {
    // Implement edit functionality
    console.log('Edit member:', member);
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
          {t('admin.team.title')}
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>{t('admin.team.new')}</span>
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

        {/* Role filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500" size={20} />
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="form-input pl-10 appearance-none"
          >
            {roles.map(role => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500" size={20} />
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-dark-700 rounded-lg shadow-sm overflow-hidden"
          >
            {/* Member Photo */}
            <div className="relative h-48">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={() => handleEditMember(member)}
                  className="p-2 bg-white/90 dark:bg-dark-800/90 rounded-full hover:bg-white dark:hover:bg-dark-800 transition-colors"
                >
                  <Edit2 size={16} className="text-primary-500" />
                </button>
                <button
                  onClick={() => handleDeleteMember(member.id)}
                  className="p-2 bg-white/90 dark:bg-dark-800/90 rounded-full hover:bg-white dark:hover:bg-dark-800 transition-colors"
                >
                  <Trash2 size={16} className="text-error" />
                </button>
              </div>
            </div>

            {/* Member Details */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="font-semibold text-dark-800 dark:text-light-100 mb-1">
                  {member.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-dark-500 dark:text-light-400">
                    {member.department}
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    {t(`team.roles.${member.role}`)}
                  </span>
                </div>
              </div>

              <p className="text-sm text-dark-500 dark:text-light-400 mb-4">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-3">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-light-200 dark:hover:bg-dark-600 rounded-full transition-colors"
                  >
                    <Linkedin size={18} className="text-dark-400 dark:text-light-500" />
                  </a>
                )}
                {member.social.email && (
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 hover:bg-light-200 dark:hover:bg-dark-600 rounded-full transition-colors"
                  >
                    <Mail size={18} className="text-dark-400 dark:text-light-500" />
                  </a>
                )}
                {member.social.website && (
                  <a
                    href={member.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-light-200 dark:hover:bg-dark-600 rounded-full transition-colors"
                  >
                    <Globe size={18} className="text-dark-400 dark:text-light-500" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No results */}
      {filteredMembers.length === 0 && (
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

      {/* Add/Edit Member Modal */}
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
                {t('admin.team.new')}
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
                {/* Name */}
                <div>
                  <label htmlFor="name" className="form-label">
                    {t('admin.team.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Enter member name"
                  />
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="role" className="form-label">
                    {t('admin.team.role')}
                  </label>
                  <select id="role" className="form-input">
                    {roles.slice(1).map(role => (
                      <option key={role.value} value={role.value}>
                        {role.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Department */}
                <div>
                  <label htmlFor="department" className="form-label">
                    {t('admin.team.department')}
                  </label>
                  <input
                    type="text"
                    id="department"
                    className="form-input"
                    placeholder="Enter department"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="form-label">
                    {t('admin.team.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="Enter email address"
                  />
                </div>

                {/* Bio */}
                <div>
                  <label htmlFor="bio" className="form-label">
                    {t('admin.team.bio')}
                  </label>
                  <textarea
                    id="bio"
                    rows={4}
                    className="form-input"
                    placeholder="Enter member bio"
                  />
                </div>

                {/* Social Links */}
                <div>
                  <label className="form-label">
                    {t('admin.team.social')}
                  </label>
                  <div className="space-y-4">
                    <input
                      type="url"
                      className="form-input"
                      placeholder="LinkedIn URL"
                    />
                    <input
                      type="url"
                      className="form-input"
                      placeholder="Website URL"
                    />
                  </div>
                </div>

                {/* Photo Upload */}
                <div>
                  <label className="form-label">
                    {t('admin.team.photo')}
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
                        PNG, JPG up to 5MB
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

export default AdminTeam;