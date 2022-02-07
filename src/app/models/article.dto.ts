import { User } from "./user.dto";

export interface Articles {
	articles: Article[];
	articlesCount: number;
}

export interface ArticleContainer {
    article: Article;
}

export interface Article {
    id: number;
	slug: string;
	title: string;
	description: string;
	body: string;
	created: number;
	updated: number;
	tagList: string[];
	author: User;
	comments: ArticleComment[];
	favoriteCount: number;
}

export interface ArticleComment {
	id: number;
	created: number;
	body: string;
	articleId: number;
	authorId: number
}