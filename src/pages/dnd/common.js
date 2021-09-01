import { showToast } from '@/utils/Toast';
import react from 'react'
import ProComponent from './component';
import { insertStr } from './utils';

function pro_render({ props, html }) {
    var _pro = ProComponent
    if (!_pro) return
    let _html = html;
    if (props) {
        let propsTOjson = JSON.stringify(props);
        _html = insertStr(html, html.length - 2, `${_html.indexOf('{}') !== -1 ? '' : ','}pro_props:${propsTOjson}`)
    }

    return eval(_html)
}

/**
 * 
 * @param {*} element 
 * @param {*} list 
 * @param {*} params { attr, value ,key}
 * @param {*} callback 
 * @returns 
 */
function changeProps(
    element, list,
    {
        attr,
        value,
        key,
    }, callback = Function.prototype
) {
    const { index } = element;
    if (isNaN(index)) return showToast.message('请选择修改元素');
    const newList = JSON.parse(JSON.stringify(list));
    const copy = JSON.parse(JSON.stringify(newList[index]));
    if (!copy.props) copy.props = {};
    if (key) {
        const newProps = { ...copy.props };
        if (newProps[attr]) newProps[attr][key] = value;
        else {
            newProps[attr] = {};
            newProps[attr][key] = value;
        }
        copy.props = newProps;
    } else {
        copy.props[attr] = value;
    }


    newList[index].props = copy.props;

    /* */
    callback(newList, element);
    localStorage.setItem('jsx', JSON.stringify(newList))
}


export {
    pro_render,
    changeProps,
}