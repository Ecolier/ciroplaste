import StyleDictionary from 'style-dictionary';

function getStyleDictionaryConfig(theme) {
    return {
        source: [
            `tokens/${theme}/*.json`,
            'tokens/text.json',
        ],
        platforms: {
            web: {
                transformGroup: 'web',
                buildPath: `build/web/${theme}/`,
                files: [
                    {
                        destination: 'variables.css',
                        format: 'css/variables',
                        options: {
                            selector: `:root.${theme}`,
                        },
                    },
                ],
            },
        },
    };
}

['light', 'dark'].map(function (theme) {
    const sd = new StyleDictionary(getStyleDictionaryConfig(theme));
    sd.buildPlatform('web');
});