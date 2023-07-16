import { AppStore, AppStoreAction } from "./app.store";

const appReducer = (state: AppStore, action: AppStoreAction): AppStore => {
  switch (action?.type) {
    case "uid":
      return { ...state, uid: action.value };
    default:
      return state;
  }
};

export { appReducer };
