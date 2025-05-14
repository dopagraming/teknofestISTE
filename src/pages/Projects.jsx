import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  ChevronDown,
  ChevronRight,
  Users,
  Calendar,
  Trophy,
} from "lucide-react";

const Projects = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock data - In production, this would come from your API
  const projects = [
    {
      id: 1,
      name: "Autonomous Navigation Robot",
      description:
        "A robot designed to navigate complex environments without human intervention.",
      category: "robotics",
      team: ["John Doe", "Jane Smith"],
      status: "active",
      image:
        "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg",
      achievements: ["2nd Place - Teknofest 2023"],
      startDate: "2023-09",
      endDate: "Present",
    },
    {
      id: 2,
      name: "Smart Traffic Management",
      description:
        "AI-powered system to optimize traffic flow and reduce congestion.",
      category: "ai",
      team: ["Mike Johnson", "Sarah Lee"],
      status: "completed",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      achievements: ["1st Place - AI Innovation"],
      startDate: "2023-03",
      endDate: "2023-08",
    },
    {
      id: 3,
      name: "Search & Rescue Drone",
      description:
        "Custom UAV designed for search and rescue operations in disaster areas.",
      category: "uav",
      team: ["Alex Brown", "Emily Chen"],
      status: "active",
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg",
      achievements: [],
      startDate: "2024-01",
      endDate: "Present",
    },
  ];

  const categories = [
    { value: "all", label: t("projects.filter.all") },
    { value: "robotics", label: t("projects.categories.robotics") },
    { value: "ai", label: t("projects.categories.ai") },
    { value: "uav", label: t("projects.categories.uav") },
    { value: "iot", label: t("projects.categories.iot") },
    { value: "cyber", label: t("projects.categories.cyber") },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24">
      {/* Projects Section */}
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
                placeholder={t("projects.filter.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input pl-10"
              />
            </div>

            {/* Category filter */}
            <div className="relative">
              <Filter
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500"
                size={20}
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-input pl-10 appearance-none"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500"
                size={20}
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-dark-700 rounded-lg shadow-sm overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "active"
                          ? "bg-success/10 text-success"
                          : "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark-800 dark:text-light-100 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-dark-600 dark:text-light-300 mb-4">
                    {project.description}
                  </p>

                  {/* Project Info */}
                  <div className="space-y-3 mb-4">
                    {/* Team */}
                    <div className="flex items-center text-sm text-dark-500 dark:text-light-400">
                      <Users size={16} className="mr-2" />
                      <span>{project.team.join(", ")}</span>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center text-sm text-dark-500 dark:text-light-400">
                      <Calendar size={16} className="mr-2" />
                      <span>
                        {project.startDate} - {project.endDate}
                      </span>
                    </div>

                    {/* Achievements */}
                    {project.achievements.length > 0 && (
                      <div className="flex items-center text-sm text-dark-500 dark:text-light-400">
                        <Trophy size={16} className="mr-2" />
                        <span>{project.achievements.join(", ")}</span>
                      </div>
                    )}
                  </div>

                  {/* Category Tag */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      {t(`projects.categories.${project.category}`)}
                    </span>
                    <button className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 flex items-center text-sm font-medium">
                      View Details
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

export default Projects;
