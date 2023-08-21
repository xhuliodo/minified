// Import Terser so we can use it
import { minify } from "terser";

// Import fs so we can read/write files
import fs from "fs";

// Define the config for how Terser should minify the code
// This is set to how you currently have this web tool configured
const config = {
    compress: {
        dead_code: true,
        drop_console: false,
        drop_debugger: true,
        keep_classnames: false,
        keep_fargs: true,
        keep_fnames: false,
        keep_infinity: false,
    },
    mangle: {
        eval: false,
        keep_classnames: false,
        keep_fnames: false,
        toplevel: false,
        safari10: false,
    },
    module: false,
    sourceMap: false,
    output: {
        comments: "some",
    },
};

// Load in your code to minify
const code = fs.readFileSync("uuidv7.js", "utf8");

// Minify the code with Terser
const minified = await minify(code, config);

// Save the code!
fs.writeFileSync("uuidv7.min.js", minified.code);
