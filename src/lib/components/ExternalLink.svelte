<script lang="ts">
    import type { Snippet } from "svelte"
    import type { HTMLProps } from "$lib/utilities/types"

    let {
        children,
        ...attributes
    }: {
        children: Snippet
    } & Omit<HTMLProps<"a">, "target" | "rel"> = $props()
</script>

<a
    href={attributes.href}
    target="_blank"
    rel="noopener noreferrer nofollow"
    {...attributes}
>
    {@render children()}
</a>
