import React from 'react';
import { useState } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

export const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const boldText = (e: any) => {
    // onMouseDown and e.preventDefault because editor losses focus if you use onClick
    e.preventDefault();

    let nextState = RichUtils.toggleInlineStyle(editorState, 'BOLD');

    setEditorState(nextState);
  };

  const underlineText = (e: any) => {
    e.preventDefault();

    let nextState = RichUtils.toggleInlineStyle(editorState, 'UNDERLINE');

    setEditorState(nextState);
  };

  return (
    <div className='MyEditor'>
      <button onMouseDown={(e) => boldText(e)}>Bold</button>
      <button onMouseDown={(e) => underlineText(e)}>Underline</button>
      <Editor
        editorState={editorState}
        onChange={(editorState) => setEditorState(editorState)}
      />
    </div>
  );
};
