import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Triangle from "~/utils/Colorful/Triangle";

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
        <section>
          <h3>
            JavaScript Only
          </h3>
          <canvas id="colorful" />
          <p>
            {color !== null && `rendering time ${color}ms`}
          </p>
        </section>
        <section>
          <h3>
            JavaScript and Wasm Support Func
          </h3>
          <canvas id="wasm-colorful" />
          <p>
            {wasm_color !== null && `rendering time ${wasm_color}ms`}
          </p>
        </section>
      </div>
    </>
  );
}
