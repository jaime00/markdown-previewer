import { markdownToHTML } from './markdownToHTML';

export default function createHTML(markdownContent) {
	return `
      <!DOCTYPE html>
      <html lang="en">
          <body>
          ${markdownToHTML(markdownContent)}
          </body>
      </html>
    `;
}
