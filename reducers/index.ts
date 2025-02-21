import { combineReducers } from "redux";
import createReducer from "@utils/redux/createReducer";

export enum ApiActionType {
  STATUS_UPDATE = "STATUS_UPDATE",
}

export enum ApiActionStatus {
  REQUEST = "request",
  SUCCESS = "success",
  ERROR = "error",
}

export interface StatusState {
  [key: string]: ApiActionStatus | null;
}

const statusReducer = createReducer<StatusState>(
  {},
  {
    [ApiActionType.STATUS_UPDATE](state: StatusState, payload: unknown) {
      return {
        ...state,
        ...(payload as StatusState),
      };
    },
  }
);

export default combineReducers({
  apiStatus: statusReducer,
});
