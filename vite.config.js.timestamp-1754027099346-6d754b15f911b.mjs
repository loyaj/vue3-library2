// vite.config.js
import { globSync } from "file:///home/project/node_modules/glob/dist/esm/index.js";
import path, { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import vue from "file:///home/project/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///home/project/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///home/project/vite.config.js";
var __dirname = dirname(fileURLToPath(__vite_injected_original_import_meta_url));
var componentEntries = Object.fromEntries(
  globSync("src/components/*/index.js").map((filename) => [
    // Transform e.g. src/components/LuckyButton/index.js -> components/LuckyButton
    `components/${path.basename(path.dirname(filename))}`,
    fileURLToPath(new URL(filename, __vite_injected_original_import_meta_url))
  ])
);
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      outputDir: "dist",
      staticImport: true,
      skipDiagnostics: false,
      tsconfigPath: "./tsconfig.json",
      rollupTypes: true,
      include: ["src/**/*.vue", "src/**/*.js", "lib/**/*.js"],
      exclude: ["node_modules", "dist", "**/*.test.*", "**/*.spec.*"]
    })
  ],
  build: {
    lib: {
      entry: {
        index: "lib/index.js",
        ...componentEntries,
        "services/notify": "lib/services/notify.js"
      },
      formats: ["es"]
    },
    sourcemap: true,
    minify: false
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  test: {
    environment: "jsdom",
    mockReset: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBnbG9iU3luYyB9IGZyb20gXCJnbG9iXCI7XG5pbXBvcnQgcGF0aCwgeyBkaXJuYW1lLCByZXNvbHZlIH0gZnJvbSBcIm5vZGU6cGF0aFwiO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gXCJub2RlOnVybFwiO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcblxuY29uc3QgX19kaXJuYW1lID0gZGlybmFtZShmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpO1xuXG5jb25zdCBjb21wb25lbnRFbnRyaWVzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICBnbG9iU3luYyhcInNyYy9jb21wb25lbnRzLyovaW5kZXguanNcIikubWFwKGZpbGVuYW1lID0+IFtcbiAgICAvLyBUcmFuc2Zvcm0gZS5nLiBzcmMvY29tcG9uZW50cy9MdWNreUJ1dHRvbi9pbmRleC5qcyAtPiBjb21wb25lbnRzL0x1Y2t5QnV0dG9uXG4gICAgYGNvbXBvbmVudHMvJHtwYXRoLmJhc2VuYW1lKHBhdGguZGlybmFtZShmaWxlbmFtZSkpfWAsXG4gICAgZmlsZVVSTFRvUGF0aChuZXcgVVJMKGZpbGVuYW1lLCBpbXBvcnQubWV0YS51cmwpKVxuICBdKVxuKTtcblxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgZHRzKHtcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgICBvdXRwdXREaXI6IFwiZGlzdFwiLFxuICAgICAgc3RhdGljSW1wb3J0OiB0cnVlLFxuICAgICAgc2tpcERpYWdub3N0aWNzOiBmYWxzZSxcbiAgICAgIHRzY29uZmlnUGF0aDogXCIuL3RzY29uZmlnLmpzb25cIixcbiAgICAgIHJvbGx1cFR5cGVzOiB0cnVlLFxuICAgICAgaW5jbHVkZTogW1wic3JjLyoqLyoudnVlXCIsIFwic3JjLyoqLyouanNcIiwgXCJsaWIvKiovKi5qc1wiXSxcbiAgICAgIGV4Y2x1ZGU6IFtcIm5vZGVfbW9kdWxlc1wiLCBcImRpc3RcIiwgXCIqKi8qLnRlc3QuKlwiLCBcIioqLyouc3BlYy4qXCJdXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeToge1xuICAgICAgICBpbmRleDogXCJsaWIvaW5kZXguanNcIixcbiAgICAgICAgLi4uY29tcG9uZW50RW50cmllcyxcbiAgICAgICAgXCJzZXJ2aWNlcy9ub3RpZnlcIjogXCJsaWIvc2VydmljZXMvbm90aWZ5LmpzXCJcbiAgICAgIH0sXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiXVxuICAgIH0sXG4gICAgc291cmNlbWFwOiB0cnVlLFxuICAgIG1pbmlmeTogZmFsc2VcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfVxuICB9LFxuICB0ZXN0OiB7XG4gICAgZW52aXJvbm1lbnQ6IFwianNkb21cIixcbiAgICBtb2NrUmVzZXQ6IHRydWVcbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsZ0JBQWdCO0FBQ2xQLE9BQU8sUUFBUSxTQUFTLGVBQWU7QUFDdkMsU0FBUyxxQkFBcUI7QUFFOUIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQU5rSCxJQUFNLDJDQUEyQztBQVFuTCxJQUFNLFlBQVksUUFBUSxjQUFjLHdDQUFlLENBQUM7QUFFeEQsSUFBTSxtQkFBbUIsT0FBTztBQUFBLEVBQzlCLFNBQVMsMkJBQTJCLEVBQUUsSUFBSSxjQUFZO0FBQUE7QUFBQSxJQUVwRCxjQUFjLEtBQUssU0FBUyxLQUFLLFFBQVEsUUFBUSxDQUFDLENBQUM7QUFBQSxJQUNuRCxjQUFjLElBQUksSUFBSSxVQUFVLHdDQUFlLENBQUM7QUFBQSxFQUNsRCxDQUFDO0FBQ0g7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxNQUNsQixXQUFXO0FBQUEsTUFDWCxjQUFjO0FBQUEsTUFDZCxpQkFBaUI7QUFBQSxNQUNqQixjQUFjO0FBQUEsTUFDZCxhQUFhO0FBQUEsTUFDYixTQUFTLENBQUMsZ0JBQWdCLGVBQWUsYUFBYTtBQUFBLE1BQ3RELFNBQVMsQ0FBQyxnQkFBZ0IsUUFBUSxlQUFlLGFBQWE7QUFBQSxJQUNoRSxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsR0FBRztBQUFBLFFBQ0gsbUJBQW1CO0FBQUEsTUFDckI7QUFBQSxNQUNBLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDaEI7QUFBQSxJQUNBLFdBQVc7QUFBQSxJQUNYLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsV0FBVyxPQUFPO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixhQUFhO0FBQUEsSUFDYixXQUFXO0FBQUEsRUFDYjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
