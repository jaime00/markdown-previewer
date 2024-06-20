import React from 'react';
import createHTML from '../../utils/createHTML';

export default function RenderViewSide({ markdownContent }: RenderViewSideProps): JSX.Element {
	const srcDoc = createHTML(markdownContent);
	return <iframe className="w-full border-0 m-0 p-0" srcDoc={srcDoc} title="Markdown Preview" width="50vw" />;
}

type RenderViewSideProps = Readonly<{ markdownContent: string }>;
