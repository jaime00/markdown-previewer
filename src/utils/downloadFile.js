function createBlob(content, mimeType) {
	return new Blob([content], { type: mimeType });
}

function createDownloadLink(blob, filename) {
	const url = URL.createObjectURL(blob);
	const anchor = document.createElement('a');
	anchor.href = url;
	anchor.download = filename;
	return anchor;
}

function triggerDownload(anchor) {
	anchor.click();
	URL.revokeObjectURL(anchor.href);
}

function getFileExtension(type) {
	const extensions = {
		html: 'html',
		markdown: 'md',
	};
	return extensions[type] || type;
}

export default function downloadFile(content, format) {
	const mimeType = `text/${format}`;
	const blob = createBlob(content, mimeType);
	const fileExtension = getFileExtension(format);
	const filename = `filecode.${fileExtension}`;
	const downloadLink = createDownloadLink(blob, filename);
	triggerDownload(downloadLink);
}
