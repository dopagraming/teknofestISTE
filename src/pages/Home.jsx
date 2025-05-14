import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRight, Award, Users, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const { t } = useTranslation();

  // Animation variants
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 pb-28 bg-gradient-to-br from-[#0c1c3c] via-[#142F5C] to-[#1a3d72] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00C9FF" />
                <stop offset="100%" stopColor="#92FE9D" />
              </linearGradient>
            </defs>
            <circle
              cx="80%"
              cy="20%"
              r="200"
              fill="url(#gradient)"
              opacity="0.15"
            />
            <circle cx="20%" cy="80%" r="300" fill="#ff9800" opacity="0.1" />
          </svg>
        </div>

        <div className="container-custom relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              {t("home.hero.title")} <br />
              <span className="text-[#ff9800]">{t("home.hero.subtitle")}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl mx-auto lg:mx-0">
              {t("home.hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/join"
                className="bg-[#ff9800] text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-[#ffb74d] transition-all shadow-lg"
              >
                {t("home.hero.cta")}
              </Link>

              <Link
                to="/projects"
                className="border-2 border-white px-6 py-3 rounded-md text-base font-semibold hover:bg-white hover:text-[#0c1c3c] transition-all"
              >
                {t("projects.title")}
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <img
              src="./images/teknofest-1.jpg"
              alt="Teknofest team"
              className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
            />

            <div className="hidden md:block absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white dark:bg-dark-800 rounded-xl shadow-lg p-4 w-[95%] max-w-md">
              <div className="grid grid-cols-3 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#16518b]">15+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="border-x border-gray-200 px-2">
                  <div className="text-3xl font-bold text-[#16518b]">50+</div>
                  <div className="text-sm text-gray-600">Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#16518b]">5+</div>
                  <div className="text-sm text-gray-600">Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-24 bg-white dark:bg-dark-800 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            className="flex flex-col-reverse lg:flex-row items-center gap-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            {/* النص */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.h2
                className="text-4xl md:text-5xl font-extrabold text-dark-800 dark:text-white leading-tight mb-6"
                variants={fadeIn}
              >
                {t("home.about.title")}
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-gray-600 dark:text-light-300 mb-8"
                variants={fadeIn}
              >
                {t("home.about.description")}
              </motion.p>

              <motion.div variants={fadeIn}>
                <Link
                  to="/about"
                  className="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-600 transition-all shadow-md"
                >
                  {t("common.readMore")}
                  <ChevronRight size={18} className="ml-2" />
                </Link>
              </motion.div>
            </div>

            {/* الصورة */}
            <motion.div className="lg:w-1/2 relative" variants={fadeIn}>
              {/* شكل زخرفي خلف الصورة */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-100 dark:bg-primary-900 rounded-full z-0 blur-3xl opacity-30"></div>

              <img
                src="https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Students collaborating"
                className="relative z-10 rounded-xl shadow-2xl w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects section */}
      <section className="py-20 bg-light-200 dark:bg-dark-700">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t("home.projects.title")}
            </motion.h2>

            <motion.p
              className="text-lg text-dark-600 dark:text-light-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t("home.projects.description")}
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            {/* Project 1 */}
            <motion.div
              className="card group rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-dark-500 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Teknofest Robot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
                  Teknofest 2025
                </div>
              </div>
              <div className="p-5 bg-white dark:bg-dark-600">
                <h3 className="text-lg font-bold text-dark-800 dark:text-light-100 mb-1">
                  Autonomous Navigation Robot
                </h3>
                <p className="text-sm text-dark-600 dark:text-light-300 mb-3 leading-relaxed">
                  Participated in Teknofest AI & Robotics Challenge. Designed to
                  navigate complex environments using LiDAR and computer vision.
                </p>
                <div className="flex flex-wrap items-center justify-between text-sm text-dark-500 dark:text-light-400">
                  <span>Team: RoboMinds</span>
                  <span>Category: AI Robotics</span>
                </div>
                <div className="mt-4 text-right">
                  <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                    More Info <ChevronRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/projects" className="btn-primary">
                {t("home.projects.viewAll")}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-24 bg-gradient-to-br from-white via-light-100 to-light-200 dark:from-dark-900 dark:via-dark-800 dark:to-dark-700">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            {/* Feature 1 - Awards */}
            <motion.div
              className="bg-white dark:bg-dark-600 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all text-center border border-primary-100 dark:border-primary-800"
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full mb-5 shadow-md">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-bold text-dark-800 dark:text-light-100 mb-3">
                Teknofest Champions
              </h3>
              <p className="text-dark-600 dark:text-light-300">
                Proud winners of national-level competitions in robotics, AI,
                and aerospace.
              </p>
            </motion.div>

            {/* Feature 2 - Mentorship */}
            <motion.div
              className="bg-white dark:bg-dark-600 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all text-center border border-secondary-100 dark:border-secondary-800"
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-500 text-white rounded-full mb-5 shadow-md">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold text-dark-800 dark:text-light-100 mb-3">
                Elite Mentorship
              </h3>
              <p className="text-dark-600 dark:text-light-300">
                Learn from engineers, scientists, and university experts with
                years of experience.
              </p>
            </motion.div>

            {/* Feature 3 - Workshops */}
            <motion.div
              className="bg-white dark:bg-dark-600 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all text-center border border-accent-100 dark:border-accent-800"
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500 text-white rounded-full mb-5 shadow-md">
                <Calendar size={28} />
              </div>
              <h3 className="text-2xl font-bold text-dark-800 dark:text-light-100 mb-3">
                Tech Workshops
              </h3>
              <p className="text-dark-600 dark:text-light-300">
                Gain hands-on experience in IoT, drones, coding, and real-world
                challenges.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 bg-primary-500 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-wide">
              Ready to Shape the Future?
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
              Join our dynamic Teknofest team, where passion meets innovation.
              No experience needed—just your curiosity and commitment!
            </p>
            <Link
              to="/join"
              className="inline-block bg-white text-primary-600 hover:bg-light-200 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-md hover:shadow-xl"
            >
              🚀 Join Teknofest Club
            </Link>
          </motion.div>
        </div>

        {/* Decorative SVG shape at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative block w-full h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C150,100 350,0 500,80 L500,0 L0,0 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Home;
