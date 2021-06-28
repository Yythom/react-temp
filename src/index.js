import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

import { ConfigProvider } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';


// ReactDOM.render(
//   <Provider store={store}>
//     <ConfigProvider locale={zhCN}>
//       <App />
//     </ConfigProvider>
//   </Provider>
//   ,
//   document.getElementById('root')
// );

ReactDOM.createRoot(document.getElementById("root")).render( // 并发渲染模式
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>
);
