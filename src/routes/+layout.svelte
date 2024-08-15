<script lang="ts">
    import "$lib/app.css"
</script>

<slot />

<footer class="border-t border-gray-800 py-8">
    <ul class="container list-inside list-disc space-y-2 text-sm">
        <li>
            Made by
            <a
                class="text-accent underline"
                href="https://babakfp.ir"
                target="_blank">Babak</a
            >.
        </li>
        <li>
            Source code on
            <a
                class="text-accent underline"
                href="https://github.com/babakfp/FreeWatch"
                target="_blank">GitHub</a
            >.
        </li>
        <li>
            Favicon by
            <a
                class="text-accent underline"
                href="https://icons8.com"
                target="_blank">Icon8</a
            >.
        </li>
    </ul>
</footer>
