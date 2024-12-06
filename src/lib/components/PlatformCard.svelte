<script lang="ts">
    import IconCheckSquareFill from "phosphor-icons-svelte/IconCheckSquareFill.svelte"
    import IconMinusFill from "phosphor-icons-svelte/IconMinusFill.svelte"
    import IconPlusFill from "phosphor-icons-svelte/IconPlusFill.svelte"
    import IconSealFill from "phosphor-icons-svelte/IconSealFill.svelte"
    import type { Platform } from "$lib/data"
    import { getPlatformScore } from "$lib/utilities/getPlatformScore"
    import ExternalLink from "./ExternalLink.svelte"

    let {
        platform,
    }: {
        platform: Platform
    } = $props()

    const score = getPlatformScore(platform)

    type Feature = {
        text: string
        color: "blue" | "green" | "red"
    }

    const features: Feature[] = [
        {
            text: `Site in ${platform.languages.join(", ")}.`,
            color: "blue",
        },
        {
            text: `Supports ${platform.contentTypes.join(", ")}.`,
            color: "blue",
        },
        platform.canDownload ?
            {
                text: "Can download.",
                color: "green",
            }
        :   {
                text: "Can't download.",
                color: "red",
            },
        platform.canWatchOnline ?
            {
                text: "Can watch online.",
                color: "green",
            }
        :   {
                text: "Can't watch online.",
                color: "red",
            },
        !platform.possiblyShowsAds ?
            {
                text: "Doesn't show ads.",
                color: "green",
            }
        :   {
                text: "Possibly shows ads.",
                color: "red",
            },
        platform.isFrequentlyUpdated ?
            {
                text: "Frequently updated.",
                color: "green",
            }
        :   {
                text: "Isn't Frequently updated.",
                color: "red",
            },
        {
            text: "Possibly needs VPN.",
            color: "red",
        },
        {
            text: "Doesn't require registration.",
            color: "green",
        },
    ].sort((a, b) => {
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
    }) as Feature[] // NOTE: Fuck TypeScript.
</script>

<ExternalLink
    class="grid gap-2 rounded bg-gray-800 p-4 ring-accent hover:ring focus-visible:ring sm:p-6"
    href={platform.url}
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
                    class="flex items-center gap-1 {feature.color === 'blue' ?
                        'text-blue-100'
                    : feature.color === 'green' ? 'text-green-100'
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
</ExternalLink>
