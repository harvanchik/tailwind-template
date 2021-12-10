module.exports = {
    content: ['./**/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
