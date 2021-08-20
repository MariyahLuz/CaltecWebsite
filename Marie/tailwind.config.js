module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {
            backgroundImage: () => ({
                'landing-background':
                    "linear-gradient(rgba(0,0,0, 0.35), rgba(0,0,0, 0.35)), url('/src/assets/img/background.jpeg')",
                'profile-background':
                    "linear-gradient(rgba(0,0,0, 0.40), rgba(0,0,0, 0.40)), url('/src/assets/img/ca3.png')",
                'contact-background':
                    "linear-gradient(rgba(0,0,0, 0.10), rgba(0,0,0, 0.10)), url('/src/assets/img/team-2-800x800.jpg')",
                'gallery-background':
                    "linear-gradient(rgba(0,0,0, 0.20), rgba(0,0,0, 0.20)), url('/src/assets/img/team-3-800x800.jpg')",

            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
