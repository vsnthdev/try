/* global tailwind */

tailwind.config = {
    theme: {
        fontFamily: {
            body: ['Basically A Sans Serif', 'sans-serif'],
        },
        container: {
            center: true,
        },
        extend: {
            colors: {
                primary: '#006CFF',
                'primary-dark': '#005DE0',
                'primary-alt': '#D6E7FF',
                'primary-alt-dark': '#C2DBFF',
                secondary: '#0d0106',
                'secondary-light': '#333333',
                'secondary-alt': '#E2E8F0',
                'secondary-alt-dark': '#D7DFEA',
            },
        },
    },
}
