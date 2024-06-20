import { marked } from 'marked';

export const markdownToHTML = (markdownContent: string): any => {
	return marked.parse(markdownContent);
};
