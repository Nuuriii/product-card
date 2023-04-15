/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                mobile: "url('../public/img/image-mobile.jpg')",
            },
        },
    },
    plugins: [],
};
