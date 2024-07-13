<script lang="ts">
    import PlatformCard from "$lib/components/PlatformCard.svelte"
    import { platforms } from "$lib/data.js"
    import { getPlatformScore } from "$lib/utilities/getPlatformScore"

    const platformsToShow = platforms.sort(
        (a, b) => getPlatformScore(b) - getPlatformScore(a),
    )
</script>

<svelte:head>
    <title>FreeWatch</title>
    <meta
        name="description"
        content="List of free alternatives to Netflix, Amazon Prime Video, HBO Max, and Disney+. Download (and Watch Online) Movies, Series and Anime for free."
    />
</svelte:head>

<main class="container pb-16 pt-8">
    <ul class="grid gap-4">
        {#each platformsToShow as platform}
            <li>
                <PlatformCard {platform} />
            </li>
        {/each}
    </ul>
</main>

<div class="border-t border-gray-800 py-4 text-center">
    <p class="text-sm">
        Favicon by
        <a
            class="text-accent underline"
            href="https://icons8.com"
            target="_blank">Icon8</a
        >.
    </p>
</div>
