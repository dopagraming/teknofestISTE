import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Plus, Search, Filter, Edit2, Trash2, 
  ChevronDown, Image as ImageIcon, X, 
  Calendar, Clock, MapPin
} from 'lucide-react';

const AdminEvents = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  // Mock data - In production, this would come from your API
  const events = [
    {
      id: 1,
      name: 'Robotics Workshop',
      description: 'Learn the basics of robotics and automation.',
      date: '2024-03-22',
      time: '13:30',
      location: 'Engineering Building, Room 204',
      type: 'workshop',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg',
      status: 'upcoming'
    },
    {
      id: 2,
      name: 'AI Project Showcase',
      description: 'Presentation of our latest AI projects.',
      date: '2024-03-25',
      time: '15:00',
      location: 'Main Auditorium',
      type: 'presentation',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
      status: 'upcoming'
    }
  ];

  const eventTypes = [
    { value: 'all', label: t('events.filter.all') },
    { value: 'workshop', label: t('events.types.workshop') },
    { value: 'competition', label: t('events.types.competition') },
    { value: 'meeting', label: t('events.types.meeting') },
    { value: 'social', label: t('events.types.social') },
    { value: 'other', label: t('events.types.other') }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleDeleteEvent = (eventId) => {
    // Implement delete functionality
    console.log('Delete event:', eventId);
  };

  const handleEditEvent = (event) => {
    // Implement edit functionality
    console.log('Edit event:', event);
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
          {t('admin.events.title')}
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>{t('admin.events.new')}</span>
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

        {/* Type filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500" size={20} />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="form-input pl-10 appearance-none"
          >
            {eventTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500" size={20} />
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-dark-700 rounded-lg shadow-sm overflow-hidden"
          >
            {/* Event Image */}
            <div className="relative h-48">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={() => handleEditEvent(event)}
                  className="p-2 bg-white/90 dark:bg-dark-800/90 rounded-full hover:bg-white dark:hover:bg-dark-800 transition-colors"
                >
                  <Edit2 size={16} className="text-primary-500" />
                </button>
                <button
                  onClick={() => handleDeleteEvent(event.id)}
                  className="p-2 bg-white/90 dark:bg-dark-800/90 rounded-full hover:bg-white dark:hover:bg-dark-800 transition-colors"
                >
                  <Trash2 size={16} className="text-error" />
                </button>
              </div>
              <div className="absolute top-2 left-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  event.status === 'upcoming'
                    ? 'bg-success/10 text-success'
                    : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                }`}>
                  {event.status}
                </span>
              </div>
            </div>

            {/* Event Details */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="font-semibold text-dark-800 dark:text-light-100 mb-2">
                  {event.name}
                </h3>
                <p className="text-sm text-dark-500 dark:text-light-400">
                  {event.description}
                </p>
              </div>

              {/* Event Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-dark-600 dark:text-light-300">
                  <Calendar size={16} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-dark-600 dark:text-light-300">
                  <Clock size={16} className="mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-dark-600 dark:text-light-300">
                  <MapPin size={16} className="mr-2" />
                  <span>{event.location}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-light-300 dark:border-dark-600">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  {t(`events.types.${event.type}`)}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No results */}
      {filteredEvents.length === 0 && (
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

      {/* Add/Edit Event Modal */}
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
                {t('admin.events.new')}
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
                {/* Event Name */}
                <div>
                  <label htmlFor="name" className="form-label">
                    {t('admin.events.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Enter event name"
                  />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="form-label">
                    {t('admin.events.description')}
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="form-input"
                    placeholder="Enter event description"
                  />
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="form-label">
                      {t('admin.events.date')}
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="form-label">
                      {t('admin.events.time')}
                    </label>
                    <input
                      type="time"
                      id="time"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="form-label">
                    {t('admin.events.location')}
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="form-input"
                    placeholder="Enter event location"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label htmlFor="type" className="form-label">
                    {t('admin.events.type')}
                  </label>
                  <select id="type" className="form-input">
                    {eventTypes.slice(1).map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="form-label">
                    {t('admin.events.image')}
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
                        PNG, JPG up to 10MB
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

export default AdminEvents;