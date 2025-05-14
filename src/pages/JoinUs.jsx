import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Users,
  Notebook as Robot,
  Brain,
  Bone as Drone,
  Palette,
  Share2,
  ChevronRight,
} from "lucide-react";
import { joinAPI } from "../utils/api";

const JoinUs = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    year: "",
    team: "",
    experience: "",
    why: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await joinAPI.submit(formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        department: "",
        year: "",
        team: "",
        experience: "",
        why: "",
      });
    } catch (error) {
      console.error("Error submitting join request:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const teams = [
    {
      icon: Robot,
      name: t("join.teams.robotics.name"),
      description: t("join.teams.robotics.description"),
    },
    {
      icon: Brain,
      name: t("join.teams.ai.name"),
      description: t("join.teams.ai.description"),
    },
    {
      icon: Drone,
      name: t("join.teams.uav.name"),
      description: t("join.teams.uav.description"),
    },
    {
      icon: Palette,
      name: t("join.teams.design.name"),
      description: t("join.teams.design.description"),
    },
    {
      icon: Share2,
      name: t("join.teams.pr.name"),
      description: t("join.teams.pr.description"),
    },
  ];

  return (
    <div className="pt-24">
      {/* Teams Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dark-800 dark:text-light-100 mb-6">
              {t("join.teams.title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team, index) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-light-100 dark:bg-dark-700 p-6 rounded-lg group hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <team.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-dark-800 dark:text-light-100 mb-2">
                  {team.name}
                </h3>
                <p className="text-dark-600 dark:text-light-300 mb-4">
                  {team.description}
                </p>
                <button className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 flex items-center text-sm font-medium group">
                  Learn More
                  <ChevronRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-light-200 dark:bg-dark-700">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-dark-800 rounded-lg shadow-lg p-8"
          >
            <div className="text-center mb-8">
              <Users size={40} className="text-primary-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-dark-800 dark:text-light-100">
                {t("join.form.submit")}
              </h2>
            </div>

            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-semibold text-dark-800 dark:text-light-100 mb-2">
                  {t("join.form.success")}
                </h3>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="form-label">
                    {t("join.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="form-label">
                    {t("join.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                {/* Department */}
                <div>
                  <label htmlFor="department" className="form-label">
                    {t("join.form.department")}
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                {/* Year */}
                <div>
                  <label htmlFor="year" className="form-label">
                    {t("join.form.year")}
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                </div>

                {/* Team */}
                <div>
                  <label htmlFor="team" className="form-label">
                    {t("join.form.team")}
                  </label>
                  <select
                    id="team"
                    name="team"
                    value={formData.team}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select team</option>
                    {teams.map((team) => (
                      <option key={team.name} value={team.name}>
                        {team.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="form-label">
                    {t("join.form.experience")}
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows={4}
                    className="form-input"
                  />
                </div>

                {/* Why join */}
                <div>
                  <label htmlFor="why" className="form-label">
                    {t("join.form.why")}
                  </label>
                  <textarea
                    id="why"
                    name="why"
                    value={formData.why}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="form-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
                  ) : (
                    t("join.form.submit")
                  )}
                </button>

                {submitStatus === "error" && (
                  <p className="text-sm text-error text-center">
                    {t("join.form.error")}
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
