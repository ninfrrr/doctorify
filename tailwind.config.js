/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            poppin: ['Poppins']
        },
        extend: {
            colors: {
                textfield: '#A3BAC3'
            }
        }
    },
    plugins: []
};
