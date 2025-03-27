/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify files for Tailwind to scan to detect used classes
  content: [
    './components/**/*.{vue,js,ts}', // Include .vue files for components using Tailwind classes
    './layouts/**/*.vue', // Include .vue for layout templates
    './pages/**/*.vue', // Include .vue for page templates
    './app.vue', // Include main app file
    './plugins/**/*.{js,ts}', // Scan plugin files
    './nuxt.config.{js,ts}', // Include Nuxt config for dynamic classes
  ],

  // Add Tailwind plugins if needed
  plugins: [],

  // Customize Tailwind's default theme
  theme: {
    extend: {},
  },
};

/*
 * Why .vue files are included in 'content':
 * - Tailwind scans these files to find classes (e.g., 'grid', 'grid-cols-3') used in <template> sections.
 * - Without including .vue files, Tailwind’s purging process removes classes it doesn’t see, breaking features like grid layouts.
 * The issue:
 * - If .vue files are omitted or misconfigured, utilities like 'grid' vanish from the final CSS,
 *   causing layouts to fail in Nuxt (e.g., grid not rendering despite being in the code).
 * - This happened because Tailwind didn’t detect classes in .vue files, assuming they were unused.
 * Solution:
 * - Adding .vue paths ensures Tailwind keeps these classes, fixing the grid and other utilities.
 * Last updated: March 18, 2025
 */
