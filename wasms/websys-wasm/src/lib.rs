mod utils;
mod jslike_gpu_funcs;

use gloo::utils::window;
use js_sys::Array;
use jslike_gpu_funcs::{create_command_encoder, create_render_pass_encoder, gpu_device_create_render_pipeline, gpu_device_create_shader_module};

/* use serde::{Deserialize, Serialize};
use tsify::Tsify; */
use wasm_bindgen::prelude::*;
use web_sys::{ GpuCanvasContext, GpuDevice, GpuTextureFormat, HtmlCanvasElement, OffscreenCanvas };

// Suggested code may be subject to a license. Learn more: ~LicenseLog:4238934443.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn requestAnimationFrame(closure: &Closure<dyn FnMut()>);

}

#[wasm_bindgen(start)]
pub fn main() {
    wasm_logger::init(wasm_logger::Config::default());
    log::debug!("Work WebAssembly!");
    utils::set_panic_hook();
}


#[wasm_bindgen]
struct RenderingGraphics {
    device: GpuDevice,
    context: GpuCanvasContext,
    format: GpuTextureFormat
}

#[wasm_bindgen]
impl RenderingGraphics {
    pub fn normal_initial(device: GpuDevice,canvas: HtmlCanvasElement) -> RenderingGraphics{
        let context = canvas
            .get_context("webgpu")
            .unwrap()
            .unwrap()
            .dyn_into::<GpuCanvasContext>()
            .expect("Context Cast Error");
        let format = window().navigator().gpu().get_preferred_canvas_format();
        RenderingGraphics {
            device,
            context,
            format
        }
    }
    pub fn thread_initial(device: GpuDevice,canvas: OffscreenCanvas) -> RenderingGraphics {
        let context = canvas.get_context("webgpu")
        .unwrap()
        .unwrap()
        .dyn_into::<GpuCanvasContext>()
        .expect("Context Cast Error");
        let format = window().navigator().gpu().get_preferred_canvas_format();
        RenderingGraphics {
            device,
            context,
            format
        }
    }

    pub fn wasm_gpu_single_color_draw(props:RenderingGraphics) {
        let configure = web_sys::GpuCanvasConfiguration::new(&props.device, props.format);
        props.context.configure(&configure).expect("Fail to configure canvas");

        let module = gpu_device_create_shader_module(&props.device, "Wasm_GpuShaderModule", "
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
        ");

        let render_pipeline = gpu_device_create_render_pipeline(&props.device, "Wasm_GpuRenderPipeLine", "auto", &module, props.format, "vs", "fs");
        let command_encoder = create_command_encoder(&props.device);

        // レンダーパスの設定をはじめる
        let gpu_render_pass = create_render_pass_encoder(
            props.context,
            "GPURenderPassEncoder Created by WasmModule",
            &command_encoder
        );
        gpu_render_pass.set_pipeline(&render_pipeline);
        gpu_render_pass.draw(3);
        gpu_render_pass.end();
        
        let closure_render = Closure::once(move || {
            let command_buffer = command_encoder.finish();
            command_buffer.set_label("Wasm_GpuCommandBuffer");
            let command_buffers = Array::new();
            command_buffers.push(&command_buffer);
            props.device.queue().submit(&command_buffers);
        });
        requestAnimationFrame(&closure_render);
        closure_render.forget();
        
    }

    pub fn wasm_gpu_colorful_color_draw(props:RenderingGraphics){
        let configure = web_sys::GpuCanvasConfiguration::new(&props.device, props.format);
        props.context.configure(&configure).expect("Fail to configure canvas");

        let module = gpu_device_create_shader_module(&props.device, "Wasm_GpuShaderModule", "
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
        ");

        let render_pipeline = gpu_device_create_render_pipeline(&props.device, "Wasm_GpuRenderPipeLine", "auto", &module, props.format, "vs", "fs");
        let command_encoder = create_command_encoder(&props.device);

        // レンダーパスの設定をはじめる
        let gpu_render_pass = create_render_pass_encoder(
            props.context,
            "GPURenderPassEncoder Created by WasmModule",
            &command_encoder
        );
        gpu_render_pass.set_pipeline(&render_pipeline);
        gpu_render_pass.draw(3);
        gpu_render_pass.end();
        let closure_render = Closure::once(move || {
            let command_buffer = command_encoder.finish();
            command_buffer.set_label("Wasm_GpuCommandBuffer");
            let command_buffers = Array::new();
            command_buffers.push(&command_buffer);
            props.device.queue().submit(&command_buffers);
        });
        requestAnimationFrame(&closure_render);
        closure_render.forget();
    }
}


