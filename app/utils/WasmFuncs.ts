const wasm = await import("~/wasm-dist/wgpu_sys")

async function WasmFuncSimpleTriangle(canvas: HTMLCanvasElement) {
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

    const shader = wasm.gpu_device_create_shader_module(
        device,
        "created wasm_module's shader module",
        `
        @vertex fn vs(
            @builtin(vertex_index) vertexIndex : u32
        ) -> @builtin(position) vec4f {
            let pos = array(
            vec2f( 0.0,  0.5),  // top center
            vec2f(-0.5, -0.5),  // bottom left
            vec2f( 0.5, -0.5)   // bottom right
            );

            return vec4f(pos[vertexIndex], 0.0, 1.0);
        }

        @fragment fn fs() -> @location(0) vec4f {
            return vec4f(1.0, 0.0, 0.0, 1.0);
        }
    `
    )
    const render_pipeline = wasm.gpu_device_create_render_pipeline(
        device,
        "created wasm_module's shader module",
        "auto",
        shader,
        format,
        "vs",
        "fs"
    )

    const command_encoder = wasm.create_command_encoder(device)

    const render_pass_encoder = wasm.create_render_pass_encoder(
        context,
        "created wasm_module's render pass",
        command_encoder
    )

    render_pass_encoder.setPipeline(render_pipeline)
    render_pass_encoder.draw(3)
    render_pass_encoder.end()
    
    device.queue.submit([command_encoder.finish()])    
}

async function WasmFuncWorkerSimpleTriangle(canvas: OffscreenCanvas) {
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

    const shader = wasm.gpu_device_create_shader_module(
        device,
        "created wasm_module's shader module",
        `
        @vertex fn vs(
            @builtin(vertex_index) vertexIndex : u32
        ) -> @builtin(position) vec4f {
            let pos = array(
            vec2f( 0.0,  0.5),  // top center
            vec2f(-0.5, -0.5),  // bottom left
            vec2f( 0.5, -0.5)   // bottom right
            );

            return vec4f(pos[vertexIndex], 0.0, 1.0);
        }

        @fragment fn fs() -> @location(0) vec4f {
            return vec4f(1.0, 0.0, 0.0, 1.0);
        }
    `
    )
    const render_pipeline = wasm.gpu_device_create_render_pipeline(
        device,
        "created wasm_module's shader module",
        "auto",
        shader,
        format,
        "vs_main",
        "fs_main"
    )

    const command_encoder = wasm.create_command_encoder(device)

    const render_pass_encoder = wasm.create_render_pass_encoder(
        context,
        "created wasm_module's render pass",
        command_encoder
    )

    render_pass_encoder.setPipeline(render_pipeline)
    render_pass_encoder.draw(3)
    render_pass_encoder.end()
    
    device.queue.submit([command_encoder.finish()]) 
}

async function WasmFuncColorfulTriangle(canvas: HTMLCanvasElement) {
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

    const shader = wasm.gpu_device_create_shader_module(
        device,
        "created wasm_module's shader module",`
            struct OurVertexShaderOutput {
                @builtin(position) position: vec4f,
                @location(0) color: vec4f,
            };
            
            
            @vertex fn vs(
                @builtin(vertex_index) vertexIndex : u32
            ) -> OurVertexShaderOutput {
                let pos = array(
                    vec2f( 0.0,  0.5),  // top center
                    vec2f(-0.5, -0.5),  // bottom left
                    vec2f( 0.5, -0.5)   // bottom right
                );
                var color = array<vec4f, 3>(
                    vec4f(1, 0, 0, 1), // red
                    vec4f(0, 1, 0, 1), // green
                    vec4f(0, 0, 1, 1), // blue
                );

                var vsOutput: OurVertexShaderOutput;
                vsOutput.position = vec4f(pos[vertexIndex], 0.0, 1.0);
                vsOutput.color = color[vertexIndex];
                return vsOutput;
            }

            @fragment fn fs(fsInput: OurVertexShaderOutput) -> @location(0) vec4f {
                return fsInput.color;
            }
        `
    )
    const render_pipeline = wasm.gpu_device_create_render_pipeline(
        device,
        "created wasm_module's shader module",
        "auto",
        shader,
        format,
        "vs",
        "fs"
    )

    const command_encoder = wasm.create_command_encoder(device)

    const render_pass_encoder = wasm.create_render_pass_encoder(
        context,
        "created wasm_module's render pass",
        command_encoder
    )

    render_pass_encoder.setPipeline(render_pipeline)
    render_pass_encoder.draw(3)
    render_pass_encoder.end()
    
    device.queue.submit([command_encoder.finish()])    
}

async function WasmFuncWorkerColorfulTriangle(canvas: OffscreenCanvas) {
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

    const shader = wasm.gpu_device_create_shader_module(
        device,
        "created wasm_module's shader module",`
            struct OurVertexShaderOutput {
                @builtin(position) position: vec4f,
                @location(0) color: vec4f,
            };
            
            
            @vertex fn vs(
                @builtin(vertex_index) vertexIndex : u32
            ) -> OurVertexShaderOutput {
                let pos = array(
                    vec2f( 0.0,  0.5),  // top center
                    vec2f(-0.5, -0.5),  // bottom left
                    vec2f( 0.5, -0.5)   // bottom right
                );
                var color = array<vec4f, 3>(
                    vec4f(1, 0, 0, 1), // red
                    vec4f(0, 1, 0, 1), // green
                    vec4f(0, 0, 1, 1), // blue
                );

                var vsOutput: OurVertexShaderOutput;
                vsOutput.position = vec4f(pos[vertexIndex], 0.0, 1.0);
                vsOutput.color = color[vertexIndex];
                return vsOutput;
            }

            @fragment fn fs(fsInput: OurVertexShaderOutput) -> @location(0) vec4f {
                return fsInput.color;
            }
        `
    )
    const render_pipeline = wasm.gpu_device_create_render_pipeline(
        device,
        "created wasm_module's shader module",
        "auto",
        shader,
        format,
        "vs",
        "fs"
    )

    const command_encoder = wasm.create_command_encoder(device)

    const render_pass_encoder = wasm.create_render_pass_encoder(
        context,
        "created wasm_module's render pass",
        command_encoder
    )

    render_pass_encoder.setPipeline(render_pipeline)
    render_pass_encoder.draw(3)
    render_pass_encoder.end()
    
    device.queue.submit([command_encoder.finish()])    
}

export {
    WasmFuncSimpleTriangle,
    WasmFuncWorkerSimpleTriangle,
    WasmFuncColorfulTriangle,
    WasmFuncWorkerColorfulTriangle
}

