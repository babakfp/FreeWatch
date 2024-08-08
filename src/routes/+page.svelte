<script lang="ts">
    import PlatformCard from "$lib/components/PlatformCard.svelte"
    import WebsiteCard from "$lib/components/WebsiteCard.svelte"
    import { platforms, websites } from "$lib/data.js"
    import { getPlatformScore } from "$lib/utilities/getPlatformScore"

    const platformsToShow = platforms.sort(
        (a, b) => getPlatformScore(b) - getPlatformScore(a),
    )
</script>

<svelte:head>
    <title>
        FreeWatch - Best {platforms.length} Free Movies/Series/Anime Streaming Services
    </title>
    <meta
        name="description"
        content="Discover the best free alternatives to Netflix, Amazon Prime Video, HBO Max, and Disney+. Stream or download movies, series, and anime for free with no ads."
    />
</svelte:head>

<main class="container grid gap-8 pb-16 pt-8">
    <h2 class="text-2xl font-bold">Platforms</h2>
    <ul class="-mt-4 grid gap-4">
        {#each platformsToShow as platform}
            <li>
                <PlatformCard {platform} />
            </li>
        {/each}
    </ul>

    <h2 class="text-2xl font-bold">Find more Platforms</h2>
    <ul class="-mt-4 grid gap-4">
        {#each websites as website}
            <li>
                <WebsiteCard {website} />
            </li>
        {/each}
    </ul>
</main>

<footer class="border-t border-gray-800 py-8">
    <ul class="container list-inside list-disc space-y-2 text-sm">
        <li>
            Made by
            <a
                class="text-accent underline"
                href="https://babakfp.ir"
                target="_blank">Babak</a
            >.
        </li>
        <li>
            Source code on
            <a
                class="text-accent underline"
                href="https://github.com/babakfp/FreeWatch"
                target="_blank">GitHub</a
            >.
        </li>
        <li>
            Favicon by
            <a
                class="text-accent underline"
                href="https://icons8.com"
                target="_blank">Icon8</a
            >.
        </li>
    </ul>
</footer>
