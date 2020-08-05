import React from 'react';
import { useState } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import styled from 'styled-components';
import { Bold } from 'assets/svg';

import { Wrapper } from 'styles/Workspace/MessageBox/Editor';

export const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const boldText = (e: any) => {
    // onMouseDown and e.preventDefault because editor losses focus if you use onClick
    e.preventDefault();

    let nextState = RichUtils.toggleInlineStyle(editorState, 'BOLD');

    setEditorState(nextState);
  };

  return (
    <Wrapper className='MyEditor'>
      <Editor
        placeholder='Message #general'
        editorState={editorState}
        onChange={(editorState) => setEditorState(editorState)}
      />
      <div>
        <button onMouseDown={(e) => boldText(e)}>
          <Bold />
        </button>
      </div>
    </Wrapper>
  );
};
