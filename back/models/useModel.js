const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  listName: { type: String, default: "friends" },
  friends: { type: Array },
});

const friendSChema = mongoose.Schema({
  id: {
    type: String,
    required: [true, "Please add a id value"],
  },
  name: {
    type: String,
    required: [true, "Please add a name value"],
  },
  subName: {
    type: String,
  },
  message: {
    type: Array, // [ ~가 친구로 등록하였습니다, 20개 제한 ]
  },
  friends: {
    type: [listSchema], // { listName: $목록 이름, list: [ jaewpark, ...인트라 아이디 ] }
    default: [{ listName: "친구", friends: [] }],
  },
});

module.exports = mongoose.model("Friend42", friendSChema);
// module.exports = mongoose.model("List42", listSchema);
