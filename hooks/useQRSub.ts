"use client";
import { ActionOf } from "@/types/ActionOf";
import Pusher from "pusher-js";
import { useEffect, useReducer } from "react";

interface useQRAuthProps {
  token: string;
}

type useQRAuthState = {
  isAuthenticated: boolean;
  user: string;
};

const initUseQRAuthState: useQRAuthState = {
  isAuthenticated: false,
  user: "",
};

const useQRSub = ({ token }: useQRAuthProps) => {
  const [state, dispatch] = useReducer(QRStateReducer, initUseQRAuthState);

  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY ?? "", {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER ?? "us3",
    });
    const channel = pusher.subscribe(`client-private-${token}`);
    channel.bind("successful-auth", (data: string) => {
      console.log(data);
      dispatch({ type: "isAuthenticated", value: true });
    });

    return () => pusher.unsubscribe(`client-private-${token}`);
  }, [token]);

  return state;
};

const QRStateReducer = (
  state: useQRAuthState,
  action: ActionOf<useQRAuthState>
) => {
  switch (action.type) {
    case "isAuthenticated":
      return {
        ...state,
        isAuthenticated: action.value,
      };
    case "user":
      return {
        ...state,
        user: action.value,
      };
    default:
      return state;
  }
};

export { useQRSub };
