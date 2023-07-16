import { ActionOf } from "@/types/ActionOf";
import { z } from "zod";

export const AppStoreLocalStorageKey = "appStore";
export const appStoreSchema = z.object({
  uid: z.string().optional(),
});
export const defaultAppStore: AppStore = {
  uid: undefined,
};
export type AppStore = z.infer<typeof appStoreSchema>;
export type AppStoreAction = ActionOf<AppStore>;
