<script lang="ts">
    import type { Website } from "$lib/data"
    import ExternalLink from "./ExternalLink.svelte"

    let {
        website,
    }: {
        website: Website
    } = $props()
</script>

<ExternalLink
    class="grid gap-2 rounded bg-gray-800 p-4 ring-accent hover:ring focus-visible:ring sm:p-6"
    href={website.url}
>
    <h3 class="text-xl font-bold">{website.name}</h3>
    <p class="text-2xs text-gray-400">{website.url}</p>
    <p>{website.description}</p>
</ExternalLink>
