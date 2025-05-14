import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Users,
  Trophy,
  GraduationCap,
  Rocket,
  Heart,
  Brain,
  Infinity,
} from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const timelineEvents = t("about.timeline.events", { returnObjects: true });

  return (
    <div className="pt-24">
      {/* Mission Section */}
      <section className="py-24 bg-primary-600 text-white dark:bg-dark-800">
        <div className="container-custom relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn} className="text-center lg:text-left">
              <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
                {t("about.mission.title")}
              </h2>
              <p className="text-lg md:text-xl text-dark-200 dark:text-light-300 max-w-xl mx-auto lg:mx-0">
                {t("about.mission.description")}
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="relative">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team working together"
                className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
              />
              {/* Overlay or subtle animation */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600 to-transparent opacity-40 rounded-lg"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative lines or dynamic tech-inspired elements */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C150,100 350,0 500,80 L500,0 L0,0 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-light-200 dark:bg-dark-700">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold text-dark-800 dark:text-light-100 mb-6"
            >
              {t("about.values.title")}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Innovation */}
            <motion.div
              variants={fadeIn}
              className="bg-white dark:bg-dark-800 p-6 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-semibold text-dark-800 dark:text-light-100 mb-3">
                {t("about.values.innovation.title")}
              </h3>
              <p className="text-dark-600 dark:text-light-300">
                {t("about.values.innovation.description")}
              </p>
            </motion.div>

            {/* Collaboration */}
            <motion.div
              variants={fadeIn}
              className="bg-white dark:bg-dark-800 p-6 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold text-dark-800 dark:text-light-100 mb-3">
                {t("about.values.collaboration.title")}
              </h3>
              <p className="text-dark-600 dark:text-light-300">
                {t("about.values.collaboration.description")}
              </p>
            </motion.div>

            {/* Excellence */}
            <motion.div
              variants={fadeIn}
              className="bg-white dark:bg-dark-800 p-6 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 text-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={32} />
              </div>
              <h3 className="text-xl font-semibold text-dark-800 dark:text-light-100 mb-3">
                {t("about.values.excellence.title")}
              </h3>
              <p className="text-dark-600 dark:text-light-300">
                {t("about.values.excellence.description")}
              </p>
            </motion.div>

            {/* Learning */}
            <motion.div
              variants={fadeIn}
              className="bg-white dark:bg-dark-800 p-6 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-semibold text-dark-800 dark:text-light-100 mb-3">
                {t("about.values.learning.title")}
              </h3>
              <p className="text-dark-600 dark:text-light-300">
                {t("about.values.learning.description")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold text-dark-800 dark:text-light-100 mb-6"
            >
              {t("about.timeline.title")}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-900" />

            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                variants={fadeIn}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-end" : ""
                } mb-8`}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "ml-auto pl-8"
                  }`}
                >
                  <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary-500 mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-semibold text-dark-800 dark:text-light-100 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-dark-600 dark:text-light-300">
                      {event.description}
                    </p>
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-800" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Members */}
            <motion.div variants={fadeIn} className="text-center">
              <Users size={40} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Active Members</div>
            </motion.div>

            {/* Projects */}
            <motion.div variants={fadeIn} className="text-center">
              <Rocket size={40} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Projects</div>
            </motion.div>

            {/* Awards */}
            <motion.div variants={fadeIn} className="text-center">
              <Trophy size={40} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-lg">Awards</div>
            </motion.div>

            {/* Years */}
            <motion.div variants={fadeIn} className="text-center">
              <Infinity size={40} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">4+</div>
              <div className="text-lg">Years of Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
