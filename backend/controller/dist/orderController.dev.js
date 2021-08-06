"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOrderItems = void 0;

var _orderModel = _interopRequireDefault(require("../models/orderModel.js"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addOrderItems = (0, _expressAsyncHandler["default"])(function _callee(req, res) {
  var _req$body, orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice, order, createdOrder;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, orderItems = _req$body.orderItems, shippingAddress = _req$body.shippingAddress, paymentMethod = _req$body.paymentMethod, itemsPrice = _req$body.itemsPrice, taxPrice = _req$body.taxPrice, shippingPrice = _req$body.shippingPrice, totalPrice = _req$body.totalPrice;

          if (!(orderItems && orderItem.length === 0)) {
            _context.next = 7;
            break;
          }

          res.status(400);
          throw new Error("No order Items");

        case 7:
          order = new _orderModel["default"]({
            orderItems: orderItems,
            user: req.user._id,
            shippingAddress: shippingAddress,
            paymentMethod: paymentMethod,
            itemsPrice: itemsPrice,
            taxPrice: taxPrice,
            shippingPrice: shippingPrice,
            totalPrice: totalPrice
          });
          _context.next = 10;
          return regeneratorRuntime.awrap(order.save());

        case 10:
          createdOrder = _context.sent;
          res.status(201).json(createdOrder);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.addOrderItems = addOrderItems;