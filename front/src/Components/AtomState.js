import {atom} from "recoil";

export const textState = atom({
  key: "loginUser", // unique ID (with respect to other atoms/selectors)
  default: "loginUser", // default value (aka initial value)
});
