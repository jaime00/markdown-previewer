import { DEFAULT_FONT_SIZE_VALUE } from '../constants/font-sizes';
import { DEFAULT_THEME_VALUE } from '../constants/theme';

export const getCodeFromLocalStorage = () => {
	return localStorage.getItem('code') || '';
};

export const saveCodeToLocalStorage = (code) => {
	localStorage.setItem('code', code);
};

export const getThemeFromLocalStorage = () => {
	return {
		name: localStorage.getItem('name') || DEFAULT_THEME_VALUE,
		fontSize: localStorage.getItem('fontSize') || DEFAULT_FONT_SIZE_VALUE,
	};
};

export const saveThemeToLocalStorage = (prop, value) => {
	localStorage.setItem(prop, value);
};
