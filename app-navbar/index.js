
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
                white: '#FFFFFF',
                youtube: '#FF0000',
                discord: '#5662F6',
                twitter: '#1E95FF',
                primary: '#adcfff'
            },
            backgroundImage: {
                'main-gradient': 'linear-gradient(0deg, rgba(255,255,255,0) 0%, var(--gradient-primary) 75%)'
            },
            width: {
                circle: '42rem'
            },
            height: {
                circle: '42rem'
            },
            minWidth: {
                nav: '12rem'
            },
            inset: {
                nav: '4.5rem'
            },
            zIndex: {
                '-10': '-10',
            }
        }
    }
}

if ('serviceWorker' in navigator) navigator.serviceWorker.register('/app-navbar/sw.js')

const socialIcons = document.querySelector('#socialIcons')
const random = Math.floor((Math.random() * socialIcons.childElementCount) + 1)
const socialButton = socialIcons.children[random - 1]
socialButton.classList.remove('hidden')
