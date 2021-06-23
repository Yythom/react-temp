/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Editor } from "@tinymce/tinymce-react";
import html2canvas from "html2canvas";
import { hideLoading, showLoading, showToast } from '@/utils/Toast';
import { apiKey, plugin } from './rich-config';
import './index.scss';
import { htmlToimage } from './fetch';

const Index = () => {
    const inithtml = '<p>111</p>';
    const [editload, setEditload] = useState(false);
    const [htmlstr, setHtmlstr] = useState(inithtml);

    useEffect(() => {
        showLoading('loading');
    }, []);

    return (
        <div className='rich_wrap' >
            <div className='rich_edit'>
                <Editor
                    style={{ display: editload ? "none" : "block" }}
                    initialValue={inithtml}
                    apiKey={apiKey}
                    init={{
                        init_instance_callback: () => {
                            hideLoading();
                            setEditload(true);
                        },
                        // images_upload_handler: (blobInfo, success, failure) => {
                        //     if (blobInfo.blob()) {
                        //         const formData = new window.FormData();
                        //         formData.append('myFile', blobInfo.blob(), blobInfo.filename())
                        //         fetch("http://localhost/xxxx", {
                        //             method: "POST",
                        //             headers: {
                        //                 "Content-Type": 'application/x-www-form-urlencoded'
                        //             },
                        //             body: formData
                        //         }).then((res) => {
                        //             if (res.data) {
                        //                 // 将图片插入到编辑器中
                        //                 success(res.data.data[0])
                        //             }
                        //         })
                        //     }
                        // },
                        save_onsavecallback: async (e) => {
                            let html = e.getContent();
                            console.log('保存', html);
                            console.log(htmlstr);
                            if (html === "") {
                                showToast.message("内容填写不完整")
                                return;
                            }
                            let file = await htmlToimage('article-preview')
                            console.log(file);
                            // api

                        },
                        language: 'zh_CN',
                        content_style: "img {max-width:100%;} *{text-align: center;} body{margin:0}",
                        height: '100vh',
                        width: 500,
                        branding: false,
                        menubar: false,
                        autosave_ask_before_unload: false,
                        fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
                        toolbar_drawer: false,
                        // plugins: ["quickbars", "link", "table"],
                        plugins: plugin,
                        quickbars_selection_toolbar: `bold italic forecolor | link blockquote quickimage`,
                        toolbar: `save ｜ code undo redo restoredraft | cut copy pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \
                            styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
                            table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight formatpainter axupimgs importword ｜ insertdatetime ｜ help `,
                    }}
                    onEditorChange={(val) => {
                        setHtmlstr(val);
                    }}
                />
            </div>
            <div className='rich-render-warp'>
                <div
                    className='article-preview'
                    onClick={() => {
                        console.log(htmlstr);
                    }}
                    dangerouslySetInnerHTML={{ __html: htmlstr }}
                ></div>
            </div>
        </div >
    )
}

export default Index


