/*
 *  TailwindCSS config file for try project.
 *  Created On 23 October 2022
 */

const vyaktitva = require('vyaktitva/tailwind.config.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: vyaktitva.darkMode,
    content: [
        "./src/styles/safeList.txt",
        "./src/pages/**/*.{ts,tsx,svg}",
        "./src/sections/**/*.{ts,tsx,svg}",
        "./src/components/**/*.{ts,tsx,svg}",
    ],
    theme: {
        fontFamily: vyaktitva.theme.fontFamily,
        extend: vyaktitva.theme.extend
    }
}
