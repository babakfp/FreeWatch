import { exec } from "child_process"
import { join } from "node:path"
import { sveltekit } from "@sveltejs/kit/vite"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, type Plugin } from "vite"

export default defineConfig({
    plugins: [tailwindcss(), sveltekit(), errorCss()],
})

function errorCss(): Plugin {
    const i = join("src", "lib", "app.css")
    const o = join("static", "error.css")
    const command = `tailwindcss -i ${i} -o ${o} -m`

    return {
        name: "vite-plugin-svelte-error.html-tailwind-css",
        configureServer(server) {
            exec(command)
            server.watcher.add(o)
            server.watcher.on("change", (path) => {
                if (path === o) {
                    server.ws.send({ type: "full-reload" })
                }
            })
        },
        buildStart() {
            exec(command)
        },
    }
}
