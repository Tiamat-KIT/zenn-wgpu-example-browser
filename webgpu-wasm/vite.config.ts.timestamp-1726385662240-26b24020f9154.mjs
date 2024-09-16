// vite.config.ts
import { vitePlugin as remix } from "file:///mnt/c/Users/taito/Documents/webgpu-wasm/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///mnt/c/Users/taito/Documents/webgpu-wasm/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///mnt/c/Users/taito/Documents/webgpu-wasm/node_modules/vite-tsconfig-paths/dist/index.mjs";
import wasm from "file:///mnt/c/Users/taito/Documents/webgpu-wasm/node_modules/vite-plugin-wasm/exports/import.mjs";
import topLevelAwait from "file:///mnt/c/Users/taito/Documents/webgpu-wasm/node_modules/vite-plugin-top-level-await/exports/import.mjs";
import { comlink } from "file:///mnt/c/Users/taito/Documents/webgpu-wasm/node_modules/vite-plugin-comlink/dist/index.mjs";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvdGFpdG8vRG9jdW1lbnRzL3dlYmdwdS13YXNtXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2MvVXNlcnMvdGFpdG8vRG9jdW1lbnRzL3dlYmdwdS13YXNtL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvYy9Vc2Vycy90YWl0by9Eb2N1bWVudHMvd2ViZ3B1LXdhc20vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyB2aXRlUGx1Z2luIGFzIHJlbWl4IH0gZnJvbSBcIkByZW1peC1ydW4vZGV2XCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcbmltcG9ydCB3YXNtIGZyb20gXCJ2aXRlLXBsdWdpbi13YXNtXCI7XG5pbXBvcnQgdG9wTGV2ZWxBd2FpdCBmcm9tIFwidml0ZS1wbHVnaW4tdG9wLWxldmVsLWF3YWl0XCI7XG5pbXBvcnQgeyBjb21saW5rIH0gZnJvbSBcInZpdGUtcGx1Z2luLWNvbWxpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlbWl4KHtcbiAgICAgIGZ1dHVyZToge1xuICAgICAgICB2M19mZXRjaGVyUGVyc2lzdDogdHJ1ZSxcbiAgICAgICAgdjNfcmVsYXRpdmVTcGxhdFBhdGg6IHRydWUsXG4gICAgICAgIHYzX3Rocm93QWJvcnRSZWFzb246IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICB3YXNtKCksXG4gICAgdG9wTGV2ZWxBd2FpdCgpLFxuICAgIGNvbWxpbmsoKVxuICBdLFxuICB3b3JrZXI6e1xuICAgIHBsdWdpbnM6ICgpID0+IFtjb21saW5rKCldXG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUyxTQUFTLGNBQWMsYUFBYTtBQUM5VSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFVBQVU7QUFDakIsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUyxlQUFlO0FBRXhCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLFFBQVE7QUFBQSxRQUNOLG1CQUFtQjtBQUFBLFFBQ25CLHNCQUFzQjtBQUFBLFFBQ3RCLHFCQUFxQjtBQUFBLE1BQ3ZCO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsSUFDZCxLQUFLO0FBQUEsSUFDTCxjQUFjO0FBQUEsSUFDZCxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsUUFBTztBQUFBLElBQ0wsU0FBUyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQUEsRUFDM0I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
