
const one_data = [
    { value: '1', label: '选项一' },
    { value: '2', label: '选项二' },
    { value: '3', label: '选项三' },
    { value: '4', label: '选项四' },
    { value: '5', label: '选项五' },
];

// 普通多列数据
const more_data = [
    [
        { value: '1', label: '选项一' },
        { value: '2', label: '选项二' },
    ],
    [
        { value: '3', label: '选项A' },
        { value: '4', label: '选项B' },
    ],
];

// 级联数据
const CASCADE_DATA = [
    {
        value: '1',
        label: '北京市',
        children: [
            { value: '11', label: '海淀区' },
            { value: '12', label: '西城区' },
        ],
    },
    {
        value: '2',
        label: '上海市',
        children: [
            { value: '21', label: '杨浦区' },
            { value: '22', label: '静安区' },
        ],
    },
];

// 自定义
const DIY_DATA = [
    {
        code: '1',
        name: '北京市',
        children: [
            { code: '11', name: '海淀区' },
            { code: '12', name: '西城区' },
        ],
    },
    {
        code: '2',
        name: '上海市',
        children: [
            { code: '21', name: '黄埔区' },
            { code: '22', name: '虹口区' },
        ],
    },
];

export {
    one_data,
    DIY_DATA
}