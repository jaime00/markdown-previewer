import { HTML_FORMAT } from '../constants/format';
import { markdownToHTML } from './markdownToHTML';

export const getHTMLContent = (type: string, markdownContent: string): string => {
	return type === HTML_FORMAT ? markdownToHTML(markdownContent) : markdownContent;
};
