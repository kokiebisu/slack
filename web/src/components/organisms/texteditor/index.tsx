import * as b from "global/blocks";
import { Editor, EditorState } from "draft-js";
import { EditorContext } from "context/editor-state-context";
import { useContext, useRef, useState } from "react";
import "draft-js/dist/Draft.css";
import styled, { ThemeContext } from "styled-components";
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
  const textContent = editorState.getCurrentContent().getPlainText("\u0001");

  return (
    <b.Box>
      <b.Box
        border="2px solid"
        borderColor={theme.colors.blue}
        borderRadius={4}
      >
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
      <ShortcutAdvice isVisible={textContent.length > 2}>
        <b.Flex justifyContent="flex-end">
          <b.Box my={1}>
            <b.Flex>
              <b.Box mr={2}>
                <b.Text
                  fontSize={11}
                  fontFamily="SlackLato-Regular"
                  color={theme.colors.gray__light}
                >
                  <b.Span fontFamily="SlackLato-Bold">Return</b.Span> to send
                </b.Text>
              </b.Box>
              <b.Box>
                <b.Text
                  fontSize={11}
                  fontFamily="SlackLato-Regular"
                  color={theme.colors.gray__light}
                >
                  <b.Span fontFamily="SlackLato-Bold">Shift + Return</b.Span> to
                  add a new line
                </b.Text>
              </b.Box>
            </b.Flex>
          </b.Box>
        </b.Flex>
      </ShortcutAdvice>
    </b.Box>
  );
};

const ShortcutAdvice = styled(b.Box)`
  transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
  visibility: ${({ isVisible }: { isVisible: boolean }) =>
    isVisible ? "visible" : "hidden"};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;
