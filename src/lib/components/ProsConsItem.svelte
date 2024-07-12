<script lang="ts">
    import IconThumbsDownFill from "phosphor-icons-svelte/IconThumbsDownFill.svelte"
    import IconThumbsUpFill from "phosphor-icons-svelte/IconThumbsUpFill.svelte"

    export let status = false
    export let proText: string
    export let conText: string
</script>

<p class="flex items-center gap-1 {status ? 'text-lime-100' : 'text-red-100'}">
    {#if status}
        <IconThumbsUpFill class="text-lime-500" />
        {proText}
    {:else}
        <IconThumbsDownFill class="text-red-500" />
        {conText}
    {/if}
</p>
