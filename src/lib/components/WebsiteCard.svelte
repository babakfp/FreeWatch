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
    class="ring-accent grid gap-2 rounded-sm bg-gray-800 p-4 hover:ring-3 focus-visible:ring-3 sm:p-6"
    href={website.url}
>
    <h3 class="text-xl font-bold">{website.name}</h3>
    <p class="text-2xs text-gray-400">{website.url}</p>
    <p>{website.description}</p>
</ExternalLink>
