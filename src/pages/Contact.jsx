import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Send,
} from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.info.email"),
      value: "info@teknofestclub.com",
      link: "mailto:info@teknofestclub.com",
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      value: "+90 (555) 123 4567",
      link: "tel:+905551234567",
    },
    {
      icon: MapPin,
      title: t("contact.info.address"),
      value: "University Campus, Building B, Room 204, Istanbul, Turkey",
    },
  ];

  const socialLinks = [
    { icon: Facebook, link: "https://facebook.com" },
    { icon: Twitter, link: "https://twitter.com" },
    { icon: Instagram, link: "https://instagram.com" },
    { icon: Linkedin, link: "https://linkedin.com" },
    { icon: Github, link: "https://github.com" },
  ];

  return (
    <div className="pt-24">
      {/* Contact Section */}
      <section className="py-20 bg-light-200 dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-dark-700 rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-dark-800 dark:text-light-100 mb-6">
                {t("contact.form.submit")}
              </h2>

              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-800 dark:text-light-100 mb-2">
                    {t("contact.form.success")}
                  </h3>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="form-label">
                      {t("contact.form.name")}
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
                      {t("contact.form.email")}
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

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="form-label">
                      {t("contact.form.subject")}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="form-label">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="form-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        {t("contact.form.submit")}
                      </>
                    )}
                  </button>

                  {submitStatus === "error" && (
                    <p className="text-sm text-error text-center">
                      {t("contact.form.error")}
                    </p>
                  )}
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-dark-800 dark:text-light-100 mb-6">
                  {t("contact.info.title")}
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-500 rounded-lg flex items-center justify-center shrink-0">
                        <info.icon size={24} />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-dark-800 dark:text-light-100">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-dark-600 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-dark-600 dark:text-light-300">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-dark-800 dark:text-light-100 mb-4">
                  {t("contact.info.social")}
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-light-300 dark:bg-dark-600 text-dark-600 dark:text-light-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white rounded-full flex items-center justify-center transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden h-80 bg-light-300 dark:bg-dark-600">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2755075277666!2d28.979697615537792!3d41.04121497929764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a24975fe5d%3A0x4c76cf3dcc8b330b!2sIstanbul%20Technical%20University!5e0!3m2!1sen!2str!4v1647883788889!5m2!1sen!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
