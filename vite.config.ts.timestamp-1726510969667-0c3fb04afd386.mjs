// vite.config.ts
import { vitePlugin as remix } from "file:///mnt/c/Users/taito/Documents/zenn-wgpu-example-browser/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///mnt/c/Users/taito/Documents/zenn-wgpu-example-browser/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///mnt/c/Users/taito/Documents/zenn-wgpu-example-browser/node_modules/vite-tsconfig-paths/dist/index.mjs";
import wasm from "file:///mnt/c/Users/taito/Documents/zenn-wgpu-example-browser/node_modules/vite-plugin-wasm/exports/import.mjs";
import topLevelAwait from "file:///mnt/c/Users/taito/Documents/zenn-wgpu-example-browser/node_modules/vite-plugin-top-level-await/exports/import.mjs";
import { comlink } from "file:///mnt/c/Users/taito/Documents/zenn-wgpu-example-browser/node_modules/vite-plugin-comlink/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      }
    }),
    tsconfigPaths(),
    wasm(),
    topLevelAwait(),
    comlink()
  ],
  worker: {
    plugins: () => [comlink()]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvdGFpdG8vRG9jdW1lbnRzL3plbm4td2dwdS1leGFtcGxlLWJyb3dzZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvYy9Vc2Vycy90YWl0by9Eb2N1bWVudHMvemVubi13Z3B1LWV4YW1wbGUtYnJvd3Nlci92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vbW50L2MvVXNlcnMvdGFpdG8vRG9jdW1lbnRzL3plbm4td2dwdS1leGFtcGxlLWJyb3dzZXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyB2aXRlUGx1Z2luIGFzIHJlbWl4IH0gZnJvbSBcIkByZW1peC1ydW4vZGV2XCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XHJcbmltcG9ydCB3YXNtIGZyb20gXCJ2aXRlLXBsdWdpbi13YXNtXCI7XHJcbmltcG9ydCB0b3BMZXZlbEF3YWl0IGZyb20gXCJ2aXRlLXBsdWdpbi10b3AtbGV2ZWwtYXdhaXRcIjtcclxuaW1wb3J0IHsgY29tbGluayB9IGZyb20gXCJ2aXRlLXBsdWdpbi1jb21saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlbWl4KHtcclxuICAgICAgZnV0dXJlOiB7XHJcbiAgICAgICAgdjNfZmV0Y2hlclBlcnNpc3Q6IHRydWUsXHJcbiAgICAgICAgdjNfcmVsYXRpdmVTcGxhdFBhdGg6IHRydWUsXHJcbiAgICAgICAgdjNfdGhyb3dBYm9ydFJlYXNvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgdHNjb25maWdQYXRocygpLFxyXG4gICAgd2FzbSgpLFxyXG4gICAgdG9wTGV2ZWxBd2FpdCgpLFxyXG4gICAgY29tbGluaygpXHJcbiAgXSxcclxuICB3b3JrZXI6e1xyXG4gICAgcGx1Z2luczogKCkgPT4gW2NvbWxpbmsoKV1cclxuICB9XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9WLFNBQVMsY0FBYyxhQUFhO0FBQ3hYLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sVUFBVTtBQUNqQixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLGVBQWU7QUFFeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osUUFBUTtBQUFBLFFBQ04sbUJBQW1CO0FBQUEsUUFDbkIsc0JBQXNCO0FBQUEsUUFDdEIscUJBQXFCO0FBQUEsTUFDdkI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxJQUNkLEtBQUs7QUFBQSxJQUNMLGNBQWM7QUFBQSxJQUNkLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxRQUFPO0FBQUEsSUFDTCxTQUFTLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFBQSxFQUMzQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
