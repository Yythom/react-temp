import { ActivityIndicator, Icon, Loading, Toast } from "zarm";

class showToast {
    static message(msg = ' ', type = 'none', date = 2000, mask) {
        Toast.hide();
        switch (type) {
            case 'none':
                Toast.show({
                    content: msg,
                    mask,
                    stayTime: date
                });
                break;
            case 'success':
                Toast.show({
                    content: <div className="Toastbox">
                        <Icon className="box-icon" type="right" />
                        <div className="box-text">{msg}</div>
                    </div>,
                    mask,
                    stayTime: date
                });
                break;
            case 'error':
                Toast.show({
                    content: <div className="Toastbox">
                        <Icon className="box-icon" type="wrong" />
                        <div className="box-text">{msg}</div>
                    </div>,
                    mask,
                    stayTime: date
                });
                break;
            default:
                break;
        }
    }
}

function showLoading(msg = '', stayTime = 30000) {
    Loading.hide();
    setTimeout(() => {
        Loading.show({
            content: <div className='loadingBox'>
                <ActivityIndicator />
                <div className="box-text">{msg}</div>
            </div>,
            stayTime: stayTime,
        });
    }, 10);
    // size="lg"
}

function hideLoading() {
    Loading.hide();
}
function hideToast() {
    Toast.hide();
}

export {
    showToast,
    showLoading,
    hideLoading,
    hideToast,
}