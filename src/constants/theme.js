import { monokai } from '@uiw/codemirror-theme-monokai';
import { materialLight, materialDark } from '@uiw/codemirror-theme-material';
import { nord } from '@uiw/codemirror-theme-nord';
import { solarizedLight, solarizedDark } from '@uiw/codemirror-theme-solarized';
import { abcdef } from '@uiw/codemirror-theme-abcdef';
import { vscodeLight, vscodeDark } from '@uiw/codemirror-theme-vscode';
import { xcodeLight, xcodeDark } from '@uiw/codemirror-theme-xcode';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { tokyoNightDay } from '@uiw/codemirror-theme-tokyo-night-day';
import { red } from '@uiw/codemirror-theme-red';

export const MONOKAI = {
	name: 'Monokai',
	value: 'monokai',
	theme: monokai,
};

export const MATERIAL_LIGHT = {
	name: 'Material Light',
	value: 'material_light',
	theme: materialLight,
};

export const MATERIAL_DARK = {
	name: 'Material Dark',
	value: 'material_dark',
	theme: materialDark,
};

export const NORD = {
	name: 'Nord',
	value: 'nord',
	theme: nord,
};

export const SOLARIZED_LIGHT = {
	name: 'Solarized Light',
	value: 'solarized_light',
	theme: solarizedLight,
};

export const SOLARIZED_DARK = {
	name: 'Solarized Dark',
	value: 'solarized_dark',
	theme: solarizedDark,
};

export const ABCDEF = {
	name: 'ABCDEF',
	value: 'abcdef',
	theme: abcdef,
};

export const VSCODE_LIGHT = {
	name: 'VSCode Light',
	value: 'vscode_light',
	theme: vscodeLight,
};

export const VSCODE_DARK = {
	name: 'VSCode Dark',
	value: 'vscode_dark',
	theme: vscodeDark,
};

export const XCODE_LIGHT = {
	name: 'XCode Light',
	value: 'xcode_light',
	theme: xcodeLight,
};

export const XCODE_DARK = {
	name: 'XCode Dark',
	value: 'xcode_dark',
	theme: xcodeDark,
};

export const TOKYO_NIGHT = {
	name: 'Tokyo Night',
	value: 'tokyo_night',
	theme: tokyoNight,
};

export const TOKYO_NIGHT_DAY = {
	name: 'Tokyo Night Day',
	value: 'tokyo_night_day',
	theme: tokyoNightDay,
};

export const RED = {
	name: 'Red',
	value: 'red',
	theme: red,
};

export const THEMES = [MONOKAI, MATERIAL_LIGHT, MATERIAL_DARK, NORD, SOLARIZED_LIGHT, SOLARIZED_DARK, ABCDEF, VSCODE_LIGHT, VSCODE_DARK, XCODE_LIGHT, XCODE_DARK, TOKYO_NIGHT, TOKYO_NIGHT_DAY, RED];

export const DEFAULT_THEME_VALUE = MATERIAL_LIGHT.value;
