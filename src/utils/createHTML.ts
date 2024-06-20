import { fontColorWhenIsDarkMode } from '../constants/dark-mode';
import { markdownToHTML } from './markdownToHTML';

export default function createHTML(markdownContent: string, isDarkMode: boolean): string {
	return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
            <style>
                body {
	                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
                  color: ${fontColorWhenIsDarkMode(isDarkMode)};
                }
            </style>
        </head>
        <body>${markdownToHTML(markdownContent)}</body>
      </html>
    `;
}
