/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFEFEF',
          100: '#FFD6D6',
          200: '#FFADAD',
          300: '#FF7A7A',
          400: '#FF5252',
          500: '#E3342F', // أحمر نابض (لون رئيسي يعكس طاقة الشعار)
          600: '#C12020',
          700: '#9B1B1B',
          800: '#731414',
          900: '#4A0D0D',
        },
        secondary: {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#1D4ED8', // أزرق قوي
          600: '#1E40AF',
          700: '#1E3A8A',
          800: '#1E2F6D',
          900: '#1E2659',
        },
        accent: {
          50: '#FFF4E5',
          100: '#FFE7CC',
          200: '#FFD199',
          300: '#FFBA66',
          400: '#FFA433',
          500: '#FF8C00', // برتقالي حيوي (Accent رئيسي)
          600: '#CC7000',
          700: '#995400',
          800: '#663800',
          900: '#332000',
        },
        yellow: {
          50: '#FFFCEB',
          100: '#FFF7C2',
          200: '#FFF099',
          300: '#FFEA70',
          400: '#FFE347',
          500: '#FFDD1B', // أصفر لامع
          600: '#E6C311',
          700: '#B39B0D',
          800: '#807308',
          900: '#4D4A04',
        },
        light: {
          100: '#FFFFFF',
          200: '#F9FAFB',
          300: '#F3F4F6',
          400: '#E5E7EB',
          500: '#D1D5DB',
          600: '#9CA3AF',
          700: '#6B7280',
          800: '#4B5563',
          900: '#374151',
        },
        dark: {
          100: '#E5E7EB',
          200: '#D1D5DB',
          300: '#9CA3AF',
          400: '#6B7280',
          500: '#4B5563',
          600: '#374151',
          700: '#1F2937',
          800: '#111827',
          900: '#030712',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};