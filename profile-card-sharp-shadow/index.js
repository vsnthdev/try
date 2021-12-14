import { setup, strict } from "https://cdn.skypack.dev/twind/shim";
import colors from 'https://cdn.skypack.dev/tailwindcss@^2.2.19/colors?min'

setup({
    hash: false,
    darkMode: false,
    mode: strict,
    theme: {
        fontFamily: {
            body: ['Inter', 'sans-serif']
        },
        container: {
            center: true
        },
        colors: {
            gray: colors.blueGray,
            primary: '#1e90ff',
            white: '#FFF'
        },
        boxShadow: {
            'card': '0px 15px 0px -5px rgba(0, 31, 61, 0.1)'
        },
        backgroundImage: {
            'html':
                'linear-gradient(90deg, rgba(235,245,255,1) 0%, rgba(214,235,255,1) 100%)',
        }
    }
});
