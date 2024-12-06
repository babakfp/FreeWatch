<script lang="ts">
    import ExternalLink from "$lib/components/ExternalLink.svelte"
    import PlatformCard from "$lib/components/PlatformCard.svelte"
    import WebsiteCard from "$lib/components/WebsiteCard.svelte"
    import { lazyPlatforms, platforms, websites } from "$lib/data.js"
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

<main class="container space-y-12 pb-16 pt-8">
    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Platforms</h2>
        <ul class="grid gap-4">
            {#each platformsToShow as platform}
                <li>
                    <PlatformCard {platform} />
                </li>
            {/each}
        </ul>
    </section>

    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Find more platforms</h2>
        <ul class="mt-8 grid gap-4">
            {#each websites as website}
                <li>
                    <WebsiteCard {website} />
                </li>
            {/each}
        </ul>
    </section>

    <section>
        <h2 class="text-2xl font-bold">More platforms</h2>
        <p class="mt-4">I don't know much about these.</p>
        <ul class="mt-4 list-inside list-disc space-y-1">
            {#each lazyPlatforms as platform}
                <li>
                    <ExternalLink class="underline" href={platform.url}>
                        {platform.url.replace("https://", "")}
                    </ExternalLink>
                </li>
            {/each}
        </ul>
    </section>

    <section>
        <h2 class="text-2xl font-bold">How to find more platforms?</h2>
        <p class="mt-2">Just google. Instagram too.</p>
    </section>

    <section>
        <h2 class="text-2xl font-bold">How to block ads?</h2>
        <p class="mt-2">
            Download <a
                class="underline"
                href="https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm"
                >uBlock Origin</a
            > Chrome extension.
        </p>
    </section>
</main>
