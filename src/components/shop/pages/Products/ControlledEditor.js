import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class ControlledEditor extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     editorState: EditorState.createEmpty(),
  //   };
  // }
  //
  // onEditorStateChange: Function = (editorState) => {
  //   this.setState({
  //     editorState,
  //   });
  // };

  render() {
    const { editorState,onEditorStateChange } = this.props;
    return (
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        hashtag={{
          separator: ' ',
          trigger: '#',
        }}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
    )
  }
}

export default ControlledEditor
