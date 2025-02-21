import { Dispatch } from "./dispatch";

import { localStore } from "@utils/redux/createStore";

import { ApiActionStatus, ApiActionType } from "@reducers/index";
import { AxiosError } from "axios";

const { dispatch } = localStore;

const actionCreator = async function <T>(
  key: string,
  actionDispatcher: (d: Dispatch) => Promise<T>
): Promise<T | undefined> {
  dispatch({
    type: ApiActionType.STATUS_UPDATE,
    payload: { [key]: ApiActionStatus.REQUEST },
  });

  try {
    const result = await actionDispatcher(dispatch);

    dispatch({
      type: ApiActionType.STATUS_UPDATE,
      payload: { [key]: ApiActionStatus.SUCCESS },
    });
    return result;
  } catch (e) {
    dispatch({
      type: ApiActionType.STATUS_UPDATE,
      payload: { [key]: ApiActionStatus.ERROR },
    });
    return (e as AxiosError<T>).response?.data;
  }
};

export default actionCreator;
