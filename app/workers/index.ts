import {WasmFuncWorkerSimpleTriangle,WasmFuncWorkerColorfulTriangle} from "~/utils/WasmFuncs"

export function single(canvas: OffscreenCanvas) {
    WasmFuncWorkerSimpleTriangle(canvas)
}
    
export function colorful(canvas: OffscreenCanvas) {
    WasmFuncWorkerColorfulTriangle(canvas)
}   
export interface GraphicsWorker {
    single: typeof single
    colorful: typeof colorful
}
