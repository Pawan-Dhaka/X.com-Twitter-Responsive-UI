/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
    screens: {
      'phone': {'raw': '(min-width: 300px) and (max-width: 502px)'},
      'small_tablet': {'raw': '(min-width: 502px) and (max-width: 688px)'},
      'tablet': {'raw': '(min-width: 688px) and (max-width: 1052px)'},
      'laptop': {'raw': '(min-width: 1052px) and (max-width: 1300px)'},
      'tv': {'raw': '(min-width: 1300px)'},
      '3xl': '1600px'
    }
  },
  plugins: [],
}


// module.exports = {
//   content: ["*.html"],
//   theme: {
//     extend: {'3xl': '1600px',
//         'tv': {'raw': '((min-width: 1300px))'},
//         'laptop': {'raw': '((min-width: 990px) and (max-width: 1300px))'},
//         'tablet': {'raw': '((min-width: 502px) and (max-width: 990px))'},
//         'phone': {'raw': '((min-width: 300px) and (max-width: 502px))'},
//       },
//   },
//   plugins: [],
// }