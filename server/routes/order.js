const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById, pushOrderInPurchaseList } = require("../controllers/user");
const { updateStock } = require("../controllers/product");
const {updateStatus, createOrder, getAllOrders} = require('../controllers/order')
const {
  getOrderById,
  createOrder,
  getAllOrders,
  getOrderStatus,
  updateStatus,
} = require("../controllers/order");

//params
router.param("userId", getUserById);
router.param("orderId", getOrderById);

//Actual routes
//create
router.post(
  "/order/create/:userId",

  pushOrderInPurchaseList,
  updateStock,
  createOrder
);
//read
router.get(
  "/order/all/:userId",
  
  isAdmin,
  getAllOrders
);

//status of order
router.get(
  "/order/status/:userId",
  
  isAuthenticated,
 
  getOrderStatus
);
router.put(
  "/order/:orderId/status/:userId",
 
  isAdmin,
  updateStatus
);

module.exports = router;
