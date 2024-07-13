import type { Config } from "tailwindcss"
import { allAddons } from "tailwindcss-addons"
import colors from "tailwindcss/colors"

export default {
    content: ["./src/**/*.{html,svelte}"],
    plugins: [...allAddons()],
    theme: {
        extend: {
            colors: {
                gray: colors.zinc,
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
