/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: { 
        'Opensans' : ["Opensans",'sans'],

        'Playfair' : ["Playfair", 'sans'],
        'Inter' : ["Inter", 'sans-serif']
      },
      'backgroundImage': "url('/src/3.jpg')",
      'featureCard': "url('/src/room.jpg')"
    },
    dropShadow: {
      '3xl': '0 35px 35px rgba(0,0,0, 0.25)'
    },
    backgroundImage: {
      'bookingImg': "url('/src/3.jpg')"
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}