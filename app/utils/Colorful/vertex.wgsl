@vertex
fn vs_main(
    @builtin(vertex_index) vertexIndex: u32
) -> OurVertexShaderOutput {
    let pos = array<vec2f,3> (
        vec2f(0.0,0.5),
        vec2f(-0.5,-0.5),
        vec2f(0.5,-0.5)
    );
    let color = array<vec4f,3>(
        vec4f(1,0,0,1),
        vec4f(0,1,0,1),
        vec4f(0,0,1,1)
    );
    var vsOutput: OurVertexShaderOutput;
    vsOutput.position = vec4f(pos[vertexIndex], 0.0, 1.0);
    vsOutput.color = color[vertexIndex];
    return vsOutput;
}