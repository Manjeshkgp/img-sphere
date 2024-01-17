import dynamic from "next/dynamic";
const Background = dynamic(() => import("./components/Background"));

export default function page() {
  return (<>
      <Background />
  </>);
}
