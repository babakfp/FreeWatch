<script lang="ts">
    import IconCheckSquareFill from "phosphor-icons-svelte/IconCheckSquareFill.svelte"
    import IconSealFill from "phosphor-icons-svelte/IconSealFill.svelte"
    import PlatformCardProsConsItem from "$lib/components/PlatformCardProsConsItem.svelte"
    import type { Platform } from "$lib/data"
    import { getPlatformScore } from "$lib/utilities/getPlatformScore"

    export let platform: Platform

    let score = getPlatformScore(platform)
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
        <li class="flex items-center gap-1 text-blue-100">
            <IconCheckSquareFill class="text-blue-400" />
            Site in {platform.languages.join(", ")}.
        </li>
        <li class="flex items-center gap-1 text-blue-100">
            <IconCheckSquareFill class="text-blue-400" />
            Supports {platform.contentTypes.join(", ")}.
        </li>
        <li>
            <PlatformCardProsConsItem
                status={platform.canDownload}
                proText="Can download."
                conText="Can't download."
            />
        </li>
        <li>
            <PlatformCardProsConsItem
                status={platform.canWatchOnline}
                proText="Can watch online."
                conText="Can't watch online."
            />
        </li>
        <li>
            <PlatformCardProsConsItem
                status={!platform.possiblyShowsAds}
                proText="Doesn't show ads."
                conText="Possibly shows ads."
            />
        </li>
        <li>
            <PlatformCardProsConsItem
                status={false}
                proText="Doesn't need VPN."
                conText="Possibly needs VPN."
            />
        </li>
        <li>
            <PlatformCardProsConsItem
                status={true}
                proText="Doesn't require registration."
                conText="Requires registration."
            />
        </li>
    </ul>
</a>
