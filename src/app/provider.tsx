"use client";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
      <SessionProvider>{children}</SessionProvider>
    </RecoilRoot>
  );
}
