
import { AnyAction } from "redux";
import * as types from "./types";

const setting: types.GlobalModelState = {
  namespace: "setting",
  state: {
    userInfo: {},
  },

  // 修改 state 中的数据
  reducers: {
    setUserInfo(state, { data }) {
      console.log(data);
      return {
        ...state,
        userInfo: data.userInfo,
      };
    },
  },






  // 异步操作后修改 state 中的数据
  // effects: {
  //   *changeName({ payload }, { put, call }) {
  //     // call 触发异步
  //     // let data = yield call("/api", payload);

  //     // put 触发 action
  //     yield put({
  //       type: "saveName",
  //       data: {
  //         name: "异步修改的",
  //       },
  //     });
  //     yield console.log("run");
  //   },
  // },

  // 不支持
  // subscriptions: {
  //     subscription({dispatch,history}){

  //         history.listen((location)=>{
  //             console.log("监听",location)
  //         })
  //     }
  // }
};

export default setting;
