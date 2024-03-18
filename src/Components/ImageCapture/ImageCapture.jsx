import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import styled from 'styled-components';

function ImageCapture({ children }) {
    const containerRef = useRef(null);

    const handleCapture = () => {
        html2canvas(containerRef.current, {
            backgroundColor: 'black', // Establecer el fondo negro
            scale: 3,
        }).then((canvas) => {
            // Crear un enlace para descargar la imagen
            const link = document.createElement('a');
            link.download = 'captured_image.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    };

    return (
        <CapturerDiv>
            <div ref={containerRef}>{children}</div>
            <Button onClick={handleCapture}>Descargar Proxy</Button>
        </CapturerDiv>
    );
}

export default ImageCapture;

const CapturerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    margin-top: 20px;
    border-radius: 20px;
`;
