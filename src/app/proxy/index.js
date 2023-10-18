// const express = require("express");
// const app = express();
// const cors = require("cors");
// const { createProxyMiddleware } = require("http-proxy-middleware");

// app.use(cors());

// const proxyOptions = {
//   target: "https://swdprojectapi.azurewebsites.net",
//   changeOrigin: true,
//   secure: false,
// };

// app.use("/api", createProxyMiddleware(proxyOptions));

// app.listen(4200, () => {
//   console.log("Proxy started");
// });

// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();
// const port = 4200;

// // Tạo một middleware proxy cho đường dẫn bạn muốn gọi API từ đó
// const apiProxy = createProxyMiddleware('/', {
//   target: 'https://swdprojectapi.azurewebsites.net',
//   changeOrigin: true,
//   secure: false,
// });

// app.use('/', apiProxy);

// // Thiết lập server nghe cổng 3000
// app.listen(port, () => {
//   console.log(port)
// });
