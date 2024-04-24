import rss from '@astrojs/rss';
import {
  getStartPage,
	getArticles
} from '../api/apollo-client';

export async function GET(context) {
	const startPage = await getStartPage();
	const articles = await getArticles();

	return rss({
		title: startPage.CompanyName,
		description: startPage.Body,
		site: context.site,
		items: articles.map((article) => ({
			title: article.Heading,
      pubDate: "2023-02-23T13:22:10Z",
      content: article.MainBody,
			link: article.RelativePath,
		})),
	});
}