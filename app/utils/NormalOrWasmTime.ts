export default function NormalOrWasmTime(normal: number | null, wasm: number | null){
    if(normal === null || wasm === null){
        return "計測中"
    }else {
    if(normal >= wasm) {
        return `WebAssemblyを使った方が早く、${normal - wasm}msの高速化が実現`
    }else {
        return `JavaScriptのみを使った方が早く、${wasm - normal}ms速い`
    }
    }
}