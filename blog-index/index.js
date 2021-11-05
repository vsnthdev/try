import colors from 'https://cdn.skypack.dev/tailwindcss/colors'

tailwind.config = {
    theme: {
        fontFamily: {
            body: ['Basically A Sans Serif', 'sans-serif']
        },
        container: {
            center: true
        },
        extend: {
            colors: {
                gray: colors.blueGray,
                primary: '#006CFF',
                'primary-dark': '#005DE0',
                'primary-alt': '#D6E7FF',
                'primary-alt-dark': '#C2DBFF',
                youtube: '#FF0000',
                discord: '#5662F6',
                twitter: '#1E95FF',
            },
            boxShadow: {
                card: '0px 25px 30px -3px rgba(0, 0, 0, 0.05)'
            }
        }
    }
}

const socialIcons = document.querySelector('#socialIcons')
const random = Math.floor((Math.random() * socialIcons.childElementCount) + 1)
const socialButton = socialIcons.children[random - 1]
socialButton.classList.remove('hidden')
