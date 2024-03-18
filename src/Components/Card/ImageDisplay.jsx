import React, { useState, useEffect } from 'react';
import ImageCapture from '../ImageCapture/ImageCapture';
import Normal from './CardLayout/Normal';
import styled from 'styled-components';

const ImageDisplay = ({ img, componenteSeleccionado, action }) => {
    const [selectedLayout, setSelectedLayout] = useState(null);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        if (componenteSeleccionado) {
            setSelectedLayout(componenteSeleccionado.layout);
        } else {
            setSelectedLayout(null);
        }
    }, [componenteSeleccionado]);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <ProxyDiv>
            <ImageCapture action={action}>
                <div>
                    {selectedLayout === 'normal' && (
                        <Normal
                            img={img}
                            data={componenteSeleccionado}
                            customName={inputText}
                        />
                    )}
                </div>
            </ImageCapture>
            <h4>
                Nombre:
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Introduce el texto aquí"
                />
            </h4>
        </ProxyDiv>
    );
};

export default ImageDisplay;

const ProxyDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 5px;
`;
