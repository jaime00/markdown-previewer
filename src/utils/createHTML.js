import { markdownToHTML } from './markdownToHTML';

export default function createHTML(markdownContent) {
	return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
            <style>
                body {
	                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
                }
            </style>
        </head>
        <body>${markdownToHTML(markdownContent)}</body>
      </html>
    `;
}
