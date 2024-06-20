import { THEMES } from '../constants/theme';
import { EditorTheme } from '../types';

export default function getThemeByName(themeName: string): EditorTheme['theme'] {
	return THEMES.find((theme) => theme.value === themeName)?.theme;
}
