<script lang="ts">
    import ProsConsItem from "$lib/components/ProsConsItem.svelte"
    import type { Platform } from "$lib/data"

    export let platform: Platform
</script>

<a
    class="grid gap-2 rounded bg-gray-800 p-4 hover:bg-gray-700 sm:p-6"
    href={platform.url}
    target="_blank"
    rel="noopener noreferrer nofollow"
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
