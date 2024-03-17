const searchParameters = {
    or: ['colors'],
    colors: ['g', 'u'], // Verde y azul
    manaCost: '>=3',
    type: 'creature',
    keywords: ['flying'],
    rarity: 'rare',
    set: 'iko', // Ejemplo: Ikoria

    // ...otros parámetros según la documentación de Scryfall
};

function generateSearchUrl(params) {
    const baseUrl = 'https://api.scryfall.com/cards/search?q=';
    let queryParts = [];

    function adjustString(input) {
        // Definimos una expresión regular que busca las expresiones especificadas
        const regex = /(>|<|=|>=|<=|!=)/;

        // Verificamos si la cadena contiene alguna de las expresiones
        if (regex.test(input)) {
            // Si contiene alguna, devolvemos la cadena tal cual
            return input;
        } else {
            // Si no contiene ninguna, añadimos ":" al final y la devolvemos
            return `:${input}`;
        }
    }

    // Incorporando múltiples parámetros basados en la documentación
    const parameterHandlers = {
        colors: (value) => `c%3A${value}`,
        notColors: (value) => `-c%3A${value}`,
        colorIdentity: (value) => `id%3A${value}`,
        type: (value) => `t%3A${encodeURIComponent(value)}`,
        notType: (value) => `-t%3A${encodeURIComponent(value)}`,
        text: (value) => `o%3A%22${encodeURIComponent(value)}%22`,
        manaCost: (value) => `m${encodeURIComponent(adjustString(value))}`,
        manaValue: (value) => `mv%3A${value}`,
        produceMana: (value) => `produces%3A${value}`,
        power: (value) => `pow%3A${value}`,
        toughness: (value) => `tou%3A${value}`,
        loyalty: (value) => `loy%3A${value}`,
        rarity: (value) => `r%3A${value}`,
        set: (value) => `wasin%3A${value}`,
        formatLegality: (value) => `f%3A${value}`,
        price: (value) => `eur%3A${value}`,
        artist: (value) => `a:%22${encodeURIComponent(value)}%22`,
        year: (value) => `year%3A${value}`,
        language: (value) => `lang%3A${value}`,
        isReserved: () => `is%3Areserved`,
        isFoil: () => `is%3Afoil`,
        isNonFoil: () => `is%3Anonfoil`,
        hasWatermark: (value) => `has%3Awatermark`,
        watermark: (value) => `wm%3A${value}`,
        borderColor: (value) => `border%3A${value}`,
        frameType: (value) => `frame%3A${value}`,
        // Añade más manejadores según necesites
    };

    Object.entries(params).forEach(([key, value]) => {
        if (parameterHandlers[key] && key !== 'or') {
            if (Array.isArray(value) && params.or && params.or.includes(key)) {
                let joinedOrvalue = value.join('+or+');
                queryParts.push(parameterHandlers[key](joinedOrvalue));
            } else if (Array.isArray(value)) {
                let joinedvalue = value.join('');
                queryParts.push(parameterHandlers[key](joinedvalue));
            } else {
                queryParts.push(parameterHandlers[key](value));
            }
        }
    });

    const fullQuery = queryParts.join('+');
    return `${baseUrl}${fullQuery}`;
}
