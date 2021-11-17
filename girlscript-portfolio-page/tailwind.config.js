import colors from 'https://cdn.skypack.dev/tailwindcss/colors'

tailwind.config = {
    theme: {
        fontFamily: {
            body: ['Poppins', 'sans-serif']
        },
        container: {
            center: true
        },
        extend: {
            colors: {
                gray: colors.blueGray,
                hero: '#BBE6E4',
                'hero-dark': '#045E8B',
                body: '#FFF0DF',
                'body-dark': '#FFC685',
                primary: '#EF798A',
                'primary-dark': '#EC5B70'
            },
            boxShadow: {
                avatar: '10px 10px 0px 0px #EF798A'
            },
        }
    }
}

