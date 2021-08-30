import { useState } from 'react';
import Sort from './sort'
import './index.scss'
import { useEffect } from 'react';
import { Button, Upload } from 'antd';
import UploadFile from './up';
import { useDrop, useDrag } from 'ahooks';
function Dnd() {
    const [sort, setSort] = useState(null);
    const [draggingIndex, setDraggingIndex] = useState(NaN);
    const [list, setlist] = useState(['Item 1',]);
    const [box, setBox] = useState([
        {
            text: 'box 1',
            props: {
                style: {
                    fontSize: '20px',
                }
            },
        },
        {
            text: 'box 2',
            props: {
                style: {
                    color: '#fff',
                }
            },
        },
        {
            text: '有点击事件的 4',
            props: {
                onClick: () => {
                    console.log(121231);
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
            setlist([...list, <div {...box[draggingIndex].props}>{box[draggingIndex].text}</div>])
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
            <div className='simulator'>
                {/* <UploadFile /> */}
                <div>
                    <div style={{ border: '1px dashed #e8e8e8', padding: 16, textAlign: 'center' }} {...props}>

                    </div>

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
                            >
                                {e.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dnd;