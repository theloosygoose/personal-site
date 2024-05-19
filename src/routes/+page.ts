import type { PageLoad } from './$types';
import type { ArticlePreviewData } from '$lib/types/articles'

export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
    let res = await fetch('http://localhost:8080/api/article');
    let data: Array<any> = await res.json();

    console.log(data);
    const articles: Array<ArticlePreviewData> = []

    data.forEach((r: any) => {
        let a: ArticlePreviewData = {
            id: r.Id,
            title: r.Title,
            plaintext: r.PlainText,
            htmlBody: r.Body
        }
        articles.push(a);
    });

    return {
        article_previews: articles,
    }
}
