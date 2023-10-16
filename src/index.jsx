import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; // Import createStore từ Redux

// Định nghĩa reducer và initialState (để minh họa)
const initialState = { /* ... initial state ... */ };
const reducer = (state, action) => {
    // Xử lý action và cập nhật state
    return state;
};

const store = createStore(reducer, initialState); // Tạo Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}> {/* Chuyển store vào Provider */}
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

// Nếu bạn muốn sử dụng `reportWebVitals`, hãy đảm bảo bạn đã import và sử dụng nó ở đây.
