const express = require("express");
const router = express.Router();
const controller = require("./controller.js");
const passport = require("passport");
// const loginRouter = require("./login.js");

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

// login
router.get("/42", passport.authenticate("42"));
router.get(
  "/42/return",
  passport.authenticate("42", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/");
  }
);
router.get("/logout", function (req, res) {
  req.logout();
  res, redirect("/");
});

module.exports = router;
