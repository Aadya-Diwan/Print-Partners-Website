const express = require("express");
const router = express.Router();
const multer = require("multer");
const Order = require("../models/Order");
const jwt = require("jsonwebtoken");

const SECRET = "mysecretkey";

/* ✅ VERIFY TOKEN */
function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).json({ message: "No token" });
    }

    const token = authHeader.split(" ")[1];

    try {
        jwt.verify(token, SECRET);
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

/* ✅ MULTER STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

/* ✅ CREATE ORDER (NO TOKEN REQUIRED) */
router.post("/", upload.single("file"), async (req, res) => {
    try {

        const order = new Order({
            name: req.body.name,
            contact: req.body.contact,
            service: req.body.service,
            specification: req.body.specification,
            instructions: req.body.instructions,
            deadline: req.body.deadline,
            file: req.file ? req.file.filename : "",
            status: "Ongoing"
        });

        await order.save();

        res.json(order);

    } catch (err) {
        res.status(500).json({ message: "Error creating order" });
    }
});

/* ✅ GET ALL ORDERS (PROTECTED) */
router.get("/", verifyToken, async (req, res) => {
    try {

        const orders = await Order.find().sort({ createdAt: -1 });

        res.json(orders);

    } catch (err) {
        res.status(500).json({ message: "Error fetching orders" });
    }
});

/* ✅ MARK AS COMPLETED (PROTECTED) */
router.put("/:id", verifyToken, async (req, res) => {
    try {

        await Order.findByIdAndUpdate(req.params.id, {
            status: "Completed"
        });

        res.json({ message: "Order Completed" });

    } catch (err) {
        res.status(500).json({ message: "Error updating order" });
    }
});

/* ✅ DELETE ORDER (PROTECTED) */
router.delete("/:id", verifyToken, async (req, res) => {
    try {

        await Order.findByIdAndDelete(req.params.id);

        res.json({ message: "Order Deleted" });

    } catch (err) {
        res.status(500).json({ message: "Error deleting order" });
    }
});

module.exports = router;