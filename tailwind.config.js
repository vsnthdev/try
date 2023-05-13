/*
 *  TailwindCSS config file for try project.
 *  Created On 23 October 2022
 */

const vyaktitva = require('vyaktitva/tailwind.config.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./styles/safeList.txt",
        "./app/**/*.{ts,tsx,svg}",
        "./components/**/*.{ts,tsx,svg}",
        "node_modules/vyaktitva/**/*.{js,ts,jsx,tsx}",
    ],
    theme: vyaktitva.theme
}
