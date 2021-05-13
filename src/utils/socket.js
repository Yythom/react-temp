/* eslint-disable no-undef */
const ws = async () => {
    // 初始化一个 WebSocket 对象
    window.socket = new WebSocket('ws://49.234.41.182:3001');

    // 建立 web socket 连接成功触发事件
    socket.onopen = function () {
        // 使用 send() 方法发送数据
        socket.send("发送数据");
    };

    // 接收服务端数据时触发事件
    socket.onmessage = function (evt) {
        console.log(evt.data);
        props.setio_on(evt.data)
    };

    // 断开 web socket 连接成功触发事件
    socket.onclose = function () {
        console.log("连接已关闭...");
    };
}

const close = () => {
    socket.close();
}
const send = (data) => {
    socket.send(data);
}

export {
    ws,
    close,
    send,
}