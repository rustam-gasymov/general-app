import peerDepsExternal from "rollup-plugin-peer-deps-external";
import localResolve from "rollup-plugin-local-resolve";
import multi from "@rollup/plugin-multi-entry";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const plugins = [
  typescript({
    typescript: require("typescript"),
  }),
  peerDepsExternal({ includeDependencies: true }),
  multi(),
  localResolve(),
  terser(),
  postcss(),
  ,
];

const config = [
  {
    input: "./src/components/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
  {
    input: "./src/components/index.ts",
    output: {
      file: pkg.main,
      format: "esm",
      sourcemap: true,
      assetFileNames: "[name]-[hash][extname]",
    },
    plugins,
  },
];

export default config;
