import colors from 'https://cdn.skypack.dev/tailwindcss/colors'

tailwind.config = {
    theme: {
        darkMode: 'class',
        fontFamily: {
            body: ['Basically A Sans Serif', 'sans-serif']
        },
        container: {
            center: true
        },
        extend: {
            colors: {
                gray: colors.blueGray,
                primary: '#006cff'
            },
            spacing: {
                108: '28rem'
            }
        }
    }
}

