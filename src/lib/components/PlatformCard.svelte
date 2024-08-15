<script lang="ts">
    import IconCheckSquareFill from "phosphor-icons-svelte/IconCheckSquareFill.svelte"
    import IconMinusFill from "phosphor-icons-svelte/IconMinusFill.svelte"
    import IconPlusFill from "phosphor-icons-svelte/IconPlusFill.svelte"
    import IconSealFill from "phosphor-icons-svelte/IconSealFill.svelte"
    import type { Platform } from "$lib/data"
    import { getPlatformScore } from "$lib/utilities/getPlatformScore"

    export let platform: Platform

    const score = getPlatformScore(platform)

    let features: {
        text: string
        color: "blue" | "green" | "red"
    }[] = []

    features.push({
        text: `Site in ${platform.languages.join(", ")}.`,
        color: "blue",
    })

    features.push({
        text: `Supports ${platform.contentTypes.join(", ")}.`,
        color: "blue",
    })

    if (platform.canDownload) {
        features.push({
            text: "Can download.",
            color: "green",
        })
    } else {
        features.push({
            text: "Can't download.",
            color: "red",
        })
    }

    if (platform.canWatchOnline) {
        features.push({
            text: "Can watch online.",
            color: "green",
        })
    } else {
        features.push({
            text: "Can't watch online.",
            color: "red",
        })
    }

    if (!platform.possiblyShowsAds) {
        features.push({
            text: "Doesn't show ads.",
            color: "green",
        })
    } else {
        features.push({
            text: "Possibly shows ads.",
            color: "red",
        })
    }

    if (platform.isFrequentlyUpdated) {
        features.push({
            text: "Frequently updated.",
            color: "green",
        })
    } else {
        features.push({
            text: "Isn't Frequently updated.",
            color: "red",
        })
    }

    features.push({
        text: "Possibly needs VPN.",
        color: "red",
    })

    features.push({
        text: "Doesn't require registration.",
        color: "green",
    })

    features = features.sort((a, b) => {
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
    <ul class="space-y-0.5">
        {#each features as feature}
            <li>
                <p
                    class="flex items-center gap-1 {feature.color === 'blue'
                        ? 'text-blue-100'
                        : feature.color === 'green'
                          ? 'text-green-100'
                          : 'text-red-100'}"
                >
                    {#if feature.color === "blue"}
                        <IconCheckSquareFill class="text-blue-400" />
                    {:else if feature.color === "green"}
                        <IconPlusFill class="text-lime-400" />
                    {:else if feature.color === "red"}
                        <IconMinusFill class="text-red-400" />
                    {/if}
                    <span class="text-sm">{feature.text}</span>
                </p>
            </li>
        {/each}
    </ul>
</a>
