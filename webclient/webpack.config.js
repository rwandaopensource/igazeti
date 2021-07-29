module.exports = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'ts-loader',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    entry: path.resolve(__dirname, 'src', 'index.ts'),
};
