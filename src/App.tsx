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
import Main from "./containers/Main";

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
      <Main />
    </>
  );
}

export default App;
