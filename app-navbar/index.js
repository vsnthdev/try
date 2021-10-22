import { setup } from "https://cdn.skypack.dev/twind/shim";
import * as colors from "https://cdn.skypack.dev/twind/colors";

setup({
    hash: false,
    darkMode: true,
    theme: {
        fontFamily: {
            body: ['Lexend Deca', 'sans-serif']
        },
        container: {
            center: true
        },
        extend: {
            colors: {
                gray: colors.blueGray,
                white: '#FFFFFF',
                youtube: '#FF0000',
                discord: '#5662F6',
                twitter: '#1E95FF'
            },
            backgroundColor: {
                html: '#e3f2fd',
            },
            minWidth: {
                nav: '12rem'
            },
            inset: {
                nav: '4.5rem'
            }
        }
    }
})

if ('serviceWorker' in navigator) navigator.serviceWorker.register('/app-navbar/sw.js')

const socialIcons = document.querySelector('#socialIcons')
const random = Math.floor((Math.random() * socialIcons.childElementCount) + 1)
const socialButton = socialIcons.children[random - 1]
socialButton.classList.remove('hidden')
