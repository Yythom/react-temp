function sortConfig(callBack = Function.prototype, failCallBack = Function.prototype) {
    let sort_config = {
        // disabled: false, // 如果设置为 true 禁用
        group: "nested",  // or { name: "...", pull: [true, false, 'clone', array], put: [true, false, array] }
        sort: true, // 在列表中排序
        delay: 0, // 定义何时开始排序的时间（以毫秒为单位）
        delayOnTouchOnly: false, // 仅在用户使用触摸时延迟
        touchStartThreshold: 0,  // px，多少像素该点应该在取消延迟拖动事件之前移动
        animation: 150,  // ms, 排序时移动项目的动画速度, `0` — 没有动画
        filter: ".ignore-elements",  // 不会导致拖动的选择器（字符串或函数）
        // preventOnFilter: true, // 触发 `filter` 时调用 `event.preventDefault()` 
        draggable: ".item",   // 指定元素内的哪些项应该是可拖动的
        invertSwap: false, //  使用倒置交换区设置为true 
        direction: 'horizontal', // 拖拽方向 (默认情况下会自动判断方向) vertical

        fallbackOnBody: false,  // 将cloned DOM 元素挂到body元素上。
        fallbackTolerance: 0, // 以像素为单位指定鼠标应移动多远在它被视为拖累之前。
        dragoverBubble: false,
        removeCloneOnHide: true, // 当克隆元素不显示时移除，而不是仅仅隐藏它
        // ghostClass: "sortable-ghost",  // 放置占位符的类名
        // chosenClass: "sortable-chosen",   // 选中项的类名
        // dragClass: "sortable-drag",  // 拖动项的类名


        // setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
        //     dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
        // },

        // 元素被选中
        onChoose: function (/**Event*/evt) {
            // evt.oldIndex;  // element index within parent
            console.log(evt);
        },

        // 元素未被选中的时候（从选中到未选中）
        onUnchoose: function (/**Event*/evt) {
            // same properties as onEnd
        },

        // 结束拖拽
        onEnd: function (/**Event*/evt) {
            var itemEl = evt.item;  // dragged HTMLElement
            // evt.to;    // target list
            // evt.from;  // previous list
            // evt.oldIndex;  // element's old index within old parent
            // evt.newIndex;  // element's new index within new parent
            // evt.clone // the clone element
            // evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
            console.log(evt);
        },

        // 元素从一个列表拖拽到另一个列表
        onAdd: function (/**Event*/evt) {
            // same properties as onEnd
        },

        // 列表内元素顺序更新的时候触发
        onUpdate: function (/**Event*/evt) {
            // same properties as onEnd
        },

        // 列表的任何更改都会触发
        onSort: function (/**Event*/evt) {
            // same properties as onEnd
        },

        // 元素从列表中移除进入另一个列表
        onRemove: function (/**Event*/evt) {
            // same properties as onEnd
        },

        // 试图拖拽一个filtered的元素
        onFilter: function (/**Event*/evt) {
            var itemEl = evt.item;  // HTMLElement receiving the `mousedown|tapstart` event.
            failCallBack(evt)
        },

        // 拖拽移动的时候
        // onMove: function (/**Event*/evt, /**Event*/originalEvent) {
        //     // Example: https://jsbin.com/nawahef/edit?js,output
        //     evt.dragged; // dragged HTMLElement
        //     evt.draggedRect; // DOMRect {left, top, right, bottom}
        //     evt.related; // HTMLElement on which have guided
        //     evt.relatedRect; // DOMRect
        //     evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
        //     originalEvent.clientY; // mouse position
        //     // return false; — for cancel
        //     // return -1; — insert before target
        //     // return 1; — insert after target
        // },

        // clone一个元素的时候触发
        onClone: function (/**Event*/evt) {
            var origEl = evt.item;
            var cloneEl = evt.clone;
        },

        /**
         * 拖拽元素改变位置的时候
         * @param {*} Event 
         */
        onChange: function (e) {
            callBack(e)
        }
    }
    return sort_config
}

export default sortConfig