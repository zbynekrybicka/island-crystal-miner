import { selector } from "recoil";

import getVerifyEmailAction from '../actions/getVerifyEmailAction'

export default selector({
    key: "verifyEmailSelector",
    get: ({ get }) => false
})