import createHTML from '../../utils/createHTML';

export default function RenderViewSide({ markdownContent, isDarkMode }: RenderViewSideProps): JSX.Element {
	const srcDoc = createHTML(markdownContent, isDarkMode);
	return <iframe className="w-full border-0 m-0 p-0" srcDoc={srcDoc} title="Markdown Preview" width="50vw" />;
}

type RenderViewSideProps = Readonly<{ markdownContent: string; isDarkMode: boolean }>;
