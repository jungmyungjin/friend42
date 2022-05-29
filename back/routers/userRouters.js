const express = require("express");
const router = express.Router();
const controller = require("./controller.js");

// User Info
router.get("/api/user", controller.findAll);

// User Create
router.post("/api/user", controller.createUser);

// List Create
router.post("/api/list", controller.createList);

// Message Create
router.post("/api/message", controller.createMessage);

// Friend Create
router.post("/api/friend", controller.createFriend);

// List Change
router.put("/api/list", controller.updateList);

// List Delete
router.delete("/api/list", controller.deleteList);

// Friend Delete
router.delete("/api/friend", controller.deleteFriend);

module.exports = router;
