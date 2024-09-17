@fragment
fn fs_main(fsInput: OurVertexShaderOutput) -> @location(0) vec4f {
    return fsInput.color;
}