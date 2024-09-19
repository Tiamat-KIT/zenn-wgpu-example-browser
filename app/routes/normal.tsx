import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Triangle from "~/utils/SingleColor/Triangle";
import CustomSection from "~/components/CustomSection"
import NormalOrWasmTime from "~/utils/NormalOrWasmTime";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  const [normal,setNormal] = useState<number | null>(null)
  const [wasm_normal,setWasmNormal] = useState<number | null>(null)
  const run = async() => {
  const {  WasmFuncSimpleTriangle } = await import("~/utils/WasmFuncs")
    const start = performance.now()
    Triangle(document.getElementById("normal") as HTMLCanvasElement)
    setNormal(performance.now() - start )
    
    const wasm_start = performance.now()
    WasmFuncSimpleTriangle(document.getElementById("canvas") as HTMLCanvasElement)
    setWasmNormal(performance.now() - wasm_start)
  }
  
  useEffect(() => {
    run()
  },[])
  return (
    <>
      <div className="flex">
        <CustomSection title="JavaScript Only" canvas_id="normal" time={normal}/>
        <CustomSection title="JavaScript and Wasm Support Func" canvas_id="canvas" time={wasm_normal}/>
      </div>
      {wasm_normal !== 0 ? <p>{NormalOrWasmTime(normal,wasm_normal)}</p> : <p>Wasm側の数値が0になっているため計測ができませんでした</p>}
    </>
  );
}
