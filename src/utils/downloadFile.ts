function createBlob(content: string, mimeType: string): Blob {
	return new Blob([content], { type: mimeType });
}

function createDownloadLink(blob: Blob, filename: string): HTMLAnchorElement {
	const url = URL.createObjectURL(blob);
	const anchor = document.createElement('a');
	anchor.href = url;
	anchor.download = filename;
	return anchor;
}

function triggerDownload(anchor: HTMLAnchorElement): void {
	anchor.click();
	URL.revokeObjectURL(anchor.href);
}

function getFileExtension(type: string): string {
	const extensions: { [key: string]: string } = {
		html: 'html',
		markdown: 'md',
	};
	return extensions[type] || type;
}

export default function downloadFile(content: string, format: string): void {
	const mimeType = `text/${format}`;
	const blob = createBlob(content, mimeType);
	const fileExtension = getFileExtension(format);
	const filename = `filecode.${fileExtension}`;
	const downloadLink = createDownloadLink(blob, filename);
	triggerDownload(downloadLink);
}
