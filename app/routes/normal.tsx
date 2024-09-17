import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import Triangle from "~/utils/SingleColor/Triangle";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const run = async() => {
  const {  WasmFuncSimpleTriangle } = await import("~/utils/WasmFuncs")
    const start = performance.now()
    Triangle(document.getElementById("normal") as HTMLCanvasElement)
    console.info(performance.now() - start + "ms","normal draw")
    
    const wasm_start = performance.now()
    WasmFuncSimpleTriangle(document.getElementById("canvas") as HTMLCanvasElement)
    console.info(performance.now() - wasm_start + "ms","wasm single draw")

    /* const wasm_color_start = performance.now()
    WasmFuncColorfulTriangle(document.getElementById("colorful") as HTMLCanvasElement)
    console.info(performance.now() - wasm_color_start + "ms","wasm colorful draw") */
  }
  
  useEffect(() => {
    run()
  },[])
  return (
    <div>
        <canvas id="normal" />
        <canvas id="canvas" />
    </div>
  );
}
