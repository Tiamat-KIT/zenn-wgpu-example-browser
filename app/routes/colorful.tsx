import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Triangle from "~/utils/Colorful/Triangle";
import CustomSection from "~/components/CustomSection"
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [color,setColor] = useState<number | null>(null)
  const [wasm_color,setWasmColor] = useState<number | null>(null)
  const run = async() => {
  const {  WasmFuncColorfulTriangle } = await import("~/utils/WasmFuncs")
    const start = performance.now()
    Triangle(document.getElementById("colorful") as HTMLCanvasElement)
    setColor(performance.now() - start)

    const wasm_color_start = performance.now()
    WasmFuncColorfulTriangle(document.getElementById("wasm-colorful") as HTMLCanvasElement)
    setWasmColor(performance.now() - wasm_color_start)
  }
  
  useEffect(() => {
    run()
  },[])
  return (
    <>
      <div className="flex">
        <CustomSection title="JavaScript Only" canvas_id="colorful" time={color}/>
        <CustomSection title="JavaScript and Wasm Support Func" canvas_id="wasm-colorful" time={wasm_color}/>
      </div>
    </>
  );
}
