module.exports = function() {
    var main = './src/index.ts';

    var config = {
        main: main,

        allts: [
            main,
            './src/**/*.ts'
        ],

        tslint: {
            rules: './tslint.json',
            formatter: 'stylish'
        }
    };

    return config;
};