import VertexShader from "./vertex.wgsl?raw"
import FragmentShader from "./fragment.wgsl?raw"

export default async function Triangle(canvas: HTMLCanvasElement) {
    const adapter = await navigator.gpu.requestAdapter()
    if(!adapter) {
        throw new Error("Adapter Error")
    }
    const device = await adapter.requestDevice()
    if(!device){
        throw new Error("GPU Device Error")
    }
    const context = canvas.getContext("webgpu")
    if(!context) {
        throw new Error("GPU Context Error")
    }
    const format = navigator.gpu.getPreferredCanvasFormat()
    context.configure({
        device,
        format
    })

    const presentationFormat = navigator.gpu.getPreferredCanvasFormat()
    context.configure({
        device,
        format: presentationFormat,
    })

    const module = device.createShaderModule({
        label: "JavaScript Triangle Shader Module",
        code: `${VertexShader}\n${FragmentShader}`
    })

    const pipeline = device.createRenderPipeline({
        label: "JavaScript Triangle Pipeline",
        layout: "auto",
        vertex: {
            module,
            entryPoint: "vs_main",
        },
        fragment: {
            module,
            entryPoint: "fs_main",
            targets: [{
                format: presentationFormat
            }]
        }
    })

    const renderPassDescriptor: GPURenderPassDescriptor = {
        label: "JavaScript Triangle Render Pass Descriptor",
        colorAttachments: [{
            view: context.getCurrentTexture().createView(),
            clearValue: [0.3, 0.3, 0.3, 1.0],
            loadOp: "clear",
            storeOp: "store",
        },] as Iterable<GPURenderPassColorAttachment>,
    }

    function render(device: GPUDevice,renderPassDescriptor: GPURenderPassDescriptor) {
        const commandEncoder = device.createCommandEncoder({
            label: "JavaScript Triangle Command Encoder"
        })
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor)

        passEncoder.setPipeline(pipeline)
        passEncoder.draw(3)
        passEncoder.end()

        device.queue.submit([commandEncoder.finish()])
    }
    render(device,renderPassDescriptor)
}