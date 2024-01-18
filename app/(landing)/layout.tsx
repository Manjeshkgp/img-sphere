import { ReactNode } from "react";
import dynamic from "next/dynamic";

const Background = dynamic(()=>import("./components/Background"));

export default function Layout({ children }: { children: ReactNode }) {
  return (<>
  <Background/>
  {children}</>);
}
