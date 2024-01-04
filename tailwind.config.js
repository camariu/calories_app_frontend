/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'logo-color': '#fc842d',
        'second-color' : '#9B9FAA',
        'number-calorie-color': "#264061"

      },

      spacing:{
        "504": "504px",
        "195": "195px",
        "300": "300px",
        "593": "593px",
        
        "493": "493px",
        "116": "116px"
        
      
      },

      padding:{
        "51": "51px",
        "37":"41px"
      },

      boxShadow: {
        'straw-shadow': '10px 20px 50px 0px rgba(0, 0, 0, 0.30)',
      }
      
    },

    fontFamily:{
      'OpenSans':[ "Open Sans"],
    },
    width: {
      'title': '608px',
      'wmodal':"672px"

    },

    height:{
      'hmodal': '572px',
    
    },

    
  

  },
  plugins: [],
}

