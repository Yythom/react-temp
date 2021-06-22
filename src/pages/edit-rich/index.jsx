/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Editor } from "@tinymce/tinymce-react";
import html2canvas from "html2canvas";
import { hideLoading, showLoading } from '@/utils/Toast';

const Index = () => {
    const [editload, setEditload] = useState(false);
    const [htmlstr, setHtmlstr] = useState(null);
    useEffect(() => {
        showLoading('loading');
    }, [])
    return (
        <div className='rich_wrap' >
            <div className='rich_edit'>
                <Editor
                    style={{ display: editload ? "none" : "block" }}
                    initialValue={htmlstr}
                    apiKey='b157zgyp4h00irdb49j690a4run8cnc00x7c1sge45udbftc'
                    language='zh_CN'
                    init={{
                        init_instance_callback: () => {
                            // hideLoading();
                            setEditload(true);
                        },
                        content_style: "img {max-width:100%;}",
                        height: 700,
                        branding: false,
                        menubar: false,
                        autosave_ask_before_unload: false,
                        toolbar_drawer: false,
                        plugins: ["quickbars", "link", "table"],
                        quickbars_selection_toolbar: `bold italic forecolor | link blockquote quickimage`,
                        toolbar: `code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \
                            styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
                            table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight formatpainter axupimgs importword`,
                    }}
                    onEditorChange={(val) => {
                        console.log(val.length);
                        setHtmlstr(val);
                    }}
                />
            </div>
        </div >
    )
}

export default Index


