export const DEFAULT_DARK_MODE_VALUE = 'false';

export const backgroundColorWhenIsDarkMode = (isDarkMode: boolean): string => (isDarkMode ? 'rgb(55 65 81 / var(--tw-bg-opacity))' : 'rgb(55 56 55 / 87%)');

export const fontColorWhenIsDarkMode = (isDarkMode: boolean): string => (isDarkMode ? 'white' : 'rgb(17 24 39)');
