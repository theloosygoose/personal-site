<script lang="ts">
    import type {ArticlePreviewData } from "$lib/types/articles"
    import type { PageData } from "./$types";

    export let data: PageData;

    console.log(data)
    let article = data.article

</script>

This is a test from the id page

{@html article.htmlBody}

