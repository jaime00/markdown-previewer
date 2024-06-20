import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import getThemeByName from '../../utils/getThemeByName';

export default function MarkdownEditor({ markdownContent, handleChange, theme }) {
    return (
        <CodeMirror
            autoFocus={true}
            placeholder="Type or paste markdown code..."
            style={{ width: '50vw', fontSize: Number(theme.fontSize) }}
            value={markdownContent}
            height="88vh"
            width="50vw"
            extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
            onChange={handleChange}
            theme={getThemeByName(theme.name)}
        />
    );
}
