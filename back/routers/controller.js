const Friend42 = require("../models/useModel");

const asyncHandler = require("express-async-handler");

const errorCode = Object.freeze({
  nonexistentUser: "Please enter a valid id", // 0
  nonexistentId: "Please add a User Id", // 1
  nonexistentIdAndList: "Please add a User Id or List Name", // 2
  nonexistentFriend: "Please add a Friend", // 3
  nonexistentMessage: "Please add a Message", // 4
  existentValue: "is already exists", // 5
});

const errorPush = (res, errorNum, location) => {
  var msg;
  res.status(400);
  if (errorNum === 0) msg = errorCode.nonexistentUser;
  if (errorNum === 1) msg = errorCode.nonexistentId;
  if (errorNum === 2) msg = errorCode.nonexistentIdAndList;
  if (errorNum === 3) msg = errorCode.nonexistentFriend;
  if (errorNum === 4) msg = errorCode.nonexistentMessage;
  if (errorNum === 5) msg = `${location} ${errorCode.existentValue}`;
  throw new Error(msg);
};

// @desc    Get User Info
// @route   GET /api/user
// @access  Private
// Necessary factor : userId
const findAll = asyncHandler(async (req, res) => {
  if (!req.body.id) errorPush(res, 1);
  const user = await Friend42.findOne({ id: req.body.id });
  if (!user) errorPush(res, 0);
  res.send(user);
});

// @desc    Create User
// @route   POST /api/user
// @access  Private
// Necessary factor : userId
const createUser = asyncHandler(async (req, res) => {
  if (!req.body.id) errorPush(res, 1);
  const user = await Friend42.create({
    id: req.body.id,
    name: req.body.name,
  });
  res.status(200).json(user);
});

// @desc    Create List of friends
// @route   POST /api/list
// @access  Private
// Necessary factor : userId, listName
const createList = asyncHandler(async (req, res) => {
  if (!req.body.id || !req.body.list) errorPush(res, 2);
  const user = await Friend42.findOne({ id: req.body.id });
  if (!user) errorPush(res, 0);
  user.friends.find((item) => {
    if (item.listName === req.body.list) errorPush(res, 5, req.body.list);
  });
  const newList = { listName: req.body.list };
  user.friends.push(newList);
  user.save();
  res.status(200).json(user);
});

// @desc    Create friend
// @route   POST /api/friend
// @access  Private
// Necessary factor : userId, friend
const createFriend = asyncHandler(async (req, res) => {
  if (!req.body.id) errorPush(res, 1);
  const user = await Friend42.findOne({ id: req.body.id });
  if (!user) errorPush(res, 0);
  user.friends.map((list) => {
    list.friends.find((friend) => {
      if (friend === req.body.friend) errorPush(res, 5, req.body.friend);
    });
  });
  user.friends
    .find((item) => item.listName === "친구")
    .friends.push(req.body.friend);
  user.save();
  res.status(200).json(user);
});

// @desc    Add message
// @route   POST /api/message
// @access  Private
// Necessary factor : userId
const createMessage = asyncHandler(async (req, res) => {
  if (!req.body.id) errorPush(res, 1);
  const user = await Friend42.findOne({ id: req.body.id });
  if (!user) errorPush(res, 0);
  user.message.push(req.body.message);
  user.save();
  res.status(200).json(user);
});

// @desc    Change list Name
// @route   PUT /api/list
// @access  Private
// Necessary factor : userId, list, newList
const updateList = asyncHandler(async (req, res) => {
  if (!req.body.id || !req.body.list || !req.body.newList) errorPush(res, 2);
  const user = await Friend42.findOne({ id: req.body.id });
  if (!user) errorPush(res, 0);
  user.friends.find((item) => {
    if (item.listName === req.body.list) item.listName = req.body.newList;
  });
  user.save();
  res.status(200).json(user);
});

// @desc    Move friend to another List
// @route   PUT /api/friend
// @access  Private
// Necessary factor : userId, friend, list, newList
const moveFriend = asyncHandler(async (req, res) => {
  if (!req.body.id || !req.body.list || !req.body.newList) errorPush(res, 2);
  if (!req.body.friend) errorPush(res, 3);
  const user = await Friend42.findOne({ id: req.body.id });
  if (!user) errorPush(res, 0);
  user.friends
    .find((item) => item.listName === req.body.newList)
    .friends.push(req.body.friend);
  user.save();
  const list = user.friends.find((item) => item.listName === req.body.list);
  list.friends = list.friends.filter((friend) => friend !== req.body.friend);
  user.save();
  res.status(200).json(user);
});

// @desc    Delete list
// @route   DELETE /api/list
// @access  Private
// Necessary factor : userId, list
const deleteList = asyncHandler(async (req, res) => {
  if (!req.body.id || !req.body.list) errorPush(res, 2);
  const user = await Friend42.findOne({ id: req.body.id });
  if (!user) errorPush(res, 0);
  user.friends = user.friends.filter((item) => item.listName !== req.body.list);
  user.save();
  res.status(200).json(user);
});

// @desc    Delete friend
// @route   DELETE /api/friend
// @access  Private
// Necessary factor : userId, friend, list
const deleteFriend = asyncHandler(async (req, res) => {
  if (!req.body.id || !req.body.list) errorPush(res, 2);
  if (!req.body.friend) errorPush(res, 3);
  const user = await Friend42.findOne({ id: req.body.id });
  if (!user) errorPush(res, 0);
  const list = user.friends.find((item) => item.listName === req.body.list);
  list.friends = list.friends.filter((friend) => friend !== req.body.friend);
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
  moveFriend,
  deleteList,
  deleteFriend,
};
