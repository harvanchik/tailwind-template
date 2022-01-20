module.exports = {
    content: ['./**/*.{html,js}'],
    darkMode: 'class', // 'media' or 'class'
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
