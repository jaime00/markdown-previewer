import { ReactCodeMirrorProps } from "@uiw/react-codemirror";

export type Theme = {
	name: string;
	fontSize: string | number;
};

export type EditorTheme = {
	name: string;
	value: string;
	theme: ReactCodeMirrorProps["theme"];
};
