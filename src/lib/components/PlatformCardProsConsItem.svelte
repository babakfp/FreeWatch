<script lang="ts">
    import IconMinusFill from "phosphor-icons-svelte/IconMinusFill.svelte"
    import IconPlusFill from "phosphor-icons-svelte/IconPlusFill.svelte"

    export let status = false
    export let proText: string
    export let conText: string
</script>

<p class="flex items-center gap-1 {status ? 'text-lime-100' : 'text-red-100'}">
    {#if status}
        <IconPlusFill class="text-lime-500" />
        {proText}
    {:else}
        <IconMinusFill class="text-red-500" />
        {conText}
    {/if}
</p>
