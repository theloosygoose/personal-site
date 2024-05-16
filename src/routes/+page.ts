import type { PageLoad } from './$types';
import type { ArticlePreviewData } from '$lib/types/articles';

export const prerender = true;

export const load: PageLoad = () => {
    let data: Array<ArticlePreviewData> = [
        {
            title: "Article 1",
            description: "Article 1 Description",
        },
        {
            title: "Article 2",
            description: "Article 2 Description",
        }
    ]
    return {
        article_previews: data,
    }
}
