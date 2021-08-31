import { useState } from 'react';
import Sort from './sort'
import './index.scss'
import { useEffect } from 'react';
import { Button, Upload, Input } from 'antd';
import UploadFile from './up';
import { useDrop, useDrag } from 'ahooks';
import { Fragment } from 'react';
import pro from './component';

function ProInput(props) {

    return <Fragment>
        <Input {...props}></Input>
    </Fragment>
}

function Dnd() {
    const [sort, setSort] = useState(null);
    const [draggingIndex, setDraggingIndex] = useState(NaN);
    const [list, setlist] = useState(['Item 1',]);
    const [box, setBox] = useState([
        {
            "text": '按钮',
            "html": "_pro.ProButton({onClick:()=>{console.log('点击了按钮')}})",
            "props": {
                "style": {
                    "color": 'red',
                    "fontSize": '34px'
                },
                "value": 222
            }
        },
        {
            "text": '输入框',
            "html": "_pro.ProInput({ placeholder: '2131' })"
            ,
        },
        {
            "text": '上传事件',
            "html": "_pro.Upload()",
        },
    ]);

    const getDragProps = useDrag({
        onDragStart: (index) => {
            setDraggingIndex(index.split(':')[1]);
        },
        onDragEnd: () => {
            setDraggingIndex(NaN);
        },
    });
    function insertStr(soure, start, newStr) {
        return soure.slice(0, start) + newStr + soure.slice(start);
    }

    const replaceStr = (str, index, char) => {
        const strAry = str.split('');
        strAry[index] = char;
        return strAry.join('');
    }
    function pro_render({ props, html }, _pro = pro) {
        var _pro = pro;
        let _html = html;
        if (props) {
            let propsTOjson = JSON.stringify(props);
            _html = insertStr(html, html.length - 2, `,pro_data:${propsTOjson}`)
        }
        return eval(_html)
    }
    const [props, { isHovering }] = useDrop({
        // onText: (text, e) => {
        //     console.log(text, e);
        // },
        // onFiles: (files, e) => {
        //     console.log(e, files);
        // },
        // onUri: (uri, e) => {
        //     console.log(uri, e);
        // },
        onDom: (content, e) => {
            console.log(box[draggingIndex]);

            setlist([...list,
            // <div {...box[draggingIndex].props}>
            pro_render(box[draggingIndex]),
                // </div>
            ])
            // console.log(content);
        },
    });

    useEffect(() => {
    }, [])

    return (
        <div className='dnd_wrap flex'>
            <div className='edit_mobile' {...props}>
                <Sort sort={sort} list={list} setlist={setlist} />

                {isHovering ? '松开确认' : '请拖入'}
            </div>
            <div className='simulator'  >
                {/* <UploadFile /> */}
                <div>
                    <div >
                        {box.map((e, i) => (
                            <div
                                {...getDragProps(`useDrop:${i}`)}
                                style={{
                                    border: '1px solid #e8e8e8',
                                    padding: 16,
                                    textAlign: 'center',
                                    marginRight: 16,
                                }}
                            >
                                {e.html}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dnd;