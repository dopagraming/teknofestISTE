import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  ChevronDown,
  Calendar,
  Maximize2,
  X,
} from "lucide-react";

const Gallery = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  // Mock data - In production, this would come from your API
  const images = [
    {
      id: 1,
      title: "Robotics Workshop 2024",
      category: "workshops",
      date: "2024-03-15",
      url: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg",
    },
    {
      id: 2,
      title: "AI Team Project Presentation",
      category: "projects",
      date: "2024-03-10",
      url: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
    },
    {
      id: 3,
      title: "Team Building Event",
      category: "teamBuilding",
      date: "2024-03-05",
      url: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg",
    },
    {
      id: 4,
      title: "Teknofest Competition",
      category: "competitions",
      date: "2024-02-28",
      url: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg",
    },
  ];

  const categories = [
    { value: "all", label: t("gallery.filter.all") },
    { value: "workshops", label: t("gallery.filter.workshops") },
    { value: "competitions", label: t("gallery.filter.competitions") },
    { value: "teamBuilding", label: t("gallery.filter.teamBuilding") },
    { value: "projects", label: t("gallery.filter.projects") },
  ];

  const filteredImages = images.filter((image) => {
    const matchesSearch = image.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24">
      {/* Gallery Section */}
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
                placeholder={t("gallery.filter.search")}
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-dark-700 rounded-lg shadow-sm overflow-hidden group"
              >
                {/* Image */}
                <div
                  className="relative aspect-video cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 size={24} className="text-white" />
                  </div>
                </div>

                {/* Image Details */}
                <div className="p-4">
                  <h3 className="font-medium text-dark-800 dark:text-light-100 mb-2">
                    {image.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-dark-500 dark:text-light-400">
                      <Calendar size={14} className="mr-1" />
                      <span>{image.date}</span>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      {t(`gallery.filter.${image.category}`)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-dark-900/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-light-300 transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-dark-900/75 text-white p-4 rounded-b-lg">
              <h3 className="text-lg font-medium mb-1">
                {selectedImage.title}
              </h3>
              <div className="flex items-center text-sm text-light-300">
                <Calendar size={14} className="mr-1" />
                <span>{selectedImage.date}</span>
                <span className="mx-2">•</span>
                <span>{t(`gallery.filter.${selectedImage.category}`)}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
