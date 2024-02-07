import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { unstable_vitePlugin as remix } from "@remix-run/dev";

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
});
