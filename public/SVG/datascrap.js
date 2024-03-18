import axios from 'axios';
import { promises as fs } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Obtiene el directorio actual de manera compatible con módulos ES
const __dirname = dirname(fileURLToPath(import.meta.url));

// URL de la API de Scryfall para obtener los símbolos de cartas
const apiURL = 'https://api.scryfall.com/symbology';

// Función para descargar y guardar un SVG
async function downloadAndSaveSVG(url, filename) {
    try {
        const response = await axios.get(url, { responseType: 'text' });
        const svgData = response.data;
        // Guardar el SVG en un archivo en el directorio actual
        await fs.writeFile(`${__dirname}/${filename}.svg`, svgData, 'utf-8');
        console.log(`SVG guardado: ${filename}.svg`);
    } catch (error) {
        console.error(
            `Error al descargar o guardar el SVG de ${filename}: ${error}`
        );
    }
}

// Función principal para obtener los símbolos de cartas y descargar los SVGs
async function downloadCardSymbols() {
    try {
        const response = await axios.get(apiURL);
        const symbols = response.data.data; // Acceder a la propiedad data que contiene los símbolos

        // Iterar sobre cada símbolo de carta y descargar el SVG
        symbols.forEach((symbol) => {
            const svgUrl = symbol.svg_uri;
            const filename = symbol.symbol.replace(/[{}]/g, ''); // Remover caracteres especiales del nombre
            downloadAndSaveSVG(svgUrl, filename);
        });
    } catch (error) {
        console.error(
            `Error al obtener los símbolos de cartas desde la API: ${error}`
        );
    }
}

// Ejecutar la función principal
downloadCardSymbols();
