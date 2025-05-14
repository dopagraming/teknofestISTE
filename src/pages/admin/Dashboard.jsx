import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Users, FolderKanban, Calendar, UserPlus, 
  MessageSquare, TrendingUp, Award, Clock
} from 'lucide-react';

const Dashboard = () => {
  const { t } = useTranslation();

  // Mock data - In production, this would come from your API
  const stats = [
    {
      title: t('admin.dashboard.members'),
      value: '52',
      icon: Users,
      trend: '+12%',
      color: 'primary'
    },
    {
      title: t('admin.dashboard.projects'),
      value: '8',
      icon: FolderKanban,
      trend: '+3',
      color: 'secondary'
    },
    {
      title: t('admin.dashboard.events'),
      value: '5',
      icon: Calendar,
      trend: 'Next: 3d',
      color: 'accent'
    },
    {
      title: t('admin.dashboard.requests'),
      value: '12',
      icon: UserPlus,
      trend: 'New',
      color: 'success'
    }
  ];

  const recentActivities = [
    {
      type: 'join',
      title: 'New Join Request',
      description: 'Ahmet Yılmaz wants to join the Robotics team',
      time: '5 minutes ago',
      icon: UserPlus
    },
    {
      type: 'project',
      title: 'Project Update',
      description: 'AI Team updated their project status',
      time: '2 hours ago',
      icon: FolderKanban
    },
    {
      type: 'message',
      title: 'New Message',
      description: 'You received a new contact form message',
      time: '4 hours ago',
      icon: MessageSquare
    }
  ];

  const upcomingEvents = [
    {
      title: 'Team Meeting',
      date: '2024-03-20',
      time: '15:00',
      type: 'meeting'
    },
    {
      title: 'Robotics Workshop',
      date: '2024-03-22',
      time: '13:30',
      type: 'workshop'
    },
    {
      title: 'Project Presentation',
      date: '2024-03-25',
      time: '14:00',
      type: 'presentation'
    }
  ];

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
          {t('admin.dashboard.title')}
        </h1>
        <div className="flex items-center space-x-2 text-sm text-dark-500 dark:text-light-400">
          <Clock size={16} />
          <span>Last updated: 5 minutes ago</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/30`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-500`} />
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="text-sm font-medium text-success">
                  {stat.trend}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold text-dark-800 dark:text-light-100">
                {stat.value}
              </h3>
              <p className="text-sm text-dark-500 dark:text-light-400 mt-1">
                {stat.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-dark-700 rounded-lg shadow-sm">
            <div className="p-6 border-b border-light-300 dark:border-dark-600">
              <h2 className="text-lg font-semibold text-dark-800 dark:text-light-100">
                Recent Activities
              </h2>
            </div>
            <div className="divide-y divide-light-300 dark:divide-dark-600">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 flex items-start space-x-4"
                >
                  <div className="p-2 rounded-lg bg-light-200 dark:bg-dark-600">
                    <activity.icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-dark-800 dark:text-light-100">
                      {activity.title}
                    </p>
                    <p className="text-sm text-dark-500 dark:text-light-400">
                      {activity.description}
                    </p>
                  </div>
                  <div className="text-sm text-dark-400 dark:text-light-500">
                    {activity.time}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-dark-700 rounded-lg shadow-sm">
            <div className="p-6 border-b border-light-300 dark:border-dark-600">
              <h2 className="text-lg font-semibold text-dark-800 dark:text-light-100">
                Upcoming Events
              </h2>
            </div>
            <div className="divide-y divide-light-300 dark:divide-dark-600">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-dark-800 dark:text-light-100">
                      {event.title}
                    </h3>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-dark-500 dark:text-light-400">
                    <Calendar size={14} className="mr-2" />
                    <span>{event.date} at {event.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="p-6 border-t border-light-300 dark:border-dark-600">
              <button className="btn-outline w-full">
                View All Events
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-dark-700 rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-dark-800 dark:text-light-100 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="btn-outline flex items-center justify-center space-x-2">
            <UserPlus size={16} />
            <span>Add Member</span>
          </button>
          <button className="btn-outline flex items-center justify-center space-x-2">
            <FolderKanban size={16} />
            <span>New Project</span>
          </button>
          <button className="btn-outline flex items-center justify-center space-x-2">
            <Calendar size={16} />
            <span>Schedule Event</span>
          </button>
          <button className="btn-outline flex items-center justify-center space-x-2">
            <Award size={16} />
            <span>Add Achievement</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;