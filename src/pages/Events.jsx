import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  ChevronDown,
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  Users,
} from "lucide-react";

const Events = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  // Mock data - In production, this would come from your API
  const events = [
    {
      id: 1,
      title: "Robotics Workshop",
      description:
        "Learn the basics of robotics and automation in this hands-on workshop.",
      type: "workshop",
      date: "2024-03-22",
      time: "13:30",
      location: "Engineering Building, Room 204",
      image:
        "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg",
      capacity: 30,
      registered: 25,
      status: "upcoming",
    },
    {
      id: 2,
      title: "AI Project Showcase",
      description:
        "Our AI team presents their latest projects and innovations.",
      type: "presentation",
      date: "2024-03-25",
      time: "15:00",
      location: "Main Auditorium",
      image:
        "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
      capacity: 100,
      registered: 80,
      status: "upcoming",
    },
    {
      id: 3,
      title: "Team Building Day",
      description: "A day of fun activities and team building exercises.",
      type: "social",
      date: "2024-04-01",
      time: "10:00",
      location: "University Campus",
      image:
        "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg",
      capacity: 50,
      registered: 35,
      status: "upcoming",
    },
  ];

  const eventTypes = [
    { value: "all", label: t("events.filter.all") },
    { value: "workshop", label: t("events.types.workshop") },
    { value: "competition", label: t("events.types.competition") },
    { value: "meeting", label: t("events.types.meeting") },
    { value: "social", label: t("events.types.social") },
    { value: "other", label: t("events.types.other") },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="pt-24">
      {/* Events Section */}
      <section className="py-20 bg-light-200 dark:bg-dark-800">
        <div className="container-custom">
          {/* Filters */}
          <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500"
                size={20}
              />
              <input
                type="text"
                placeholder={t("events.filter.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input pl-10"
              />
            </div>

            {/* Type filter */}
            <div className="relative">
              <Filter
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500"
                size={20}
              />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="form-input pl-10 appearance-none"
              >
                {eventTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500"
                size={20}
              />
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-dark-700 rounded-lg shadow-sm overflow-hidden group"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        event.status === "upcoming"
                          ? "bg-success/10 text-success"
                          : "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark-800 dark:text-light-100 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-dark-600 dark:text-light-300 mb-4">
                    {event.description}
                  </p>

                  {/* Event Info */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-dark-500 dark:text-light-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-dark-500 dark:text-light-400">
                      <Clock size={16} className="mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-dark-500 dark:text-light-400">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-dark-500 dark:text-light-400">
                      <Users size={16} className="mr-2" />
                      <span>
                        {event.registered} / {event.capacity} registered
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      {t(`events.types.${event.type}`)}
                    </span>
                    <button className="btn-primary flex items-center text-sm">
                      {t("events.registerButton")}
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
