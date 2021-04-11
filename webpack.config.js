/** @type {import("webpack").Configuration} */
const input_home = "./src/js/home/index.js";
const input_play = "./src/js/play/index.js";

const mode_dev = "development";
const mode_pro = "production";
const webpack_mode = mode_dev;

const play = {
    mode: webpack_mode,
    entry: input_play,
    output: {
        filename: "play.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env',
                    ]
                }
            },
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}

const home = {
    mode: webpack_mode,
    entry: input_home,
    output: {
        filename: "home.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env',
                    ]
                }
            },
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}

module.exports = { play, home };