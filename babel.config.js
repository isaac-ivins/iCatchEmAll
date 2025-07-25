export const presets = ['babel-preset-expo'];
export const plugins = [
    [
        'module-resolver',
        {
            root: ['./src'],
            alias: {
                '@constants': './src/constants',
                '@hooks': './src/hooks',
                '@navigation': './src/navigation',
                '@screens': './src/screens'
            },
        },
    ],
];