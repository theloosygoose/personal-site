<script lang="ts">
    import type { ArticlePreview } from "$lib/types/articles";
    import ArticlePreviewCard from "./ArticlePreviewCard.svelte";

    export let article_previews: Array<ArticlePreview>
</script>

<section>
    {#each article_previews as preview }
        <ArticlePreviewCard title={preview.title} description={preview.description}/>
    {/each}
</section>
