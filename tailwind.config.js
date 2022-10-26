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
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}