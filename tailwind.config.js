/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.html'],
    theme: {
        extend: {
            borderRadius: {
                '15px': '15px',
                '25px': '25px'
            },
            padding: {
                '10px': '10px',
                '30px': '30px'
            },
            margin: {
                '10px': '10px'
            },
            colors: {
                'navigation__text': '#5B5B5B',
                'navigation__active': "#FF9900",
                "invite-link": "#5867DD",
                'normal': '#4A4A4A',
                'withdrawal-amount': '#F4516C'
            },
            backgroundColor: {
                "navigation__active": "#ff9900",
                "invite-link": "#5867DD",
                // 'withdrawal-amount': '#F4516C'
            },
        },
    },
    plugins: [],
}
