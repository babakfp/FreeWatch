<script lang="ts">
    import ProsConsItem from "$lib/components/ProsConsItem.svelte"
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
                <a
                    class="grid gap-2 rounded bg-gray-800 p-4 hover:bg-gray-700 sm:p-6"
                    href={platform.url}
                >
                    <h3 class="text-lg font-bold">
                        {platform.name}
                    </h3>
                    <p>{platform.description}</p>
                    <ul>
                        <li>Site in {platform.languages.join(", ")}.</li>
                        <li>Supports {platform.contentTypes.join(", ")}.</li>
                        <div class="h-2" />
                        <li>
                            <ProsConsItem
                                status={platform.canDownload}
                                proText="Can download."
                                conText="Can't download."
                            />
                        </li>
                        <li>
                            <ProsConsItem
                                status={platform.canWatchOnline}
                                proText="Can watch online."
                                conText="Can't watch online."
                            />
                        </li>
                        <li>
                            <ProsConsItem
                                status={!platform.possiblyShowsAds}
                                proText="Doesn't show ads."
                                conText="Possibly shows ads."
                            />
                        </li>
                        {#if platform.downloadRestrictions?.allowedCountries?.length}
                            <li>
                                Downloads are restricted to {platform.downloadRestrictions?.allowedCountries?.join(
                                    ", ",
                                )}.
                            </li>
                        {/if}
                        <li>
                            <ProsConsItem
                                status={false}
                                proText="Doesn't need VPN."
                                conText="Possibly needs VPN."
                            />
                        </li>
                        <li>
                            <ProsConsItem
                                status={true}
                                proText="Doesn't require registration."
                                conText="Requires registration."
                            />
                        </li>
                    </ul>
                </a>
            </li>
        {/each}
    </ul>
</main>
