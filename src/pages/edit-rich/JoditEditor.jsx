import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-react";
import './index.scss'
const Example = ({ }) => {
    const editor = useRef(null)
    const [content, setContent] = useState(`
    <p style="text-align: left;" wx:nodeid="160">122<img src="http://49.234.41.182:8701/file?url=A0XgeXmgphXw43577cf1808a1a59b1704612cebc07e6.jpg" width="80%" data-custom="id=abcd&amp;role=god" wx:nodeid="179"></p><p style="text-align: left;" wx:nodeid="183"><br wx:nodeid="184"></p>
    `)

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    return (
        <div className='jod'>
            <JoditEditor
                ref={editor}
                value={content}
                config={{
                    showTooltipDelay: 200, // 工具栏提示延迟

                    events: {
                        getIcon: (name, control, clearName) => {
                            // var code = name;
                            // console.log(name);
                            switch (clearName) {
                                case 'brush': // 颜色
                                    return `<svg t="1629537310527" class="icon" viewBox="0 0 1105 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6309" width="64" height="64"><path d="M924.34508 257.969231c-238.276923-112.246154-439.138462 114.215385-533.661538 0-37.415385-47.261538 45.292308-131.938462 0-191.015385-33.476923-41.353846-112.246154-33.476923-163.446154 0C91.360465 163.446154 0.775849 320.984615 0.775849 498.215385 0.775849 789.661538 239.052773 1024 534.437388 1024c246.153846 0 452.923077-163.446154 515.938461-382.030769 19.692308-78.769231 43.323077-299.323077-126.030769-384zM138.622003 488.369231c0-43.323077 35.446154-78.769231 78.769231-78.769231s78.769231 35.446154 78.769231 78.769231-35.446154 78.769231-78.769231 78.769231-78.769231-35.446154-78.769231-78.769231z m191.015385 303.261538c-43.323077 0-78.769231-35.446154-78.769231-78.769231s35.446154-78.769231 78.769231-78.76923 78.769231 35.446154 78.769231 78.76923-35.446154 78.769231-78.769231 78.769231z m248.123077 90.584616c-43.323077 0-78.769231-35.446154-78.769231-78.769231s35.446154-78.769231 78.769231-78.769231 78.769231 35.446154 78.769231 78.769231-35.446154 78.769231-78.769231 78.769231z m179.2-275.692308c-64.984615 0-118.153846-53.169231-118.153846-118.153846s53.169231-118.153846 118.153846-118.153846 118.153846 53.169231 118.153846 118.153846-51.2 118.153846-118.153846 118.153846z"  p-id="6310"></path></svg>`
                                case 'paragraph':
                                    return '<svg t="1629537537051" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9335" width="64" height="64"><path d="M308.623635 461.155909h406.75273v-355.90864a50.844091 50.844091 0 1 1 101.688183 0v813.505462a50.844091 50.844091 0 0 1-101.688183 0v-355.90864h-406.75273v355.90864a50.844091 50.844091 0 0 1-101.688183 0v-813.505462a50.844091 50.844091 0 0 1 101.688183 0z" fill="#666666" p-id="9336"></path></svg>'
                                default:
                                    break;
                            }
                        }
                    },
                    uploader: {
                        url: 'http://49.234.41.182:8701/upload',
                        isSuccess: (res) => {
                            return res
                        },
                        getMessage: function (e) {
                            return void 0 !== e.data.messages && Array.isArray(e.data.messages) ? e.data.messages.join("") : ""
                        },
                        process: function (resp) {
                            return {
                                "baseurl": "http://49.234.41.182:8701/file?url=",
                                "messages": [],
                                "files": [
                                    Object.keys(resp)[0]
                                ],
                                "isImages": [
                                    true
                                ],
                                "code": 220
                            }
                        },

                    },
                    language: "zh_cn",
                    // "toolbarAdaptive": true,
                    style: {
                        // font: '99px Arial',
                    },
                    "minHeight": 800,
                    // "maxHeight": 800,
                    // "minWidth": 500,
                    // "maxWidth": 500,
                    disablePlugins: ['table'],

                    buttons: [
                        'source', '|',
                        'bold',
                        'strikethrough',
                        'underline',
                        'italic', '|',
                        'ul',
                        'ol', '|',
                        'outdent', 'indent', '|',
                        'font',
                        'fontsize',
                        'brush',
                        'paragraph', '|',
                        'image',
                        'video',
                        'table',
                        'link', '|',
                        'align', 'undo', 'redo', '|',
                        'hr',
                        'eraser',
                        'copyformat', '|',
                        'symbol',
                        'fullsize',
                        'print',
                        'about'
                    ],
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
        </div>
    );
}
export default Example