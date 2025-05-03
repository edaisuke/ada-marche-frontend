export default {
    darkMode: 'class',
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4f46e5', // Indigo-600
            }
        }
    },
    plugins: [],
}