import { User } from "./user.model";

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

export interface CommentDTO {
	comments: Comment[];
}

export interface Comment {
	id: number;
	created: number;
	body: string;
	author: User;
}

// Only for frontend
export interface Tag {
	display: string;
	value: string;
}