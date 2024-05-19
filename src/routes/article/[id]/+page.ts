import type { PageLoad } from './$types';
import type { ArticlePreviewData } from '$lib/types/articles'

export const prerender = true;

export const load: PageLoad = async ({ fetch, params }) => {
    let id = params.id 

    let res = await fetch(`http://localhost:8080/api/article/${id}`,{
        headers: {
            "Content-Type": "application/json"
        }
    });
    let data: any = await res.json();

    console.log(data);

    let article: ArticlePreviewData = {
        id: data.Id,
        title: data.Title,
        plaintext: data.PlainText,
        htmlBody: data.Body,
    }
    console.log(article)

    return {
        article,
    }
}
