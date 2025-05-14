import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  ChevronDown,
  Linkedin,
  Mail,
  Globe,
} from "lucide-react";

const TeamPage = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");

  // Mock data - In production, this would come from your API
  const teamMembers = [
    {
      id: 1,
      name: "Prof. Dr. Ahmet Yılmaz",
      role: "advisor",
      department: "Computer Engineering",
      bio: "Faculty advisor with expertise in robotics and AI. Leading research in autonomous systems.",
      photo:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      social: {
        linkedin: "https://linkedin.com",
        email: "ahmet.yilmaz@example.com",
        website: "https://example.com",
      },
    },
    {
      id: 2,
      name: "Zeynep Kaya",
      role: "president",
      department: "Electrical Engineering",
      bio: "Leading the club's initiatives and coordinating teams for Teknofest competitions.",
      photo:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      social: {
        linkedin: "https://linkedin.com",
        email: "zeynep.kaya@example.com",
      },
    },
    {
      id: 3,
      name: "Mehmet Demir",
      role: "teamLead",
      department: "Software Engineering",
      bio: "Leading the AI team with focus on machine learning applications.",
      photo:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      social: {
        linkedin: "https://linkedin.com",
        email: "mehmet.demir@example.com",
      },
    },
  ];

  const roles = [
    { value: "all", label: t("team.filter.all") },
    { value: "advisor", label: t("team.roles.advisor") },
    { value: "president", label: t("team.roles.president") },
    { value: "vicePresident", label: t("team.roles.vicePresident") },
    { value: "teamLead", label: t("team.roles.teamLead") },
    { value: "member", label: t("team.roles.member") },
  ];

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === "all" || member.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="pt-24">
      {/* Team Section */}
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
                placeholder={t("team.filter.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input pl-10"
              />
            </div>

            {/* Role filter */}
            <div className="relative">
              <Filter
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500"
                size={20}
              />
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="form-input pl-10 appearance-none"
              >
                {roles.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-light-500"
                size={20}
              />
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-dark-700 rounded-lg shadow-sm overflow-hidden group"
              >
                {/* Member Photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-sm text-light-200">
                        {member.department}
                      </span>
                      <span className="mx-2 text-light-200">•</span>
                      <span className="text-sm font-medium text-primary-200">
                        {t(`team.roles.${member.role}`)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Member Details */}
                <div className="p-6">
                  <p className="text-dark-600 dark:text-light-300 mb-4">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-400 dark:text-light-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-dark-400 dark:text-light-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      >
                        <Mail size={20} />
                      </a>
                    )}
                    {member.social.website && (
                      <a
                        href={member.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-400 dark:text-light-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      >
                        <Globe size={20} />
                      </a>
                    )}
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

export default TeamPage;
