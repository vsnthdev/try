import { setup, strict } from 'https://cdn.skypack.dev/twind/shim'
import * as colors from 'https://cdn.skypack.dev/twind/colors'

setup({
    darkMode: 'class',
    mode: strict,
    theme: {
        fontFamily: {
            body: ['Urbanist', 'sans-serif']
        },
        extend: {
            colors: {
                gray: colors.blueGray,
                primary: '#00A5CF',
                primaryLight: '#00C4F5',
                primaryDark: '#092B34',
                lightBackground: '#EBFBFF',
                darkBackground: '#030E11'
            },
            boxShadow: {
                'card': '15px 15px 20px -5px rgba(0, 165, 207, 0.2)'
            },
        }
    }
})