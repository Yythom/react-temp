/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Sort from './sort'
import './index.scss'
import { useEffect } from 'react';
import { Input } from 'antd';
// import UploadFile from './up';
import { useDrop, useDrag } from 'ahooks';
import { Fragment } from 'react';
import pro from './component';
import { Slider } from 'zarm';
import { showToast } from '@/utils/Toast';

function Dnd() {
    const [sort, setSort] = useState(null);
    const [draggingIndex, setDraggingIndex] = useState(NaN);
    const [list, setlist] = useState(['Item 1',]);
    const [box, setBox] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('jsx')) {
            console.log('本地读取配置中');
            setBox(JSON.parse(localStorage.getItem('jsx')));
        } else {
            setBox([
                {
                    "text": '按钮',
                    "html": "_pro.ProButton({onClick:()=>{console.log('点击了按钮')}})",
                    "props": {
                        "style": {
                            "color": 'red',
                            "fontSize": '34px'
                        },
                        "value": 222,
                    },
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
            ])
        }
    }, [])

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

    const [changing_element, setchanging] = useState({
        ele: null,
        index: '',
    });

    /**
     * 
     * @param {*} attr   props--属性名
     * @param {*} value  值
     * @param {*} key    属性对象下的key
     */
    function changeProps(attr, value, key) {
        const { ele, index } = changing_element
        if (!ele) return showToast.message('请选择修改元素')
        const copy = JSON.parse(JSON.stringify(ele));
        if (!copy.props) copy.props = {};

        if (typeof copy.props[attr] === 'object' && key) {
            const newProps = { ...copy.props };
            newProps[attr][key] = value;
            copy.props = newProps;
        } else {
            copy.props[attr] = value;
        }

        const newList = JSON.parse(JSON.stringify(box));
        newList[index].props = copy.props;
        setBox(newList);
        console.log(newList);
        localStorage.setItem('jsx', JSON.stringify(newList))

    }

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
                                className={`item ${e == changing_element?.ele && 'act-item'}`}
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
                                {pro_render({ html: e.html, props: e.props })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='simulator'  >
                {/* <UploadFile /> */}
                <div>
                    <Slider onChange={(e) => {
                        changeProps('style', `${e}px`, 'padding',)

                    }} ></Slider>
                </div>
                <div>
                    <Input type="text"
                        onBlur={(e) => {
                            changeProps('style', `#${e.target.value}`, 'color',)
                        }} />
                </div>
            </div>

        </div>
    )
}

export default Dnd;