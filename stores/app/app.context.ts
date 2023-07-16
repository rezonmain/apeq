import { Dispatch, createContext, useContext } from "react";
import { AppStore, AppStoreAction, defaultAppStore } from "./app.store";

export type AppContext = {
  dispatch: Dispatch<AppStoreAction>;
} & AppStore;

export const AppContext = createContext<AppContext>({
  ...defaultAppStore,
  dispatch: () => {},
});

export const useAppStore = (): AppContext => useContext(AppContext);
