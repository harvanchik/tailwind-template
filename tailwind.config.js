module.exports = {
    mode: 'jit',
    purge: {
        // enabled: true,
        content: ['./*.html', './**/*.html'],
        options: {
            keyframes: true
        }
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    plugins: [],
};
