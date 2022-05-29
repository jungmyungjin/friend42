const express = require("express");
const router = express.Router();
const controller = require("./controller.js");

// User Info
router.get("/api/user", controller.findAll);

// User Create
router.post("/api/user", controller.createUser);

// List Create
router.post("/api/list", controller.createList);

// Friend Create
router.post("/api/friend", controller.createFriend);

// Message Create
router.post("/api/message", controller.createMessage);

// List Change
router.put("/api/list", controller.updateList);

// Friend Move
router.put("/api/friend", controller.moveFriend);

// List Delete
router.delete("/api/list", controller.deleteList);

// Friend Delete
router.delete("/api/friend", controller.deleteFriend);

module.exports = router;
