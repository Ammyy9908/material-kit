// rollup.config.js
import uglify from "rollup-plugin-uglify";
import babel from "rollup-plugin-babel";

const config = {
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    uglify(),
  ],
  input: "src/components/Inputs/Buttons/Button.js",
  external: ["react"],
  output: {
    format: "umd",
    name: "Button",
    globals: {
      react: "React",
    },
  },
};
export default config;
