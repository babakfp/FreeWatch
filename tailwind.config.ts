import type { Config } from "tailwindcss"
import { allAddons } from "tailwindcss-addons"
import { neutral } from "tailwindcss/colors"

export default {
    content: ["./src/**/*.{html,svelte}"],
    plugins: [...allAddons()],
    theme: {
        extend: {
            colors: {
                gray: neutral,
                accent: "#707cc0",
            },
        },
        container: {
            center: true,
            padding: "1rem",
        },
        fontFamily: {
            sans: ["Recursive"],
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
        disableColorOpacityUtilitiesByDefault: true,
    },
} satisfies Config
