"use strict";

var _express = _interopRequireDefault(require("express"));

var _products = _interopRequireDefault(require("./data/products.js"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _colors = _interopRequireDefault(require("colors"));

var _db = _interopRequireDefault(require("./config/db.js"));

var _productRoutes = _interopRequireDefault(require("./routes/productRoutes.js"));

var _userRouters = _interopRequireDefault(require("./routes/userRouters.js"));

var _orderRoutes = _interopRequireDefault(require("./routes/orderRoutes.js"));

var _errorMiddleware = require("./middleware/errorMiddleware.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

(0, _db["default"])();
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.get("/", function (req, res) {
  res.send("API is running");
});
app.use("/api/products", _productRoutes["default"]);
app.use("/api/users", _userRouters["default"]);
app.use("/api/orders", _orderRoutes["default"]);
app.use(_errorMiddleware.notFound);
app.use(_errorMiddleware.errorHandler);
var PORT = process.env.PORT || 5000;
var Environment = process.env.NODE_ENV || 5000;
app.listen(PORT, console.log("Server Running in ".concat(Environment, " mode on Port ").concat(PORT).yellow.bold));