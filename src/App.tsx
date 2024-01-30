import SplitPane, {
  Divider,
  SplitPaneBottom,
  SplitPaneLeft,
  SplitPaneRight,
  SplitPaneTop,
} from "./containers/SplitPane";
import { QusetionDisplay } from "./containers/QuestionDisplay";

import React, { useRef } from "react";

import Editor, { Monaco } from "@monaco-editor/react";
import { editor } from "monaco-editor";

function App() {
  const editorRef:
    | React.MutableRefObject<editor.IStandaloneCodeEditor>
    | React.MutableRefObject<null> = useRef(null);

  function handleEditorDidMount(
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current?.getValue());
  }

  return (
    <>
      <SplitPane className="split-pane-row">
        <SplitPaneLeft>
          <QusetionDisplay/>
        </SplitPaneLeft>
        <Divider className="separator-col" />

        <SplitPaneRight>
          <SplitPane>
            <SplitPaneTop>
              <Editor
                height="90vh"
                // defaultLanguage="c"
                defaultValue="// Write your code here"
                language="c"
                onMount={handleEditorDidMount}
                className=" p-3"
              />
            </SplitPaneTop>
            <Divider className="separator-row" />
            <SplitPaneBottom>
              <button onClick={showValue}>Show Value</button>
            </SplitPaneBottom>
          </SplitPane>
        </SplitPaneRight>
      </SplitPane>
    </>
  );
}

export default App;
