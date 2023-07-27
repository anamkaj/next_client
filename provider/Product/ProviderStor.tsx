"use client";
import { store } from "@/store/Redux/configStor";
import { Provider } from "react-redux";
import React, { ReactNode } from "react";

export default function ProviderStore({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
