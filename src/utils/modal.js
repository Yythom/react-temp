import { Modal } from "zarm";

class showModal {
    static alert(title = '标题', msg = '提示文字内容', onCancel = Function.prototype) {
        const modal = Modal.alert({
            title: title,
            content: msg,
            onCancel: () => {
                modal.hide();
            },
        });
    }


    static confirm(title = '标题', msg = '提示文字内容', onOk) {
        Modal.confirm({
            title: title,
            content: msg,
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