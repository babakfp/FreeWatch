import type { Config } from "tailwindcss"
import { allAddons } from "tailwindcss-addons"

export default {
    content: ["./src/**/*.{html,svelte}"],
    plugins: [...allAddons()],
    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
        disableColorOpacityUtilitiesByDefault: true,
    },
} satisfies Config
