import { Dropdown } from 'flowbite-react';
import downloadFile from '../../utils/downloadFile';
import { BsFiletypeHtml, BsFillMarkdownFill } from 'react-icons/bs';
import { backgroundColorWhenIsDarkMode } from '../../constants/dark-mode';
import { getHTMLContent } from '../../utils/getHTMLContent';

export default function SaveAsButton({ markdownContent, isDarkMode }: SaveAsButtonProps) {
	const handleClick = (type: string) => {
		const htmlContent = getHTMLContent(type, markdownContent);
		downloadFile(htmlContent, type);
	};
	const background = backgroundColorWhenIsDarkMode(isDarkMode);
	return (
		<div className="ml-auto mr-2">
			<Dropdown label="Save as" style={{ background }} dismissOnClick={true} arrowIcon={false} size="sm">
				<Dropdown.Item icon={BsFillMarkdownFill} onClick={() => handleClick('markdown')}>
					Markdown <code>(.md)</code>
				</Dropdown.Item>
				<Dropdown.Item icon={BsFiletypeHtml} onClick={() => handleClick('html')}>
					HTML <code>(.html)</code>
				</Dropdown.Item>
			</Dropdown>
		</div>
	);
}

type SaveAsButtonProps = Readonly<{
	markdownContent: string;
	isDarkMode: boolean;
}>;
