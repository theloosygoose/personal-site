<script lang="ts">
    import type { ArticlePreviewData } from "$lib/types/articles";
    import ArticlePreviewCard from "./ArticlePreviewCard.svelte";

    export let area_name
    export let article_previews: Array<ArticlePreviewData>
</script>

<section style={"grid-area:" + area_name}>
    {#each article_previews as preview }
        <ArticlePreviewCard title={preview.title} description={preview.plaintext} id={preview.id}/>
    {/each}
</section>

<style>
    section {
        display: grid; 
        grid-template-columns: 3fr 1fr;
        justify-items: start;
    }
</style>
