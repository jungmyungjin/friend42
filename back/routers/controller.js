const Friend42 = require("../models/useModel");

const asyncHandler = require("express-async-handler");

// @desc    Get User Info
// @route   GET /api/user
// @access  Private
const findAll = asyncHandler(async (req, res) => {
  const userInfo = await Friend42.findOne({ id: req.body.id });
  res.send(userInfo);
});

// @desc    Create User
// @route   POST /api/user
// @access  Private
const createUser = asyncHandler(async (req, res) => {
  if (!req.body.id) {
    res.status(400);
    throw new Error("Please add a User Id");
  }
  const user = await Friend42.create({
    id: req.body.id,
    name: req.body.name,
  });
  res.status(200).json(user);
});

// @desc    Create List of friends
// @route   POST /api/list
// @access  Private
const createList = asyncHandler(async (req, res) => {
  if (!req.body.id) {
    res.status(400);
    throw new Error("Please add a User Id");
  }
  if (!req.body.list) {
    res.status(400);
    throw new Error("Please add a List Name");
  }
  const user = await Friend42.findOne({ id: req.body.id });
  const newList = { list: req.body.list };
  user.friends.push(newList);
  user.save();
  res.status(200).json(user);
});

// @desc    Create friend
// @route   POST /api/friend
// @access  Private
const createFriend = asyncHandler(async (req, res) => {
  if (!req.body.friendName) {
    res.status(400);
    throw new Error("friend not found");
  }
  const user = await Friend42.findOne({ id: req.body.id });
  user.friends
    .find((item) => item.list === req.body.list)
    .friends.push(req.body.friendName);
  user.save();
  res.status(200).json(user);
});

// @desc    Add message
// @route   POST /api/message
// @access  Private
const createMessage = asyncHandler(async (req, res) => {
  const user = await Friend42.findOne({ id: req.body.id });
  user.message.push(req.body.message);
  user.save();
  res.status(200).json(user);
});

// @desc    Change list Name
// @route   PUT /api/list
// @access  Private
const updateList = asyncHandler(async (req, res) => {
  const user = await Friend42.findOne({ id: req.body.id });
  user.friends.find((item) => {
    if (item.list === req.body.list) item.list = req.body.newList;
  });
  user.save();
  res.status(200).json(user);
});

// @desc    Delete list
// @route   DELETE /api/list
// @access  Private
const deleteList = asyncHandler(async (req, res) => {
  const user = await Friend42.findOne({ id: req.body.id });
  user.friends = user.friends.filter((item) => item.list !== req.body.list);
  user.save();
  res.status(200).json(user);
});

// @desc    Delete friend
// @route   DELETE /api/friend
// @access  Private
const deleteFriend = asyncHandler(async (req, res) => {
  const user = await Friend42.findOne({ id: req.body.id });
  const list = user.friends.find((item) => item.list === req.body.list);
  list.friends = list.friends.filter(
    (friend) => friend !== req.body.friendName
  );
  user.save();
  res.status(200).json(user);
});

module.exports = {
  findAll,
  createUser,
  createList,
  createFriend,
  createMessage,
  updateList,
  deleteList,
  deleteFriend,
};
