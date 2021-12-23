import colors from 'https://cdn.skypack.dev/tailwindcss/colors'

tailwind.config = {
    darkMode: 'class',
    theme: {
        fontFamily: {
            body: ['Basically A Sans Serif', 'sans-serif']
        },
        colors: {
            light: colors.slate,
            dark: colors.slate,
            transparent: 'transparent',
            inherit: 'inherit',
            white: '#FFFFFF',
            brand: '#006cff'
        },
        extend: {
            boxShadow: {
                card: '0px 14px 15px -3px rgba(0, 0, 0, 0.05)'
            }
        }
    }
}

