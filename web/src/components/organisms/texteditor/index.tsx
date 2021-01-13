import * as b from "global/blocks";
import { Editor, EditorState } from "draft-js";
import { EditorContext } from "context/editor-state-context";
import { useContext, useRef, useState } from "react";
import "draft-js/dist/Draft.css";
import { ThemeContext } from "styled-components";
import { Button } from "components/atoms/button";

export interface TextEditorProps {
  channel: string;
}

export const TextEditor: React.FC<TextEditorProps> = ({
  channel = "general",
}) => {
  const theme = useContext(ThemeContext);
  const editor = useRef<Editor>(null);
  const [focused, setOnFocused] = useState(false);
  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createEmpty()
  );

  return (
    <b.Box border="2px solid" borderColor={theme.colors.blue} borderRadius={4}>
      <b.Box p={10}>
        <EditorContext.Provider value={editorState}>
          <Editor
            onFocus={() => setOnFocused(true)}
            onBlur={() => setOnFocused(false)}
            editorState={editorState}
            onChange={setEditorState}
            placeholder={`Send a message to #${channel}`}
            ref={editor}
          />
        </EditorContext.Provider>
      </b.Box>
      <b.Box
        p={1}
        borderTop="1px solid"
        borderColor={focused ? theme.colors.white__darker : "transparent"}
      >
        <b.Flex justifyContent="space-between" alignItems="center">
          <b.Box
            borderRight="1px solid"
            borderColor={theme.colors.white__darker}
          >
            <Button variant="texteditor" type="lightening" />
          </b.Box>
          <b.Box>
            <b.Flex>
              <b.Box ml={1}>
                <Button variant="texteditor" type="smile" />
              </b.Box>
              <b.Box ml={1}>
                <Button variant="texteditor" type="paperclip" />
              </b.Box>
              <b.Box ml={2}>
                <Button variant="texteditor" type="paperplane" />
              </b.Box>
            </b.Flex>
          </b.Box>
        </b.Flex>
      </b.Box>
    </b.Box>
  );
};
