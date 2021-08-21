import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'zarm'
import 'braft-editor/dist/index.css'
import { uploadFile } from './fetch';
import BraftEditor from 'braft-editor'
// Import bootstrap(v3 or v4) dependencies

import './index.scss'
const Example = ({ }) => {
    const editor = useRef(null)
    const [content, setContent] = useState(BraftEditor.createEditorState(null))

    useEffect(() => {
        // 假设此处从服务端获取html格式的编辑器内容
        const htmlContent = '<p><span style="font-family: Arial;"><br></span></p><table class="table table-bordered"><tbody><tr><td>122121312</td><td>2312</td><td>213</td><td>231</td></tr><tr><td>213</td><td>213</td><td>213</td><td>213</td></tr></tbody></table><p><span style="font-family: Arial;">﻿</span>Hello Summernote</p>'

        // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat

        setContent(BraftEditor.createEditorState(htmlContent))
    }, [])

    const submitContent = async () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML()
        console.log(htmlContent);
    }


    const handleEditorChange = (editorState) => {
        setContent(editorState)
    }


    return (
        <div className="my-component">
            <BraftEditor
                stripPastedStyles={false}
                defaultValue=''
                value={content}
                onChange={handleEditorChange}
                onSave={submitContent}
            />
        </div>




    );
}
export default Example