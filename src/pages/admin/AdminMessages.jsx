import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Search, Filter, ChevronDown, 
  Mail, User, Calendar, 
  Reply, Trash2, MessageSquare,
  X
} from 'lucide-react';

const AdminMessages = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Mock data - In production, this would come from your API
  const messages = [
    {
      id: 1,
      name: 'Ali Yıldız',
      email: 'ali@example.com',
      subject: 'Question about robotics team',
      message: 'Hello, I\'m interested in joining the robotics team. Could you please provide more information about the requirements and meeting times?',
      status: 'unread',
      date: '2024-03-15'
    },
    {
      id: 2,
      name: 'Ayşe Demir',
      email: 'ayse@example.com',
      subject: 'Workshop registration',
      message: 'I would like to register for the upcoming AI workshop. Is there still space available?',
      status: 'read',
      date: '2024-03-14'
    },
    {
      id: 3,
      name: 'Can Özdemir',
      email: 'can@example.com',
      subject: 'Collaboration proposal',
      message: 'We are organizing a technology fair and would love to have Teknofest Club participate. Would you be interested in showcasing your projects?',
      status: 'read',
      date: '2024-03-13'
    }
  ];

  const statusFilters = [
    { value: 'all', label: t('admin.common.status') },
    { value: 'unread', label: t('admin.messages.unread') },
    { value: 'read', label: t('admin.messages.read') }
  ];

  const filteredMessages = messages.filter(message => {
    const matchesSearch = 
      message.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || message.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleReply = (message) => {
    setSelectedMessage(message);
    setIsReplyModalOpen(true);
  };

  const handleDelete = (messageId) => {
    // Implement delete functionality
    console.log('Delete message:', messageId);
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
          {t('admin.messages.title')}
        </h1>
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

        {/* Status filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500" size={20} />
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="form-input pl-10 appearance-none"
          >
            {statusFilters.map(filter => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500" size={20} />
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {filteredMessages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-white dark:bg-dark-700 rounded-lg shadow-sm overflow-hidden border-l-4 ${
              message.status === 'unread' 
                ? 'border-primary-500' 
                : 'border-transparent'
            }`}
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                {/* Message Info */}
                <div className="space-y-4 flex-1">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center">
                      <User size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-800 dark:text-light-100">
                        {message.subject}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-dark-500 dark:text-light-400">
                        <span>{message.name}</span>
                        <span>•</span>
                        <Mail size={14} />
                        <span>{message.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="text-dark-600 dark:text-light-300">
                    <p>{message.message}</p>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-dark-500 dark:text-light-400">
                    <Calendar size={14} />
                    <span>{message.date}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleReply(message)}
                    className="btn bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-900/50 flex items-center gap-2"
                  >
                    <Reply size={16} />
                    {t('admin.messages.reply')}
                  </button>
                  <button
                    onClick={() => handleDelete(message.id)}
                    className="btn bg-error/10 text-error hover:bg-error/20 flex items-center gap-2"
                  >
                    <Trash2 size={16} />
                    {t('admin.messages.delete')}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No results */}
      {filteredMessages.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-light-200 dark:bg-dark-600 rounded-full mb-4">
            <MessageSquare size={32} className="text-dark-400 dark:text-light-500" />
          </div>
          <h3 className="text-lg font-medium text-dark-800 dark:text-light-100 mb-2">
            {t('admin.common.noResults')}
          </h3>
          <p className="text-dark-500 dark:text-light-400">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}

      {/* Reply Modal */}
      {isReplyModalOpen && selectedMessage && (
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
                Reply to Message
              </h2>
              <button
                onClick={() => setIsReplyModalOpen(false)}
                className="p-2 hover:bg-light-200 dark:hover:bg-dark-600 rounded-full transition-colors"
              >
                <X size={20} className="text-dark-400 dark:text-light-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <form className="space-y-6">
                {/* Original Message */}
                <div className="bg-light-200 dark:bg-dark-600 p-4 rounded-lg">
                  <div className="text-sm text-dark-500 dark:text-light-400 mb-2">
                    Original message from {selectedMessage.name}:
                  </div>
                  <div className="text-dark-800 dark:text-light-100">
                    {selectedMessage.message}
                  </div>
                </div>

                {/* Reply */}
                <div>
                  <label htmlFor="reply" className="form-label">
                    Your Reply
                  </label>
                  <textarea
                    id="reply"
                    rows={6}
                    className="form-input"
                    placeholder="Type your reply here..."
                  />
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-4 p-6 border-t border-light-300 dark:border-dark-600">
              <button
                onClick={() => setIsReplyModalOpen(false)}
                className="btn bg-light-200 dark:bg-dark-600 text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-500"
              >
                {t('admin.common.cancel')}
              </button>
              <button className="btn-primary">
                Send Reply
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default AdminMessages;