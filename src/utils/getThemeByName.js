import { THEMES } from '../constants/theme';

export default function getThemeByName(themeName) {
	return THEMES.find((theme) => theme.value === themeName)?.theme;
}
