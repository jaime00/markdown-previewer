import { marked } from 'marked';

export const markdownToHTML = (markdownContend) => marked.parse(markdownContend);
