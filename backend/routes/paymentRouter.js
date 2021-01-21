const express = require('express');
const router = express.Router()
const { getPayments,createPayment,sold } = require("../controllers/paymentController");
const auth = require("../middlewares/isAuth")
const authAdmin = require("../middlewares/authAdmin")


router.route('/payment')
router.get(auth, authAdmin, getPayments)
router.post(auth, createPayment)


module.exports = router