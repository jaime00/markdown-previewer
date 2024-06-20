import { useState } from 'react';
import MarkdownEditor from './components/MarkdownEditor';
import RenderViewSide from './components/RenderViewSide';
import { getCodeFromLocalStorage, getThemeFromLocalStorage, saveCodeToLocalStorage, saveThemeToLocalStorage } from './utils/localStorage';

import './App.css';
import Selector from './components/Selector';
import { THEMES } from './constants/theme';
import { FONT_SIZES } from './constants/font-sizes';
import SaveAsButton from './components/SaveAsButton';

export default function App() {
	const [markdownContent, setMarkdownContent] = useState(getCodeFromLocalStorage());
	const [theme, setTheme] = useState(getThemeFromLocalStorage());

	function handleChange(value) {
		setMarkdownContent(value);
		saveCodeToLocalStorage(value);
	}
	const handleChangeTheme = (prop, value) => {
		setTheme({ ...theme, [prop]: value });
		saveThemeToLocalStorage(prop, value);
	};
	return (
		<>
			<h5 className="m-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Markdown previewer</h5>
			<section className="flex items-center mb-3">
				<Selector currentValue={theme.name} handleChange={(e) => handleChangeTheme('name', e.target.value)} optionList={THEMES} label={'Theme'} />
				<Selector currentValue={theme.fontSize} handleChange={(e) => handleChangeTheme('fontSize', e.target.value)} optionList={FONT_SIZES} label={'Font size'} />
				<SaveAsButton markdownContent={markdownContent} />
			</section>
			<section className="flex">
				<MarkdownEditor theme={theme} markdownContent={markdownContent} handleChange={handleChange} />
				<RenderViewSide markdownContent={markdownContent} />
			</section>
		</>
	);
}
