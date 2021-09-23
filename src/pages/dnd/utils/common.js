import { showToast } from '@/utils/Toast';
import ProComponent from '../component/component';
// eslint-disable-next-line no-unused-vars
import { insertStr } from './utils';


function pro_render({ type, props, }) {
    var _pro = ProComponent
    if (!_pro) return
    if (ProComponent[type]) {
        const Component = ProComponent[type]
        return <Component pro_props={props} />
    } else {
        return '组件未支持'
    }
}

/**
 * 
 * @param {*} element 
 * @param {*} listJson 
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

    if (!copy.props) copy.props = {}; // 如果不存在props属性 创建默认属性

    if (key) {
        const newProps = { ...copy.props };
        if (newProps[attr]) {
            if (Array.isArray(newProps[attr])) {
                const newArray = [...newProps[attr], value];
                newProps[attr] = newArray
            } else {
                newProps[attr][key] = value;
            }
        } else {
            newProps[attr] = {}; // 如果不存在当前属性 创建默认属性对象
            newProps[attr][key] = value;
        }
        copy.props = newProps;
    } else {
        // 如果不存在属性key值 默认给props赋值基础数据类型
        copy.props[attr] = value;
    }
    newList[index].props = copy.props;

    /* */
    callback(newList, element);
}


export {
    pro_render,
    changeProps,
}