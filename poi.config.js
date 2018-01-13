module.exports = (options, req) => ({
    // https://doc.webpack-china.org/concepts/entry-points/
    entry: {
        'index': './src/index.ts'
    },
    dist: 'docs',
    // https://github.com/jantimon/html-webpack-plugin
    html: {
        chunk: 'index',
        filename: 'index.html',
        template: './src/index.html',
        inject: false
    },
    filename: {
        js: 'assets/[name].js',
        css: 'assets/[name].css',
        // fonts: 'assets/fonts/[name].[ext]',
    },
    staticFolder: "static",
    // Other options
    sourceMap: true,
    presets: [
        require('poi-preset-typescript')( /* options */ )
    ],
});

// Note that you can directly export an object too:
// module.exports = { port: 5000 }