import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const convertSvgToPng = (svgUrl) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous'; // Importante para evitar problemas de CORS
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            const pngUrl = canvas.toDataURL('image/png');
            resolve(pngUrl);
        };
        img.onerror = reject;
        img.src = svgUrl;
    });
};

const TextWithSymbols = ({ text, svgSize }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const splitText = text.split(/({[^{}]+})/);
        const imagePromises = splitText.map((part) => {
            if (part.startsWith('{') && part.endsWith('}')) {
                const symbolName = part.replace(/[{}]/g, '');
                const svgPath = `/SVG/${symbolName}.svg`;
                return convertSvgToPng(svgPath);
            }
            return Promise.resolve(part);
        });

        Promise.all(imagePromises).then((loadedImages) => {
            setImages(
                loadedImages.map((src, index) => {
                    if (src.startsWith('data:image/png')) {
                        return (
                            <SvgImage
                                style={{
                                    width: svgSize,
                                }}
                                key={index}
                                src={src}
                                alt={`Symbol ${index}`}
                            />
                        );
                    }
                    return <TextSpan key={index}>{src}</TextSpan>;
                })
            );
        });
    }, [text, svgSize]);

    return <>{images}</>;
};

export default TextWithSymbols;
// Componente estilizado para los SVGs
const SvgImage = styled.img`
    aspect-ratio: 1;
    vertical-align: -25%;
`;

const TextSpan = styled.span`
    vertical-align: middle; /* Asegura que el texto se alinee con las imágenes */
    line-height: normal; /* Ajusta esto según sea necesario para alinear mejor el texto con los símbolos */
`;
