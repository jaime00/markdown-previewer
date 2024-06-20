import { Dropdown } from 'flowbite-react';
import downloadFile from '../../utils/downloadFile';
import { markdownToHTML } from '../../utils/markdownToHTML';
import { BsFiletypeHtml, BsFillMarkdownFill } from 'react-icons/bs';

export default function SaveAsButton({ markdownContent }) {
    const handleClick = (type) => {
        const htmlContent = type === 'html' ? markdownToHTML(markdownContent) : markdownContent;
        downloadFile(htmlContent, type);
    };
    return (
        <div className="ml-auto mr-2">
            <Dropdown
                label="Save as"
                style={{ background: 'rgb(55 56 55 / 87%)' }}
                dismissOnClick={false}
                arrowIcon={false}
                size="sm"
            >
                <Dropdown.Item icon={BsFillMarkdownFill} onClick={() => handleClick('markdown')}>
                    Markdown (.mk)
                </Dropdown.Item>
                <Dropdown.Item icon={BsFiletypeHtml} onClick={() => handleClick('html')}>
                    HTML (.html)
                </Dropdown.Item>
            </Dropdown>
        </div>
    );
}