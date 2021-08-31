import { useState } from 'react';
import Sort from './sort'
import './index.scss'
import { useEffect } from 'react';
import { Button, Upload, Input } from 'antd';
import UploadFile from './up';
import { useDrop, useDrag } from 'ahooks';
import { Fragment } from 'react';

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
            text: `文本元素`,
            html: <text style={{
                fontSize: '20px',
                color: 'red'
            }} >'文本元素'</text>,
        },
        {
            text: '按钮',
            html: <Button
                style={
                    { color: '#000', }
                }
                onClick={() => {
                    console.log(121231);
                }
                }>
                按钮
            </Button >,
        },
        {
            text: '输入框',
            html:
                <ProInput
                    placeholder='2131'
                    onClick={() => {
                        console.log(121231);
                    }}
                />,
        },
        {
            text: '上传事件',
            html: <UploadFile />,
            props: {
                onClick: () => {

                }
            },
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
            box[draggingIndex].html
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
                    <div style={{ display: 'flex', marginTop: 8 }}>
                        {box.map((e, i) => (
                            <div
                                {...getDragProps(`useDrop:${i}`)}
                                style={{
                                    border: '1px solid #e8e8e8',
                                    padding: 16,
                                    width: 80,
                                    textAlign: 'center',
                                    marginRight: 16,
                                }}
                                dangerouslySetInnerHTML={{ __html: e.text }}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dnd;