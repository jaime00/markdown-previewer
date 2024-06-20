import { markdownToHTML } from '../../utils/markdownToHTML';

export default function RenderViewSide({ markdownContent }) {
    const srcDoc = markdownToHTML(markdownContent);
    return (
        <iframe
            className="w-full border-0 m-0 p-0"
            srcDoc={srcDoc}
            title="Markdown Preview"
            width="50vw"
        />
    );
}
