import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import ReactWEditor from 'wangeditor-for-react';
import { uploadFile } from './fetch';

import './index.scss'

const Example = () => {
    useEffect(() => {

    }, [])


    return (
        <div id='editor'>
            <ReactWEditor

                config={{
                    height: 800,
                    showMenuTooltips: true,
                    menuTooltipPosition: 'down',
                    pasteFilterStyle: false,
                    uploadImgMaxLength: 30,
                    excludeMenus: [
                        'todo',
                        'table'
                    ],
                    uploadImgHeaders: { // 上传图片时添加 http 请求的 header
                        // Accept: 'text/x-json',
                        // a: 100,
                    },
                    customUploadImg: function (resultFiles, insertImgFn) {
                        for (var i = 0; i < resultFiles.length; i++) {
                            const file = resultFiles[i];
                            uploadFile(file, (url) => {
                                insertImgFn(url);
                            })
                        }
                    },
                    customUploadVideo: function (resultFiles, insertVideoFn) {
                        // resultFiles 是 input 中选中的文件列表
                        // insertVideoFn 是获取视频 url 后，插入到编辑器的方法

                        for (var i = 0; i < resultFiles.length; i++) {
                            const file = resultFiles[i];
                            uploadFile(file, (url) => {
                                insertVideoFn(url);
                            })
                        }
                        // 上传视频，返回结果，将视频地址插入到编辑器中
                    }
                }}
                defaultValue={'<h1>标题</h1>'}
                // linkImgCallback={(src, alt, href) => {
                //     // 插入网络图片的回调事件
                //     console.log('图片 src ', src)
                //     console.log('图片文字说明', alt)
                //     console.log('跳转链接', href)
                // }}
                // onlineVideoCallback={(video) => {
                //     // 插入网络视频的回调事件
                //     console.log('插入视频内容', video)
                // }}
                onChange={(html) => {
                    console.log('onChange html:', html)
                    // console.log('onChange html:', html)
                }}
                onBlur={(html) => {


                    // console.log('onBlur html:', xss(html))
                }}
            />
        </div>
    );
}
export default Example;