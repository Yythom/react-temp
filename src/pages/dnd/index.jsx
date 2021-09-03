/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Sort from './sort'
import './index.scss'
import { useEffect } from 'react';
import { Input } from 'antd';
// import UploadFile from './up';
import { useDrop, useDrag } from 'ahooks';
import { Fragment } from 'react';
import procomponent from './component';
import { Slider } from 'zarm';
import { showToast } from '@/utils/Toast';
import { changeContent, changeProps, pro_render } from './common';
import data from './data.json'
function Dnd() {
    const [sort, setSort] = useState(null);
    const [draggingIndex, setDraggingIndex] = useState(NaN);
    // const [list, setlist] = useState([]);
    const [renderList, setRenderList] = useState([]);
    const [box, setBox] = useState([]);

    useEffect(() => {
        setBox(data.list)
        if (localStorage.getItem('jsx')) {
            // console.log('本地读取配置中');
            // setBox(JSON.parse(localStorage.getItem('jsx')));
        } else {

        }
        setchanging({ ele: data.list[0], index: 0 })
    }, [])

    const getDragProps = useDrag({
        onDragStart: (index) => {
            setDraggingIndex(index.split(':')[1]);
        },
        onDragEnd: () => {
            setDraggingIndex(NaN);
        },
    });


    const [props, { isHovering }] = useDrop({
        // onText: (text, e) => { },
        // onFiles: (files, e) => { },
        // onUri: (uri, e) => { },
        onDom: (content, e) => {
            console.log(box[draggingIndex], 'box[draggingIndex]');
            const newList = [...renderList, box[draggingIndex]];
            setRenderList(newList)
            localStorage.setItem('jsx', JSON.stringify(newList))
        },
    });

    const [changing_element, setchanging] = useState({
        ele: null,
        index: '',
    });



    return (
        <div className='dnd_wrap fb' style={{ justifyContent: 'space-around' }}>
            <div className='edit_mobile' {...props}>
                <Sort sort={sort} list={renderList} setlist={setRenderList} />
                {isHovering ? '松开确认' : '请拖入'}
            </div>
            <div className='simulator'  >
                {/* <UploadFile /> */}
                <div>
                    <div >
                        {box.map((e, i) => (
                            <div
                                className={`item fc ${i === changing_element?.index && 'act-item'}`}
                                onClick={() => {
                                    setchanging(
                                        {
                                            ele: e,
                                            index: i,
                                        }
                                    )
                                }}
                                {...getDragProps(`useDrop:${i}`)}
                            >
                                {pro_render({ type: e.type, props: e.props })}

                                {/* {pro_render({ html: e.html, props: e.props })} */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='simulator config'  >
                {/* <UploadFile /> */}

                {/* 修改配置项 */}
                <div>
                    内边距:
                    <Input
                        type="text"
                        placeholder='10'
                        onBlur={(e) => {
                            changeProps(
                                changing_element,
                                box,
                                { attr: 'style', value: `${e.target.value / 2}px`, key: 'padding' },
                                (newList) => {
                                    setBox(newList);
                                }
                            )
                        }} />
                </div>

                <div>
                    高度:
                    <Input
                        type="text"
                        placeholder='100'
                        onBlur={(e) => {
                            changeProps(
                                changing_element,
                                box,
                                { attr: 'style', value: `${e.target.value / 2}px`, key: 'height' },
                                (newList) => {
                                    setBox(newList);
                                }
                            )
                        }} />
                </div>

                <div>
                    文字颜色:
                    <Input
                        type="text"
                        placeholder='#333333'
                        onBlur={(e) => {
                            changeProps(
                                changing_element,
                                box,
                                { attr: 'style', value: `${e.target.value}`, key: 'color' },
                                (newList) => {
                                    setBox(newList);
                                }
                            )
                        }} />
                </div>
                <div>
                    背景颜色:
                    <Input type="text"
                        placeholder='#333333'
                        onBlur={(e) => {
                            changeProps(
                                changing_element,
                                box,
                                { attr: 'style', value: `${e.target.value}`, key: 'background' },
                                (newList) => {
                                    setBox(newList);
                                }
                            )
                        }} />
                </div>
                <div>
                    文字:
                    <Input type="text"
                        onBlur={(e) => {
                            changeProps(
                                changing_element,
                                box,
                                { attr: 'content', value: `${e.target.value}` },
                                (newList) => {
                                    setBox(newList);
                                }
                            )
                        }} />
                </div>

                <div>
                    请求地址:
                    <Input
                        type="text"
                        placeholder='https:// 默认自动填写'
                        onBlur={(e) => {
                            changeProps(
                                changing_element,
                                box,
                                { attr: 'http', value: `${e.target.value || 'http://49.234.41.182:8701/locationKeyword'}`, key: 'ip' },
                                (newList) => {
                                    setBox(newList);
                                }
                            )
                        }} />
                    <textarea
                        type="text"
                        placeholder='json请求参数 默认自动填写'
                        onBlur={(e) => {
                            changeProps(
                                changing_element,
                                box,
                                { attr: 'http', value: `${e.target.value || '{"keyword":"东方希望天"}'}`, key: 'params' },
                                (newList) => {
                                    setBox(newList);
                                }
                            )
                        }} />
                </div>

                <div>
                    图片地址:
                    <Input
                        type="text"
                        placeholder='https://'
                        onBlur={(e) => {
                            changeProps(
                                changing_element,
                                box,
                                { attr: 'list', value: `${e.target.value || 'https://img1.baidu.com/it/u=774667769,955160177&fm=26&fmt=auto&gp=0.jpg'}`, key: [] },
                                (newList) => {
                                    setBox(newList);
                                }
                            )
                        }} />
                </div>

            </div>

        </div>
    )
}

export default Dnd;