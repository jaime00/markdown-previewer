import { DEFAULT_DARK_MODE_VALUE } from '../constants/dark-mode';
import { DEFAULT_FONT_SIZE_VALUE } from '../constants/font-sizes';
import { DEFAULT_THEME_VALUE } from '../constants/theme';
import { Theme } from '../types';

export const getCodeFromLocalStorage = (): string => {
	return localStorage.getItem('code') ?? '';
};

export const saveCodeToLocalStorage = (code: string): void => {
	localStorage.setItem('code', code);
};

export const getThemeFromLocalStorage = (): Theme => {
	return {
		name: localStorage.getItem('name') ?? DEFAULT_THEME_VALUE,
		fontSize: localStorage.getItem('fontSize') ?? DEFAULT_FONT_SIZE_VALUE,
		isDarkMode: localStorage.getItem('isDarkMode') ?? DEFAULT_DARK_MODE_VALUE,
	};
};

export const saveThemeToLocalStorage = (prop: string, value: string): void => {
	localStorage.setItem(prop, value);
};
