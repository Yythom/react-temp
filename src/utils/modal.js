import { Modal } from "zarm";


class showModal {
    /**
       * @param {String} title String
       * @param {Object} content Jsx
       * @param {Function} onCancel Function
    */
    static alert(title = '标题', content = '提示文字内容', onCancel = Function.prototype) {
        const modal = Modal.alert({
            title: title,
            content,
            onCancel: () => {
                modal.hide();
            },
        });
    }

    /**
       * @param {String} title String
       * @param {Object} content Jsx
       * @param {Function} onCancel Function
    */
    static confirm(title = '标题', content = '提示文字内容', onOk) {
        Modal.confirm({
            title: title,
            content,
            onCancel: () => {

            },
            onOk: () => {
                console.log('点击ok');
                if (typeof onOk === 'function') {
                    onOk();
                }
            },
        });
    }
}

export default showModal