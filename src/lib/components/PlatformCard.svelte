<script lang="ts">
    import IconCheckSquareFill from "phosphor-icons-svelte/IconCheckSquareFill.svelte"
    import IconMinusFill from "phosphor-icons-svelte/IconMinusFill.svelte"
    import IconPlusFill from "phosphor-icons-svelte/IconPlusFill.svelte"
    import IconSealFill from "phosphor-icons-svelte/IconSealFill.svelte"
    import type { Platform } from "$lib/data"
    import { getPlatformScore } from "$lib/utilities/getPlatformScore"

    export let platform: Platform

    let score = getPlatformScore(platform)

    let futures: {
        text: string
        color: "blue" | "green" | "red"
    }[] = []

    futures.push({
        text: `Site in ${platform.languages.join(", ")}.`,
        color: "blue",
    })

    futures.push({
        text: `Supports ${platform.contentTypes.join(", ")}.`,
        color: "blue",
    })

    if (platform.canDownload) {
        futures.push({
            text: "Can download.",
            color: "green",
        })
    } else {
        futures.push({
            text: "Can't download.",
            color: "red",
        })
    }

    if (platform.canWatchOnline) {
        futures.push({
            text: "Can watch online.",
            color: "green",
        })
    } else {
        futures.push({
            text: "Can't watch online.",
            color: "red",
        })
    }

    if (!platform.possiblyShowsAds) {
        futures.push({
            text: "Doesn't show ads.",
            color: "green",
        })
    } else {
        futures.push({
            text: "Possibly shows ads.",
            color: "red",
        })
    }

    if (platform.isFrequentlyUpdated) {
        futures.push({
            text: "Frequently updated.",
            color: "green",
        })
    } else {
        futures.push({
            text: "Isn't Frequently updated.",
            color: "red",
        })
    }

    futures.push({
        text: "Possibly needs VPN.",
        color: "red",
    })

    futures.push({
        text: "Doesn't require registration.",
        color: "green",
    })

    futures = futures.sort((a, b) => {
        if (a.color === b.color) {
            return 0
        }
        if (a.color === "blue") {
            return -1
        }
        if (a.color === "green" && b.color !== "blue") {
            return -1
        }
        return 0
    })
</script>

<a
    class="grid gap-2 rounded bg-gray-800 p-4 ring-accent hocus-visible:ring sm:p-6"
    href={platform.url}
    target="_blank"
    rel="noopener noreferrer nofollow"
>
    <div class="relative">
        <h3 class="text-xl font-bold">
            {platform.name}
        </h3>
        <div class="absolute -right-2 -top-2">
            <IconSealFill class="text-4xl text-gray-600" />
            <span class="absolute text-xs font-bold inset-center">{score}</span>
        </div>
    </div>
    <p class="text-2xs text-gray-400">{platform.url}</p>
    <p>{platform.description}</p>
    <ul>
        {#each futures as future}
            <li>
                <p
                    class="flex items-center gap-1 {future.color === 'blue'
                        ? 'text-blue-100'
                        : future.color === 'green'
                          ? 'text-green-100'
                          : 'text-red-100'}"
                >
                    {#if future.color === "blue"}
                        <IconCheckSquareFill class="text-blue-400" />
                    {:else if future.color === "green"}
                        <IconPlusFill class="text-lime-400" />
                    {:else if future.color === "red"}
                        <IconMinusFill class="text-red-400" />
                    {/if}
                    {future.text}
                </p>
            </li>
        {/each}
    </ul>
</a>
