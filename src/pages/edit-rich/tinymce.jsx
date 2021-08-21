/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Editor } from "@tinymce/tinymce-react";
import { hideLoading, showLoading, showToast } from '@/utils/Toast';
import { apiKey, plugin } from './rich-config';
import { htmlToimage } from './fetch';
import img from '@/pages/edit-rich/4.png';
import './index.scss';
import axios from 'axios';
import request from '@/http/index';


const Index = () => {
    const [initHtml, setInitHtml] = useState('');
    const [orignHtml, setOrignHtml] = useState('');
    const [editload, setEditload] = useState(false);
    const [htmlstr, setHtmlstr] = useState('');
    const [pageData, setPageData] = useState({
        url: '',
        base64: ''
    });

    const getUploadApi = data => request({ url: '/api/v1/shop/upload/token', method: 'post', data })

    const blobToBase64 = (blob) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                resolve(e.target.result);
            };
            // readAsDataURL
            fileReader.readAsDataURL(blob);
            fileReader.onerror = () => {
                reject(new Error('blobToBase64 error'));
            };
        });
    }

    const [init, setInit] = useState(false)
    const replaceStr = async (__html, ischange) => {
        var imgReg = /<img.*?(?:>|\/>)/gi;
        let str = __html
        //匹配src属性
        var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
        var arr = __html.match(imgReg) || [];
        for (var i = 0; i < arr.length; i++) {
            var src = arr[i].match(srcReg) || [];
            //获取图片地址
            for (let index = 0; index < src.length; index++) {
                if (src[index][1]) {
                    let _src = src[index][1]
                    // console.log(_src, 'src[index]');
                }
            }

            if (src[1]) {
                let _src = src[1];
                if (_src.indexOf('data:image') == -1) {
                    const res = await axios.post('http://0.0.0.0:8701/osspost', {
                        url: _src
                    })

                    if (res?.data) {
                        // console.log(src, i, 'src');
                        str = str.replace(_src, res.data);
                    }
                }
            }
            //当然你也可以替换src属性
            if (src[0]) {
                // var t = src[0].replace(/src/i, "href");
                //alert(t);
            }
        }
        if (init) {
            setHtmlstr(str);
        } else {
            setInitHtml(__html);
            setHtmlstr(str);
            setInit(true)
        }

        // console.log(_inithtml, '_inithtml');
    }

    useEffect(() => {
        // replaceStr('<p>222</p><p><img src="https://ryq-mall-ml.oss-cn-chengdu.aliyuncs.com/ryq/desc/e07d6a574be34.jpg" /></p>');
        // showLoading('loading');
    }, []);

    return (
        <div className='rich_wrap' >
            <div className='rich_edit'>
                <Editor
                    style={{ display: editload ? "none" : "block" }}
                    // value={initHtml}
                    initialValue={initHtml}
                    apiKey={apiKey}
                    init={{
                        init_instance_callback: () => {
                            hideLoading();
                            setEditload(true);
                        },
                        // images_upload_handler: async (blobInfo, success, failure) => {
                        //     // console.log(11111, blobInfo, URL.createObjectURL(blobInfo.blob()))
                        //     if (blobInfo.blob()) {
                        //         // blobToBase64(blobInfo.blob()).then(res => {
                        //         //     console.log(res);
                        //         // })
                        //         // getUploadApi({}).then(data=>{

                        //         // })
                        //         let file = blobInfo.blob();

                        //         // axios.post('http://0.0.0.0:8701/osspost', {
                        //         //     url: 'https://ryq-mall-ml.oss-cn-chengdu.aliyuncs.com/ryq/desc/e07d6a574be34.jpg'
                        //         // }).then(res => {
                        //         // console.log(res.data);
                        //         success('https://ryq-mall-ml.oss-cn-chengdu.aliyuncs.com/ryq/desc/e07d6a574be34.jpg');
                        //         // })
                        //     }
                        // },
                        save_onsavecallback: async (e) => {
                            let html = e.getContent();
                            console.log('保存', html);
                            // console.log(htmlstr);
                            // if (html === "") {
                            //     showToast.message("内容填写不完整")
                            //     return;
                            // }
                            // let file = await htmlToimage('article-preview')
                            // console.log(file);
                            // api
                        },
                        language: 'zh_CN',
                        content_style: "img {max-width:100%;height:auto !important} body{margin:0}",
                        height: '100%',
                        width: 600,
                        branding: false,
                        menubar: false,
                        autosave_ask_before_unload: false,
                        fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
                        toolbar_drawer: false,
                        // plugins: ["quickbars", "link", "table"],
                        plugins: plugin,
                        quickbars_selection_toolbar: `bold italic forecolor | link blockquote quickimage`,
                        toolbar: `save ｜ code undo redo restoredraft | cut copy pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent |
                            styleselect  fontselect fontsizeselect | bullist numlist 
                        ${'' /** | blockquote subscript superscript removeformat | */}
                            table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight formatpainter axupimgs importword ｜ help `,
                    }}

                    onEditorChange={(val) => {
                        // setOrignHtml(val)
                        setHtmlstr(val)
                        // replaceStr(val);
                    }}
                />
            </div>
            <div className='rich-render-warp'>
                <div
                    className='article-preview'
                    onClick={() => {
                        console.log(htmlstr,);
                        console.log('orignHtml :' + orignHtml);
                    }}
                    dangerouslySetInnerHTML={{ __html: htmlstr }}
                ></div>
            </div>
        </div >
    )
}

export default Index


