{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.bun
    pkgs.wasm-pack
    pkgs.cargo
    pkgs.rustup
    pkgs.gcc
    pkgs.bun
  ];
  idx.extensions = [
    
  ];
  idx.previews = {
    previews = {
      
    };
  };
}