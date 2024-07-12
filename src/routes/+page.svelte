<script lang="ts">
    import PlatformCard from "$lib/components/PlatformCard.svelte"
    import { platforms } from "$lib/data.js"
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
        {#each platforms as platform}
            <li>
                <PlatformCard {platform} />
            </li>
        {/each}
    </ul>
</main>
