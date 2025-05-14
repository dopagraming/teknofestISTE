import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Search, Filter, ChevronDown, 
  Check, X, User, Mail, 
  Building2, GraduationCap, Calendar,
  Users
} from 'lucide-react';

const AdminJoinRequests = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Mock data - In production, this would come from your API
  const joinRequests = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      email: 'ahmet@example.com',
      department: 'Computer Engineering',
      year: '3rd Year',
      team: 'Robotics Team',
      reason: 'I have experience in robotics and would love to contribute to the team\'s projects for Teknofest.',
      status: 'pending',
      date: '2024-03-15'
    },
    {
      id: 2,
      name: 'Zeynep Kaya',
      email: 'zeynep@example.com',
      department: 'Electrical Engineering',
      year: '2nd Year',
      team: 'UAV Team',
      reason: 'Passionate about drone technology and have participated in several UAV projects.',
      status: 'approved',
      date: '2024-03-14'
    },
    {
      id: 3,
      name: 'Mehmet Demir',
      email: 'mehmet@example.com',
      department: 'Software Engineering',
      year: '4th Year',
      team: 'AI Team',
      reason: 'Looking to apply my machine learning knowledge to real-world projects.',
      status: 'rejected',
      date: '2024-03-13'
    }
  ];

  const statusFilters = [
    { value: 'all', label: t('admin.common.status') },
    { value: 'pending', label: t('admin.joinRequests.pending') },
    { value: 'approved', label: t('admin.joinRequests.approved') },
    { value: 'rejected', label: t('admin.joinRequests.rejected') }
  ];

  const filteredRequests = joinRequests.filter(request => {
    const matchesSearch = 
      request.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || request.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-warning/10 text-warning';
      case 'approved':
        return 'bg-success/10 text-success';
      case 'rejected':
        return 'bg-error/10 text-error';
      default:
        return 'bg-primary-100 text-primary-600';
    }
  };

  const handleApprove = (requestId) => {
    // Implement approve functionality
    console.log('Approve request:', requestId);
  };

  const handleReject = (requestId) => {
    // Implement reject functionality
    console.log('Reject request:', requestId);
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
          {t('admin.joinRequests.title')}
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

      {/* Requests List */}
      <div className="space-y-4">
        {filteredRequests.map((request) => (
          <motion.div
            key={request.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-dark-700 rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Request Info */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center">
                      <User size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-800 dark:text-light-100">
                        {request.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-dark-500 dark:text-light-400">
                        <Mail size={14} />
                        <span>{request.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 size={16} className="text-dark-400 dark:text-light-500" />
                      <span className="text-dark-600 dark:text-light-300">{request.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <GraduationCap size={16} className="text-dark-400 dark:text-light-500" />
                      <span className="text-dark-600 dark:text-light-300">{request.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users size={16} className="text-dark-400 dark:text-light-500" />
                      <span className="text-dark-600 dark:text-light-300">{request.team}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={16} className="text-dark-400 dark:text-light-500" />
                      <span className="text-dark-600 dark:text-light-300">{request.date}</span>
                    </div>
                  </div>

                  {/* Reason */}
                  <div className="text-dark-600 dark:text-light-300">
                    <p className="text-sm">{request.reason}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-end gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(request.status)}`}>
                    {t(`admin.joinRequests.${request.status}`)}
                  </span>
                  
                  {request.status === 'pending' && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApprove(request.id)}
                        className="btn bg-success/10 text-success hover:bg-success/20 flex items-center gap-2"
                      >
                        <Check size={16} />
                        {t('admin.joinRequests.approve')}
                      </button>
                      <button
                        onClick={() => handleReject(request.id)}
                        className="btn bg-error/10 text-error hover:bg-error/20 flex items-center gap-2"
                      >
                        <X size={16} />
                        {t('admin.joinRequests.reject')}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No results */}
      {filteredRequests.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-light-200 dark:bg-dark-600 rounded-full mb-4">
            <Users size={32} className="text-dark-400 dark:text-light-500" />
          </div>
          <h3 className="text-lg font-medium text-dark-800 dark:text-light-100 mb-2">
            {t('admin.common.noResults')}
          </h3>
          <p className="text-dark-500 dark:text-light-400">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default AdminJoinRequests;