<script lang="ts">
    import ArticlesSection from "$lib/components/ArticlesSection.svelte";
	import type { PageData } from "./$types";

    export let data: PageData;
</script>

<main>
    <ArticlesSection area_name="art" article_previews={data.article_previews}/>

    <section class="stats">
       Stats 
    </section>
    <section class="tracker">
        Tracker
    </section>
</main>

<style>

main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 50rem;

    margin: 2rem 5% 2rem 5%;
}

@media screen and (min-width:550px) {
    main {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 3fr 1fr;

        grid-template-areas: 
            "art art art stats"
            "art art art tracker";
    }

    .stats {
        grid-area: stats;
    }

    .tracker {
        grid-area: tracker
    }
}
</style>
