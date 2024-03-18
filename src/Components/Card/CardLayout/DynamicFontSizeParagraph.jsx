import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import TextWithSymbols from './TextWithSymbols';

const DynamicFontSizeParagraph = ({ text }) => {
    const paragraphRef = useRef(null);
    let fontSize = 12;

    useEffect(() => {
        const paragraph = paragraphRef.current;
        const textLength = text.length;

        // Ajustar la proporción de tamaño de fuente en función de la longitud del texto
        fontSize = 100 / Math.sqrt(textLength); // Ejemplo de fórmula personalizada

        // Establecer un tamaño de fuente mínimo
        const maxFontSize = 14; // Tamaño de fuente mínimo en píxeles
        const minFontSize = 11; // Tamaño de fuente mínimo en píxeles

        // Limitar el tamaño de la fuente al tamaño máximo especificado
        fontSize = Math.min(maxFontSize, Math.max(minFontSize, fontSize));

        paragraph.style.fontSize = `${fontSize}px`;
    }, [text]);

    return (
        <StyledParagraph ref={paragraphRef}>
            <TextWithSymbols text={text} svgSize={fontSize} />
        </StyledParagraph>
    );
};

const StyledParagraph = styled.p`
    margin: 2px 5px;
`;

export default DynamicFontSizeParagraph;
