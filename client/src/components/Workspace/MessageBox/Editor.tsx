import React from 'react';
import { useState } from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  KeyBindingUtil,
} from 'draft-js';
import { Bold } from 'assets/svg';

import { Wrapper } from 'styles/Workspace/MessageBox/Editor';

export const MyEditor = () => {
  const { hasCommandModifier } = KeyBindingUtil;
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const boldText = (e: any) => {
    // onMouseDown and e.preventDefault because editor losses focus if you use onClick
    e.preventDefault();
    let nextState = RichUtils.toggleInlineStyle(editorState, 'BOLD');
    setEditorState(nextState);
  };

  function keyBindingFn(e: any) {
    const content = editorState.getCurrentContent();
    if (e.keyCode === 13 && content.hasText()) {
      console.log('entered');
      return 'send';
    }
    return getDefaultKeyBinding(e);
  }

  const handleKeyCommand = (command: string) => {
    let newState;
    if (command === 'send') {
      // send
      newState = EditorState.createEmpty();
    }
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  return (
    <Wrapper className='MyEditor'>
      <Editor
        placeholder='Message #general'
        editorState={editorState}
        keyBindingFn={keyBindingFn}
        handleKeyCommand={(command) => handleKeyCommand(command)}
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
