// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setLoading } from "./features/login/loginSlice";

// const Checkout = () => {
//     const dispatch = useDispatch();
//     const isLoggedIn = useSelector((state) => state.login.isLoading); // Đây là ví dụ, bạn cần kiểm tra trạng thái đăng nhập thực tế của ứng dụng.
//     const [isPaid, setIsPaid] = useState(false);

//     const handleCheckout = () => {
//         if (isLoggedIn) {
//             // Thực hiện thanh toán PayPal ở đây.
//             // Sử dụng PayPal SDK hoặc thư viện khác để thực hiện thanh toán.
//             // Sau khi thanh toán hoàn tất, bạn có thể cập nhật trạng thái thanh toán.
//             // Đồng thời, bạn cũng cần cập nhật trạng thái giỏ hàng và xóa các mục đã chọn (tùy thuộc vào yêu cầu của bạn).
//             setIsPaid(true);
//         } else {
//             // Hiển thị thông báo Toast cho người dùng chưa đăng nhập.
//             dispatch(setLoading());
//         }
//     };

//     return (
//         <div>
//             <h1>Checkout</h1>
//             {isPaid ? (
//                 <p>Thanh toán thành công! Cảm ơn bạn.</p>
//             ) : (
//                 <div>
//                     {isLoggedIn ? (
//                         <button onClick={handleCheckout}>Checkout with PayPal</button>
//                     ) : (
//                         <p>Vui lòng đăng nhập trước khi thanh toán.</p>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Checkout;
