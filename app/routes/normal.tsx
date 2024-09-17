import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Triangle from "~/utils/SingleColor/Triangle";

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
        <section>
          <h3>
            JavaScript Only
          </h3>
          <canvas id="normal" />
          <p>
            {normal !== null && `rendering time ${normal}ms`}
          </p>
        </section>
        <section>
          <h3>
            JavaScript and Wasm Support Func
          </h3>
          <canvas id="canvas" />
          <p>
            {wasm_normal !== null && `rendering time ${wasm_normal}ms`}
          </p>
        </section>
      </div>
    </>
  );
}
