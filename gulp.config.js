module.exports = function() {
    var config = {
        main: './src/index.ts',

        tslint: {
            rules: './tslint.json',
            formatter: 'stylish'
        }
    };

    return config;
};