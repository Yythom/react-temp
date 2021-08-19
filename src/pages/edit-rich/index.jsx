import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-react";
import './index.scss'
const Example = ({ }) => {
    const editor = useRef(null)
    const [content, setContent] = useState('')

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={{
                "uploader": {
                    "insertImageAsBase64URI": true
                },
                "language": "zh_cn",
                "toolbarAdaptive": true,
                style: {

                },
                // "minHeight": 300,
                // "maxHeight": 300,
                // "minWidth": 500,
                // "maxWidth": 500,
                // "buttons": "source,bold,italic,underline,strikethrough,eraser,ul,ol,indent,outdent,left,font,fontsize,paragraph,classSpan,brush,image"
            }}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => {
                console.log(newContent, 'newContent');
                setContent(newContent)
            }} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => {

            }}
        />
    );
}
export default Example