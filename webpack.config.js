let nodeExternals = require('webpack-node-externals')
let slws = require("serverless-webpack")
module.exports = {
    entry: slws.lib.entries,
    externals: [nodeExternals()]
}