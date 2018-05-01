import React, { PureComponent } from "react";
import ImageResize from "quill-image-resize-module";
import ReactQuill, { Quill } from "react-quill";

Quill.register("modules/ImageResize", ImageResize);

const modules = {
  ImageResize: {}
};

export default class QuillComponent extends PureComponent {
  state = {
    text: ""
  };
  constructor(props) {
    super(props);
  }

  handleChange = text => {
    this.setState({
      text
    });
  };

  render() {
    return (
      <ReactQuill
        modules={modules}
        value={this.state.text}
        onChange={this.handleChange}
      />
    );
  }
}
