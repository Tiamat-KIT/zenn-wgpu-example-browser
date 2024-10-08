import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import { comlink } from "vite-plugin-comlink";

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      interval: 1000
    }
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
    wasm(),
    topLevelAwait(),
    comlink()
  ],
  worker:{
    plugins: () => [comlink()]
  }
});
