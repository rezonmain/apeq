import { useReducer } from "react";
import { AppStore, defaultAppStore } from "./app.store";
import { appReducer } from "./app.reducer";
import { AppContext } from "./app.context";

export default function AppProvider({
  children,
  value = defaultAppStore,
}: {
  children: React.ReactNode;
  value?: AppStore;
}) {
  const [init, dispatch] = useReducer(appReducer, value);
  return (
    <AppContext.Provider value={{ ...init, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
