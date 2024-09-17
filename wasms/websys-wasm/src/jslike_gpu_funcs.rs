use wasm_bindgen::JsValue;
use web_sys::{
    GpuCanvasContext, GpuColorTargetState, GpuCommandEncoder, GpuDevice, GpuFragmentState, GpuRenderPassColorAttachment, GpuRenderPassDescriptor, GpuRenderPassEncoder, GpuRenderPipeline, GpuRenderPipelineDescriptor, GpuShaderModule, GpuShaderModuleDescriptor, GpuTextureFormat, GpuVertexState
};
use js_sys::Array;
use wasm_bindgen::prelude::*;




#[wasm_bindgen]
pub fn gpu_device_create_shader_module(device: &GpuDevice,label: &str,code: &str) -> GpuShaderModule{
    let shader_module_descriptor = GpuShaderModuleDescriptor::new(code);
    let shader_module = device
        .create_shader_module(&shader_module_descriptor)
        .expect("Fail to create shader module");
    shader_module.set_label(label);
    return shader_module
}

#[wasm_bindgen]
pub fn gpu_device_create_render_pipeline(
    device: &GpuDevice,
    label: &str,
    layout: &str,
    shader_module: &GpuShaderModule,
    gpu_format: GpuTextureFormat,
    vertex_entry: &str,
    fragment_entry:&str)
-> GpuRenderPipeline {
    let gpu_vertex_targets = GpuVertexState::new(shader_module);
    gpu_vertex_targets.set_entry_point(vertex_entry);

    let gpu_fragment_state = GpuFragmentState::new(shader_module, &JsValue::from(GpuColorTargetState::new(gpu_format)));
    gpu_fragment_state.set_entry_point(fragment_entry);
    let fragment_targets  = Array::new();
    fragment_targets.push(&JsValue::from(GpuColorTargetState::new(gpu_format)));
    gpu_fragment_state.set_targets(&fragment_targets);

    let render_pipeline_descriptor = GpuRenderPipelineDescriptor::new(&JsValue::from_str(layout),&gpu_vertex_targets);
    render_pipeline_descriptor.set_fragment(&gpu_fragment_state);


    let render_pipeline = device.create_render_pipeline(&render_pipeline_descriptor)
        .expect("Wasm GPU Render Pipeline Create Error");
    render_pipeline.set_label(label);
    return render_pipeline
}

#[wasm_bindgen]
pub fn create_command_encoder(gpu_device: &GpuDevice) -> GpuCommandEncoder {
    let encoder = gpu_device.create_command_encoder();
    encoder.set_label("Wasm_GpuCommandEncoder");
    return encoder
}

#[wasm_bindgen]
pub fn create_render_pass_encoder(
    context: GpuCanvasContext,
    render_pass_label: &str,
    command_encoder: &GpuCommandEncoder
) -> GpuRenderPassEncoder {
    // テクスチャビューを取得
    let current_texture_view = context
        .get_current_texture()
        .expect("Fail to get current texture")
        .create_view()
        .expect("Fail to create view");

    // カラーアタッチメントの設定を行う
    let color_attachment = GpuRenderPassColorAttachment::new(
        web_sys::GpuLoadOp::Clear,
        web_sys::GpuStoreOp::Store,
        &current_texture_view,
    );
    let color_attachments = Array::new();
    color_attachments.push(&color_attachment);
    let render_pass_descriptor = GpuRenderPassDescriptor::new(&color_attachments);
    render_pass_descriptor.set_label(render_pass_label);
    render_pass_descriptor.set_color_attachments(&color_attachments);
    return command_encoder.begin_render_pass(&render_pass_descriptor).expect("RenderPassEncoder Create Error")
    
}